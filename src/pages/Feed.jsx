import { useEffect, useState, useMemo } from "react";
import DiaryCard from "../components/DiaryCard";
import { apiUrl } from "../App";
import {
  Globe, Search, TrendingUp, PenSquare,
  Flame, Clock, Star, X, Rss, RefreshCw,
  SlidersHorizontal, ChevronDown, Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/* ─── Skeleton card ─── */
function SkeletonCard({ large }) {
  return (
    <div className={`rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] ${large ? "" : ""}`}>
      <div className={`skeleton w-full ${large ? "h-72" : "h-48"}`} />
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="skeleton w-7 h-7 rounded-full" />
          <div className="skeleton h-3 w-24 rounded" />
        </div>
        <div className="skeleton h-4 w-4/5 rounded" />
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-2/3 rounded" />
        <div className="flex items-center justify-between pt-1">
          <div className="skeleton h-3 w-16 rounded" />
          <div className="skeleton h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ─── Filter tabs ─── */
const FILTERS = [
  { id: "latest",   label: "Latest",   icon: <Clock size={13} /> },
  { id: "trending", label: "Trending", icon: <Flame size={13} /> },
  { id: "top",      label: "Top Rated",icon: <Star size={13} /> },
];

export default function Feed() {
  const { user } = useAuth();
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const [search, setSearch]   = useState("");
  const [filter, setFilter]   = useState("latest");
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async (silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/api/diary`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      const arr = Array.isArray(data) ? data : (data.posts || []);
      setPosts(arr);
    } catch {
      setError("Could not load stories. Check your connection.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  /* ─── filtered + sorted list ─── */
  const displayed = useMemo(() => {
    let list = posts.filter(p => {
      const q = search.toLowerCase();
      return !q || p.title?.toLowerCase().includes(q) || p.location?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q);
    });
    if (filter === "trending") list = [...list].sort((a, b) => (b.likes || 0) - (a.likes || 0));
    if (filter === "top")      list = [...list].sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
    return list;
  }, [posts, search, filter]);

  /* ─── featured post (first with media) ─── */
  const featured = posts.find(p => p.media?.[0]);
  const rest      = displayed.filter(p => p._id !== featured?._id);

  /* ══════════════════════════════════════════
      RENDER
  ══════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">

      {/* ══ HERO HEADER ══ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1600&q=70"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60" />

        <div className="relative max-w-7xl mx-auto px-5 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center shadow-md">
                  <Rss size={13} className="text-white" />
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Community Feed</span>
                <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/70 text-xs px-2.5 py-1 rounded-full ml-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                Travel Stories
              </h1>
              <p className="text-slate-300 text-sm">
                {loading
                  ? "Loading stories from around the world..."
                  : `${posts.length} stories from ${[...new Set(posts.map(p => p.location).filter(Boolean))].length}+ destinations`}
              </p>
            </div>

            {/* Search bar */}
            <div className="relative w-full md:w-80">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search stories, destinations..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/15 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Filter tabs + refresh */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-1.5">
              {FILTERS.map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    filter === f.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  {f.icon}{f.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => fetchPosts(true)}
              disabled={refreshing}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 text-xs font-medium transition-all duration-200 disabled:opacity-50"
            >
              <RefreshCw size={12} className={refreshing ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* ── Loading ── */}
        {loading && (
          <div>
            {/* Featured skeleton */}
            <div className="mb-8">
              <SkeletonCard large />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        )}

        {/* ── Error ── */}
        {!loading && error && (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-2xl bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/30 flex items-center justify-center mx-auto mb-5">
              <Globe size={32} className="text-rose-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Couldn't load stories</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto">{error}</p>
            <button onClick={() => fetchPosts()} className="btn-primary text-sm px-6 py-2.5">
              <RefreshCw size={14} /> Try again
            </button>
          </div>
        )}

        {/* ── Empty ── */}
        {!loading && !error && displayed.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center mx-auto mb-5">
              {search
                ? <Search size={32} className="text-slate-300 dark:text-slate-600" />
                : <PenSquare size={32} className="text-slate-300 dark:text-slate-600" />
              }
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
              {search ? `No results for "${search}"` : "No stories yet"}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto">
              {search
                ? "Try different keywords or clear the search."
                : "Be the first to share your travel experience with the world."}
            </p>
            <div className="flex gap-3 justify-center">
              {search
                ? <button onClick={() => setSearch("")} className="btn-secondary text-sm px-5 py-2.5">Clear search</button>
                : <Link to="/post" className="btn-primary text-sm px-5 py-2.5"><PenSquare size={14} />Write first story</Link>
              }
            </div>
          </div>
        )}

        {/* ── Posts ── */}
        {!loading && !error && displayed.length > 0 && (
          <>
            {/* Results label */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp size={15} className="text-blue-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {search
                    ? `${displayed.length} result${displayed.length !== 1 ? "s" : ""} for "${search}"`
                    : filter === "trending" ? "Trending stories"
                    : filter === "top" ? "Most discussed"
                    : "Latest stories"}
                </span>
                <span className="text-xs text-slate-400">· {displayed.length} total</span>
              </div>
              {user && (
                <Link to="/post" className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-600 transition-colors">
                  <PenSquare size={13} /> Write a story
                </Link>
              )}
            </div>

            {/* ── Featured post (hero card) ── */}
            {!search && featured && filter === "latest" && (
              <div className="mb-8">
                <FeaturedCard post={featured} />
              </div>
            )}

            {/* ── Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {(search || filter !== "latest" ? displayed : rest).map(post => (
                <DiaryCard key={post._id || post.id} post={post} />
              ))}
            </div>

            {/* ── Write CTA strip ── */}
            {user && displayed.length >= 4 && (
              <div className="mt-12 relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600" />
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
                />
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-7">
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Have a travel story to share?</p>
                    <p className="text-blue-100/80 text-sm">Join {posts.length}+ travelers who've already published their adventures.</p>
                  </div>
                  <Link to="/post" className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-200 text-sm">
                    <PenSquare size={15} /> Write Your Story
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
    FEATURED HERO CARD
══════════════════════════════════════════ */
function FeaturedCard({ post }) {
  const [liked, setLiked]         = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const authorName  = post.author?.name || post.user?.name || "Traveler";
  const authorInit  = authorName[0].toUpperCase();
  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;
  const wordCount = post.description?.trim().split(/\s+/).length || 0;
  const readTime  = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article className="group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-xl transition-all duration-400">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Image — 3/5 */}
        <div className="md:col-span-3 relative h-64 md:h-80 overflow-hidden">
          <img
            src={post.media[0]}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />

          {/* Featured badge */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            <Star size={11} fill="currentColor" />
            Featured Story
          </div>

          {/* Location on mobile */}
          {post.location && (
            <div className="absolute bottom-4 left-4 md:hidden flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
              <Globe size={10} />{post.location}
            </div>
          )}
        </div>

        {/* Content — 2/5 */}
        <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Author */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                {authorInit}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">{authorName}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  {date && <span>{date}</span>}
                  <span>·</span>
                  <span>{readTime} min read</span>
                </div>
              </div>
            </div>

            {/* Location (desktop) */}
            {post.location && (
              <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-blue-500 mb-3">
                <Globe size={12} />{post.location}
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3 line-clamp-3">
              {post.title}
            </h2>

            {/* Description */}
            {post.description && (
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 mb-5">
                {post.description}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
            <button
              onClick={() => { setLiked(!liked); setLikeCount(c => liked ? c - 1 : c + 1); }}
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                liked
                  ? "bg-rose-50 dark:bg-rose-900/20 text-rose-500"
                  : "text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-rose-400"
              }`}
            >
              <Heart size={15} fill={liked ? "currentColor" : "none"} />
              {likeCount > 0 ? likeCount : "Like"}
            </button>
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <MessageCircle size={15} />
              <span>{post.comments?.length || 0} comments</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import { MessageCircle } from "lucide-react";
