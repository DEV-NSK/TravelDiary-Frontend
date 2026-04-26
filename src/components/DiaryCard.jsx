import { useState } from "react";
import { MapPin, Heart, MessageCircle, Calendar, Clock, Globe } from "lucide-react";

export default function DiaryCard({ post }) {
  const [liked, setLiked]         = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const authorName  = post.author?.name || post.user?.name || "Traveler";
  const authorInit  = authorName[0].toUpperCase();
  /* gradient per initial letter for variety */
  const gradients   = [
    "from-blue-400 to-violet-500",
    "from-rose-400 to-pink-500",
    "from-emerald-400 to-teal-500",
    "from-amber-400 to-orange-500",
    "from-cyan-400 to-blue-500",
    "from-violet-400 to-purple-500",
  ];
  const gradient = gradients[authorInit.charCodeAt(0) % gradients.length];

  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : null;

  const wordCount = post.description?.trim().split(/\s+/).length || 0;
  const readTime  = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">

      {/* ── Image ── */}
      <div className="relative overflow-hidden bg-[var(--bg-tertiary)] flex-shrink-0" style={{ height: "200px" }}>
        {post.media?.[0] ? (
          <img
            src={post.media[0]}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          /* No-image placeholder with gradient */
          <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${gradient} opacity-20 dark:opacity-10`}>
            <Globe size={36} className="text-white" />
          </div>
        )}

        {/* Gradient overlay — always subtle, stronger on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Location pill */}
        {post.location && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
            <MapPin size={9} />
            <span className="truncate max-w-[110px]">{post.location}</span>
          </div>
        )}

        {/* Read time pill */}
        {wordCount > 10 && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Clock size={9} />
            {readTime}m
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-4">

        {/* Author row */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm`}>
            {authorInit}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate leading-tight">{authorName}</p>
            {date && (
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <Calendar size={9} />{date}
              </p>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
          {post.title || "Untitled Story"}
        </h3>

        {/* Description */}
        {post.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
            {post.description}
          </p>
        )}

        {/* ── Footer ── */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--border-color)]">
          <button
            onClick={e => {
              e.stopPropagation();
              setLiked(!liked);
              setLikeCount(c => liked ? c - 1 : c + 1);
            }}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
              liked
                ? "bg-rose-50 dark:bg-rose-900/20 text-rose-500 scale-105"
                : "text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-400"
            }`}
          >
            <Heart size={12} fill={liked ? "currentColor" : "none"} className="transition-transform duration-200" />
            {likeCount > 0 ? likeCount : "Like"}
          </button>

          <div className="flex items-center gap-1 text-xs text-slate-400">
            <MessageCircle size={12} />
            <span>{post.comments?.length || 0}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
