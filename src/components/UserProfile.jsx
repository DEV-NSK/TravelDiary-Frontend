import { useState, useEffect, useRef } from "react";
import { apiUrl } from "../App";
import { Link } from "react-router-dom";
import {
  Camera, Edit3, Save, X, MapPin, Calendar,
  Heart, MessageCircle, Mail, Globe, PenSquare,
  Trash2, MoreHorizontal, CheckCircle, AlertCircle,
  Image as ImageIcon, User, Link2, Loader2
} from "lucide-react";

/* ─── tiny toast ─── */
function Toast({ msg, type, onClose }) {
  return (
    <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-sm font-medium animate-slideInRight
      ${type === "success"
        ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/50"
        : "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-700/50"
      }`}>
      {type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
      {msg}
      <button onClick={onClose} className="ml-1 opacity-60 hover:opacity-100"><X size={14} /></button>
    </div>
  );
}

/* ─── skeleton card ─── */
function PostSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)]">
      <div className="skeleton h-48 w-full" />
      <div className="p-4 space-y-2">
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
      </div>
    </div>
  );
}

export default function UserProfile() {
  const [user, setUser]           = useState(null);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving]       = useState(false);
  const [editForm, setEditForm]   = useState({ name: "", bio: "", location: "", website: "" });
  const [userPosts, setUserPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("posts");
  const [toast, setToast]         = useState(null);
  const [avatarUploading, setAvatarUploading] = useState(false);
  const fileRef = useRef(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  /* ── fetch profile + posts ── */
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Not authenticated");

        const res = await fetch(`${apiUrl}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to load profile");

        const data  = await res.json();
        const u     = data.user || data;
        setUser(u);
        setEditForm({
          name:     u.name     || "",
          bio:      u.bio      || "",
          location: u.location || "",
          website:  u.website  || "",
        });

        /* fetch posts */
        const tryEndpoints = [
          `${apiUrl}/api/diary/user/${u._id || u.id}`,
          `${apiUrl}/api/diary/my`,
          `${apiUrl}/api/posts/user/${u._id || u.id}`,
        ];
        for (const ep of tryEndpoints) {
          try {
            const pr = await fetch(ep, { headers: { Authorization: `Bearer ${token}` } });
            if (!pr.ok) continue;
            const pd = await pr.json();
            const arr = Array.isArray(pd) ? pd : pd.posts || pd.data || pd.diaries || [];
            setUserPosts(arr);
            break;
          } catch { continue; }
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
        setPostsLoading(false);
      }
    })();
  }, []);

  /* ── save profile ── */
  const handleSave = async () => {
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/users/profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(editForm),
      });
      if (res.ok) {
        setUser(prev => ({ ...prev, ...editForm }));
        setIsEditing(false);
        showToast("Profile updated successfully!");
      } else {
        const d = await res.json();
        showToast(d.message || "Update failed", "error");
      }
    } catch {
      showToast("Network error. Please try again.", "error");
    } finally {
      setSaving(false);
    }
  };

  /* ── avatar upload ── */
  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatarUploading(true);
    try {
      const fd = new FormData();
      fd.append("profileImage", file);
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/users/profile/image`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      if (res.ok) {
        const d = await res.json();
        setUser(prev => ({ ...prev, profilePic: d.profilePic }));
        showToast("Avatar updated!");
      } else {
        showToast("Failed to upload image", "error");
      }
    } catch {
      showToast("Upload failed", "error");
    } finally {
      setAvatarUploading(false);
    }
  };

  /* ── cancel edit ── */
  const cancelEdit = () => {
    setEditForm({ name: user.name || "", bio: user.bio || "", location: user.location || "", website: user.website || "" });
    setIsEditing(false);
  };

  /* ── helpers ── */
  const initial = (user?.name || user?.email || "T")[0].toUpperCase();
  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : null;

  /* ── loading ── */
  if (loading) return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
      <div className="text-center">
        <Loader2 size={36} className="text-blue-500 animate-spin mx-auto mb-3" />
        <p className="text-sm text-slate-400">Loading your profile...</p>
      </div>
    </div>
  );

  /* ── error ── */
  if (error) return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-5">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center mx-auto mb-4">
          <AlertCircle size={28} className="text-rose-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Failed to load profile</h3>
        <p className="text-sm text-slate-500 mb-5">{error}</p>
        <button onClick={() => window.location.reload()} className="btn-primary text-sm">
          Try again
        </button>
      </div>
    </div>
  );

  /* ══════════════════════════════════════════════════════
      MAIN RENDER
  ══════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}

      {/* ── Cover + Avatar ── */}
      <div className="relative">
        {/* Cover photo */}
        <div className="h-52 md:h-64 w-full overflow-hidden bg-gradient-to-br from-blue-500 via-violet-500 to-indigo-600 relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Avatar */}
        <div className="absolute left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 -bottom-14 md:-bottom-16">
          <div className="relative group">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl border-4 border-[var(--bg-primary)] shadow-xl overflow-hidden bg-gradient-to-br from-blue-400 to-violet-500">
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  {initial}
                </div>
              )}
              {/* Upload overlay */}
              <div
                onClick={() => fileRef.current?.click()}
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              >
                {avatarUploading
                  ? <Loader2 size={22} className="text-white animate-spin" />
                  : <Camera size={22} className="text-white" />
                }
              </div>
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </div>
        </div>
      </div>

      {/* ── Profile Info Bar ── */}
      <div className="max-w-5xl mx-auto px-5">
        {/* Spacer for avatar */}
        <div className="h-16 md:h-20" />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* Left: name + meta */}
          <div className="text-center md:text-left">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))}
                className="text-2xl font-bold border-b-2 border-blue-500 bg-transparent focus:outline-none text-slate-900 dark:text-white w-full md:w-auto mb-1"
                placeholder="Your name"
              />
            ) : (
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name || "Traveler"}</h1>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 mt-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Mail size={13} />
                {user.email}
              </span>
              {(user.location || isEditing) && (
                isEditing ? (
                  <label className="flex items-center gap-1">
                    <MapPin size={13} className="text-blue-400" />
                    <input
                      type="text"
                      name="location"
                      value={editForm.location}
                      onChange={e => setEditForm(p => ({ ...p, location: e.target.value }))}
                      placeholder="City, Country"
                      className="bg-transparent border-b border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 text-sm w-36"
                    />
                  </label>
                ) : (
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {user.location}
                  </span>
                )
              )}
              {joinDate && (
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  Joined {joinDate}
                </span>
              )}
              {(user.website || isEditing) && (
                isEditing ? (
                  <label className="flex items-center gap-1">
                    <Link2 size={13} className="text-blue-400" />
                    <input
                      type="text"
                      name="website"
                      value={editForm.website}
                      onChange={e => setEditForm(p => ({ ...p, website: e.target.value }))}
                      placeholder="yourwebsite.com"
                      className="bg-transparent border-b border-slate-300 dark:border-slate-600 focus:outline-none focus:border-blue-500 text-sm w-40"
                    />
                  </label>
                ) : (
                  <a href={user.website} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-500 hover:underline">
                    <Link2 size={13} />
                    {user.website.replace(/^https?:\/\//, "")}
                  </a>
                )
              )}
            </div>

            {/* Bio */}
            <div className="mt-3 max-w-lg">
              {isEditing ? (
                <textarea
                  name="bio"
                  value={editForm.bio}
                  onChange={e => setEditForm(p => ({ ...p, bio: e.target.value }))}
                  placeholder="Write a short bio about yourself..."
                  rows={3}
                  className="w-full text-sm border rounded-xl px-3 py-2 resize-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              ) : (
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {user.bio || (
                    <span className="text-slate-400 italic">No bio yet. Click Edit Profile to add one.</span>
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Right: action buttons */}
          <div className="flex items-center justify-center md:justify-end gap-2 flex-shrink-0">
            {isEditing ? (
              <>
                <button
                  onClick={cancelEdit}
                  className="btn-secondary text-sm px-4 py-2"
                >
                  <X size={15} /> Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="btn-primary text-sm px-4 py-2 disabled:opacity-60"
                >
                  {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="btn-secondary text-sm px-4 py-2"
              >
                <Edit3 size={15} /> Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="flex items-center justify-center md:justify-start gap-8 mt-6 py-5 border-y border-[var(--border-color)]">
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900 dark:text-white">{userPosts.length}</p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Stories</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {userPosts.reduce((acc, p) => acc + (p.likes || 0), 0)}
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Total Likes</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {[...new Set(userPosts.map(p => p.location).filter(Boolean))].length}
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Destinations</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {userPosts.reduce((acc, p) => acc + (p.comments?.length || 0), 0)}
            </p>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Comments</p>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-1 mt-6 border-b border-[var(--border-color)]">
          {[
            { id: "posts", label: "My Stories", icon: <Globe size={15} /> },
            { id: "about", label: "About", icon: <User size={15} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-all duration-200 -mb-px ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              {tab.icon}
              {tab.label}
              {tab.id === "posts" && userPosts.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                  {userPosts.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div className="py-8">

          {/* POSTS TAB */}
          {activeTab === "posts" && (
            <>
              {postsLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[...Array(6)].map((_, i) => <PostSkeleton key={i} />)}
                </div>
              ) : userPosts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center mx-auto mb-5">
                    <PenSquare size={32} className="text-slate-300 dark:text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">No stories yet</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-6">
                    Share your first travel experience and start building your diary.
                  </p>
                  <Link to="/post" className="btn-primary text-sm">
                    <PenSquare size={15} />
                    Write your first story
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {userPosts.length} {userPosts.length === 1 ? "story" : "stories"} published
                    </p>
                    <Link to="/post" className="btn-primary text-xs px-3 py-2">
                      <PenSquare size={13} />
                      New Story
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {userPosts.map((post) => (
                      <ProfilePostCard key={post._id || post.id} post={post} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* ABOUT TAB */}
          {activeTab === "about" && (
            <div className="max-w-xl">
              <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] divide-y divide-[var(--border-color)] overflow-hidden">
                {[
                  { icon: <User size={16} />, label: "Full Name", value: user.name },
                  { icon: <Mail size={16} />, label: "Email", value: user.email },
                  { icon: <MapPin size={16} />, label: "Location", value: user.location || "Not set" },
                  { icon: <Link2 size={16} />, label: "Website", value: user.website || "Not set", isLink: !!user.website },
                  { icon: <Calendar size={16} />, label: "Member Since", value: joinDate || "Unknown" },
                  { icon: <Globe size={16} />, label: "Stories Published", value: userPosts.length },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                      {row.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-medium">{row.label}</p>
                      {row.isLink ? (
                        <a href={row.value} target="_blank" rel="noreferrer" className="text-sm text-blue-500 hover:underline truncate block">
                          {row.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium truncate">{row.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bio section */}
              {user.bio && (
                <div className="mt-5 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] p-5">
                  <p className="text-xs text-slate-400 font-medium mb-2">Bio</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{user.bio}</p>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ─── Individual post card on profile ─── */
function ProfilePostCard({ post }) {
  const [liked, setLiked]       = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : null;

  return (
    <article className="group rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[var(--bg-tertiary)]">
        {post.media?.[0] ? (
          <img
            src={post.media[0]}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20">
            <ImageIcon size={32} className="text-blue-200 dark:text-blue-700" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Location badge */}
        {post.location && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
            <MapPin size={10} />
            <span className="truncate max-w-[110px]">{post.location}</span>
          </div>
        )}

        {/* Menu */}
        <div className="absolute top-3 right-3">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/60"
            >
              <MoreHorizontal size={14} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-8 w-36 bg-[var(--bg-card)] rounded-xl shadow-lg border border-[var(--border-color)] py-1 z-10 animate-fadeIn">
                <button className="w-full text-left px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300 hover:bg-[var(--bg-tertiary)] flex items-center gap-2">
                  <Edit3 size={13} /> Edit story
                </button>
                <button className="w-full text-left px-4 py-2.5 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 flex items-center gap-2">
                  <Trash2 size={13} /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1.5 line-clamp-2 leading-snug">
          {post.title || "Untitled Story"}
        </h3>
        {post.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
            {post.description}
          </p>
        )}
        {date && (
          <p className="text-xs text-slate-400 flex items-center gap-1 mb-3">
            <Calendar size={11} /> {date}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
          <button
            onClick={() => { setLiked(!liked); setLikeCount(c => liked ? c - 1 : c + 1); }}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
              liked
                ? "bg-rose-50 dark:bg-rose-900/20 text-rose-500"
                : "text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-rose-400"
            }`}
          >
            <Heart size={13} fill={liked ? "currentColor" : "none"} />
            {likeCount > 0 ? likeCount : "Like"}
          </button>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <MessageCircle size={13} />
            <span>{post.comments?.length || 0}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
