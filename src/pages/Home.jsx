
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { apiUrl } from "../App";
import {
  MapPin, Camera, Users, Star, ArrowRight, Compass,
  BookOpen, TrendingUp, Shield, Zap, Globe, Rss,
  Play, ChevronLeft, ChevronRight, Heart, MessageCircle,
  PenSquare, Sparkles, Clock, Eye
} from "lucide-react";

/* ─── Hero slides ─── */
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=85",
    location: "Santorini, Greece",
    tagline: "Where sunsets paint the sky",
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
    location: "Kyoto, Japan",
    tagline: "Ancient temples, timeless beauty",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85",
    location: "Swiss Alps",
    tagline: "Peaks that touch the clouds",
  },
  {
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=85",
    location: "Maldives",
    tagline: "Paradise found in every wave",
  },
];

/* ─── Destinations ─── */
const destinations = [
  { name: "Santorini", country: "Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80", stories: 284, tag: "Most Loved", tagColor: "bg-rose-500" },
  { name: "Kyoto", country: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", stories: 196, tag: "Trending", tagColor: "bg-amber-500" },
  { name: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80", stories: 341, tag: "Top Pick", tagColor: "bg-blue-500" },
  { name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80", stories: 512, tag: "Classic", tagColor: "bg-violet-500" },
  { name: "Maldives", country: "Indian Ocean", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80", stories: 178, tag: "Luxury", tagColor: "bg-cyan-500" },
  { name: "Machu Picchu", country: "Peru", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80", stories: 143, tag: "Adventure", tagColor: "bg-emerald-500" },
];

/* ─── Features ─── */
const features = [
  { icon: <PenSquare size={20} />, color: "blue", title: "Write Rich Stories", desc: "A beautiful editor with photo uploads, location tagging, and rich text formatting." },
  { icon: <MapPin size={20} />, color: "violet", title: "Map Your Journey", desc: "Pin every destination and build a visual travel history across the globe." },
  { icon: <Users size={20} />, color: "emerald", title: "Join the Community", desc: "Connect with 12,000+ passionate travelers sharing real experiences." },
  { icon: <Shield size={20} />, color: "amber", title: "Private & Secure", desc: "Full control over what you share. Your memories, your rules." },
];

/* ─── Testimonials ─── */
const testimonials = [
  { text: "TravelDiary is the only app that actually captures the feeling of being somewhere. My stories look like a magazine.", author: "Sarah M.", role: "Travel Blogger · 3 years", avatar: "S", color: "from-pink-400 to-rose-500", trips: 47 },
  { text: "I've discovered hidden gems I never would have found otherwise. The community here is genuinely helpful and inspiring.", author: "Michael K.", role: "Adventure Traveler · 5 years", avatar: "M", color: "from-blue-400 to-indigo-500", trips: 83 },
  { text: "Finally a platform that takes travel seriously. The UI is stunning and publishing a story takes under 2 minutes.", author: "Priya R.", role: "Photographer · 2 years", avatar: "P", color: "from-violet-400 to-purple-500", trips: 29 },
];

/* ─── Stats ─── */
const stats = [
  { value: "50K+", label: "Stories Published", icon: <BookOpen size={18} />, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { value: "120+", label: "Countries Covered", icon: <Globe size={18} />, color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-900/20" },
  { value: "12K+", label: "Active Travelers", icon: <Users size={18} />, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  { value: "98%", label: "Satisfaction Rate", icon: <Star size={18} />, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-900/20" },
];

/* ══════════════════════════════════════════════════
   HERO SLIDESHOW COMPONENT
══════════════════════════════════════════════════ */
function HeroSlideshow({ user }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const go = (idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 700);
  };

  const next = () => go((current + 1) % heroSlides.length);
  const prev = () => go((current - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[92vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={s.image} alt={s.location} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-2xl">
            {/* Location pill */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                <MapPin size={11} className="text-blue-300" />
                {slide.location}
              </div>
              <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live stories
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              {user ? (
                <>
                  Hello,{" "}
                  <span className="text-blue-300">{user.name?.split(" ")[0] || "Explorer"}</span>
                  <br />
                  <span className="text-3xl md:text-5xl font-semibold opacity-90">{slide.tagline}</span>
                </>
              ) : (
                <>
                  {slide.tagline}
                </>
              )}
            </h1>

            {/* Sub text */}
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              {user
                ? "Your next chapter is waiting. Write it, share it, live it."
                : "Document your travels, share your stories, and inspire millions of explorers worldwide."}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 items-center">
              {user ? (
                <>
                  <Link to="/post" className="flex items-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 text-sm">
                    <PenSquare size={16} />
                    Write a Story
                  </Link>
                  <Link to="/feed" className="flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-medium rounded-xl transition-all duration-200 text-sm">
                    <Rss size={16} />
                    Explore Feed
                  </Link>
                  <Link to="/places" className="flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-medium rounded-xl transition-all duration-200 text-sm">
                    <Compass size={16} />
                    Discover Places
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/register" className="flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 text-sm">
                    Start for Free
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/feed" className="flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-medium rounded-xl transition-all duration-200 text-sm">
                    <Play size={14} className="fill-current" />
                    Browse Stories
                  </Link>
                </>
              )}
            </div>

            {/* Trust row (guest only) */}
            {!user && (
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  {["#3b82f6","#8b5cf6","#10b981","#f59e0b","#ef4444"].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                      {["A","B","C","D","E"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-xs">
                  <span className="text-white font-semibold">12,345+</span> travelers already sharing
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 right-5 md:right-10 flex items-center gap-3">
          <button onClick={prev} className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all duration-200">
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => go(i)} className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
            ))}
          </div>
          <button onClick={next} className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all duration-200">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute top-6 right-5 md:right-10 text-white/60 text-xs font-mono">
          {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   LIVE FEED PREVIEW (fetches real posts)
══════════════════════════════════════════════════ */
function LiveFeedPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/api/diary`)
      .then(r => r.ok ? r.json() : [])
      .then(d => {
        const arr = Array.isArray(d) ? d : (d.posts || []);
        setPosts(arr.slice(0, 4));
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)]">
          <div className="skeleton h-44 w-full" />
          <div className="p-4 space-y-2">
            <div className="skeleton h-3.5 w-3/4 rounded" />
            <div className="skeleton h-3 w-full rounded" />
          </div>
        </div>
      ))}
    </div>
  );

  if (posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {posts.map((post, i) => {
        const initial = (post.author?.name || post.user?.name || "T")[0].toUpperCase();
        const authorName = post.author?.name || post.user?.name || "Traveler";
        const date = post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
        return (
          <Link to="/feed" key={post._id || i} className="group rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block">
            <div className="relative h-44 overflow-hidden bg-[var(--bg-tertiary)]">
              {post.media?.[0] ? (
                <img src={post.media[0]} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20">
                  <Globe size={28} className="text-blue-200 dark:text-blue-700" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {post.location && (
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full">
                  <MapPin size={9} />{post.location}
                </div>
              )}
            </div>
            <div className="p-3.5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{initial}</div>
                <span className="text-xs text-slate-500 dark:text-slate-400 truncate">{authorName}</span>
                {date && <span className="text-xs text-slate-400 ml-auto flex-shrink-0">{date}</span>}
              </div>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white line-clamp-2 leading-snug">{post.title}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN HOME COMPONENT
══════════════════════════════════════════════════ */
export default function Home() {
  const { user } = useAuth();
  const [activeDestIdx, setActiveDestIdx] = useState(0);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">

      {/* ══ 1. HERO SLIDESHOW ══ */}
      <HeroSlideshow user={user} />

      {/* ══ 2. STATS TICKER (always visible) ══ */}
      <section className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color} flex-shrink-0`}>
                  {s.icon}
                </div>
                <div>
                  <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. LIVE FEED PREVIEW (logged in) ══ */}
      {user && (
        <section className="py-14 bg-[var(--bg-primary)]">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">Live</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Latest from the community</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Fresh stories from fellow travelers</p>
              </div>
              <Link to="/feed" className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
                View all <ArrowRight size={15} />
              </Link>
            </div>
            <LiveFeedPreview />
            <div className="text-center mt-6 sm:hidden">
              <Link to="/feed" className="btn-secondary text-sm px-5 py-2.5">View all stories <ArrowRight size={14} /></Link>
            </div>
          </div>
        </section>
      )}

      {/* ══ 4. QUICK ACTIONS (logged in) ══ */}
      {user && (
        <section className="py-10 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5">What would you like to do?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  to: "/post",
                  icon: <PenSquare size={22} />,
                  title: "Write a Story",
                  desc: "Share your latest travel experience",
                  gradient: "from-blue-500 to-blue-600",
                  shadow: "shadow-blue-200 dark:shadow-blue-900/30",
                },
                {
                  to: "/places",
                  icon: <Compass size={22} />,
                  title: "Explore Places",
                  desc: "Discover 39 stunning destinations",
                  gradient: "from-violet-500 to-violet-600",
                  shadow: "shadow-violet-200 dark:shadow-violet-900/30",
                },
                {
                  to: "/feed",
                  icon: <Rss size={22} />,
                  title: "Browse Feed",
                  desc: "Read stories from the community",
                  gradient: "from-emerald-500 to-emerald-600",
                  shadow: "shadow-emerald-200 dark:shadow-emerald-900/30",
                },
              ].map((action, i) => (
                <Link
                  key={i}
                  to={action.to}
                  className={`group flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-transparent hover:shadow-lg ${action.shadow} transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {action.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">{action.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{action.desc}</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ 5. FEATURED DESTINATIONS ══ */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">Destinations</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {user ? "Places to explore next" : "Top destinations worldwide"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-md">
                Handpicked locations loved by our community of travelers
              </p>
            </div>
            <Link to="/places" className="hidden md:flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
              All destinations <ArrowRight size={15} />
            </Link>
          </div>

          {/* Big featured card + grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Large card */}
            <div
              className="lg:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 h-80 lg:h-auto min-h-[320px]"
              onClick={() => setActiveDestIdx((activeDestIdx + 1) % destinations.length)}
            >
              <img
                src={destinations[activeDestIdx].image}
                alt={destinations[activeDestIdx].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

              {/* Tag */}
              <span className={`absolute top-4 left-4 ${destinations[activeDestIdx].tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {destinations[activeDestIdx].tag}
              </span>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-3xl font-bold text-white mb-1">{destinations[activeDestIdx].name}</h3>
                <p className="text-white/70 text-sm mb-3">{destinations[activeDestIdx].country}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs px-3 py-1.5 rounded-full">
                    <BookOpen size={11} />
                    {destinations[activeDestIdx].stories} stories
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Click hint */}
              <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to browse →
              </div>
            </div>

            {/* Small grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {destinations.filter((_, i) => i !== activeDestIdx).slice(0, 4).map((dest, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden cursor-pointer h-36 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <p className="text-white font-semibold text-xs leading-tight">{dest.name}</p>
                    <p className="text-white/60 text-xs">{dest.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/places" className="btn-secondary text-sm px-5 py-2.5">All destinations <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ══ 6. HOW IT WORKS (guest only) ══ */}
      {!user && (
        <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
          <div className="max-w-5xl mx-auto px-5">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">How it works</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Start in 3 simple steps
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                From signup to your first published story in under 5 minutes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-200 via-violet-200 to-emerald-200 dark:from-blue-800 dark:via-violet-800 dark:to-emerald-800" />
              {[
                { step: "01", icon: <Users size={20} />, color: "blue", title: "Create Account", desc: "Sign up free in 30 seconds. No credit card needed." },
                { step: "02", icon: <PenSquare size={20} />, color: "violet", title: "Write Your Story", desc: "Use our beautiful editor to document your journey with photos." },
                { step: "03", icon: <Globe size={20} />, color: "emerald", title: "Share & Inspire", desc: "Publish to the community and inspire fellow travelers worldwide." },
              ].map((step, i) => (
                <div key={i} className="relative text-center p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-blue-200 dark:hover:border-blue-700/50 transition-all duration-300 hover:shadow-md">
                  <div className={`w-14 h-14 rounded-2xl bg-${step.color}-50 dark:bg-${step.color}-900/20 flex items-center justify-center mx-auto mb-4 text-${step.color}-500`}>
                    {step.icon}
                  </div>
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-${step.color}-500 text-white text-xs font-bold flex items-center justify-center shadow-sm`}>
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ 7. FEATURES GRID (guest only) ══ */}
      {!user && (
        <section className="py-16 bg-[var(--bg-primary)]">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div>
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3">Features</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                  Everything a traveler needs in one place
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  Built by travelers, for travelers. Every feature is designed to make documenting your adventures effortless and beautiful.
                </p>
                <div className="space-y-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-blue-200 dark:hover:border-blue-700/50 transition-all duration-200 hover:shadow-sm">
                      <div className={`w-10 h-10 rounded-xl bg-${f.color}-50 dark:bg-${f.color}-900/20 flex items-center justify-center text-${f.color}-500 flex-shrink-0`}>
                        {f.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{f.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: visual mockup */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80"
                    alt="Travel"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Floating card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl p-4 border border-white/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">J</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">Just published: "Lost in Kyoto"</p>
                        <p className="text-xs text-slate-400">2 minutes ago · Kyoto, Japan</p>
                      </div>
                      <div className="flex items-center gap-1 text-rose-400 text-xs">
                        <Heart size={12} fill="currentColor" />
                        <span>24</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating stat badge */}
                <div className="absolute -top-4 -right-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-400" />
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-white">50K+ Stories</p>
                      <p className="text-xs text-slate-400">Published today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══ 8. TESTIMONIALS (guest only) ══ */}
      {!user && (
        <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">Testimonials</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Trusted by passionate travelers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  {/* Stars */}
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">{t.author}</p>
                      <p className="text-xs text-slate-400 truncate">{t.role}</p>
                    </div>
                    <div className="ml-auto text-right flex-shrink-0">
                      <p className="text-sm font-bold text-blue-500">{t.trips}</p>
                      <p className="text-xs text-slate-400">trips</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ 9. CTA BANNER ══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
            alt="Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-violet-900/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                <Sparkles size={12} className="text-amber-300" />
                {user ? "Keep exploring" : "Free forever"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {user ? "Your story is waiting to be written" : "Start your travel diary today"}
              </h2>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-8">
                {user
                  ? "Every journey deserves to be remembered. Open your editor and capture the moment."
                  : "Join thousands of travelers who document their adventures and inspire others. No credit card required."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={user ? "/post" : "/register"}
                  className="flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-200 text-sm"
                >
                  {user ? <PenSquare size={16} /> : <ArrowRight size={16} />}
                  {user ? "Write a Story" : "Get Started Free"}
                </Link>
                {!user && (
                  <Link to="/feed" className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-xl transition-all duration-200 text-sm">
                    <Eye size={16} />
                    See Examples
                  </Link>
                )}
              </div>
            </div>
            {/* Right: mini stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <BookOpen size={18} />, value: "50K+", label: "Stories", color: "blue" },
                { icon: <Globe size={18} />, value: "120+", label: "Countries", color: "violet" },
                { icon: <Users size={18} />, value: "12K+", label: "Travelers", color: "emerald" },
                { icon: <Heart size={18} />, value: "200K+", label: "Likes Given", color: "rose" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center">
                  <div className="text-white/60 flex justify-center mb-2">{s.icon}</div>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. FOOTER ══ */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-md">
                  <Compass size={18} className="text-white" />
                </div>
                <span className="font-bold text-lg text-white">Travel<span className="text-blue-400">Diary</span></span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                The world's most beautiful platform for documenting and sharing travel experiences.
              </p>
            </div>
            {/* Links */}
            <div>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Explore</p>
              <div className="space-y-2.5">
                {[["Feed", "/feed"], ["Places", "/places"], ["Write", "/post"]].map(([label, to]) => (
                  <Link key={label} to={to} className="block text-sm text-slate-500 hover:text-white transition-colors">{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Company</p>
              <div className="space-y-2.5">
                {["About", "Privacy", "Terms", "Contact"].map(l => (
                  <a key={l} href="#" className="block text-sm text-slate-500 hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-600">© {new Date().getFullYear()} TravelDiary. All rights reserved.</p>
            <p className="text-xs text-slate-600">Made with ❤️ for travelers everywhere</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
