import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiUrl } from "../App";
import {
  MapPin, Send, ArrowLeft, Plus, X, CheckCircle,
  Image as ImageIcon, Type, AlignLeft,
  Loader2, Globe, Camera, Sparkles, BookOpen,
  Clock, Eye, Hash
} from "lucide-react";


const CATEGORIES = ["Adventure", "Beach", "City", "Culture", "Food", "Nature", "Road Trip", "Solo Travel", "Luxury", "Budget"];

export default function CreatePost() {
  const [title, setTitle]           = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation]     = useState("");
  const [files, setFiles]           = useState([]);
  const [category, setCategory]     = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [error, setError]           = useState("");
  const [dragOver, setDragOver]     = useState(false);
  const [activeStep, setActiveStep] = useState(1); // mobile stepper
  const fileInputRef = useRef(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  /* ── submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) { setError("Please add a title for your story."); return; }
    setError("");
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    if (category) formData.append("category", category);
    files.forEach(f => formData.append("media", f));

    try {
      const res = await fetch(`${apiUrl}/api/diary/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json") ? await res.json() : await res.text();
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => navigate("/feed"), 2000);
      } else {
        setError((typeof data === "object" ? data.msg : data) || "Failed to publish story.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── file handling ── */
  const addFiles = (incoming) => {
    const valid = Array.from(incoming).filter(f => f.type.startsWith("image/"));
    setFiles(prev => [...prev, ...valid]);
  };
  const handleFileChange = (e) => addFiles(e.target.files);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    addFiles(e.dataTransfer.files);
  };
  const removeFile = (i) => setFiles(prev => prev.filter((_, idx) => idx !== i));

  /* ── helpers ── */
  const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0;
  const readTime  = Math.max(1, Math.ceil(wordCount / 200));
  const progress  = Math.min(100, Math.round(
    ([title, location, description, files.length > 0 ? "x" : ""].filter(Boolean).length / 4) * 100
  ));

  /* ══ SUCCESS SCREEN ══ */
  if (success) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-5">
        <div className="text-center animate-fadeInUp max-w-sm">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30">
            <CheckCircle size={44} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Story Published! 🎉</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Your travel story is now live for the world to read.</p>
          <div className="flex gap-3 justify-center">
            <Link to="/feed" className="btn-primary text-sm px-5 py-2.5">View in Feed</Link>
            <Link to="/profile" className="btn-secondary text-sm px-5 py-2.5">My Profile</Link>
          </div>
        </div>
      </div>
    );
  }

  /* ══ MAIN LAYOUT ══ */
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">

      {/* ── Top bar ── */}
      <div className="sticky top-16 z-20 bg-[var(--bg-secondary)]/95 backdrop-blur-md border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
          {/* Left: back + title */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-[var(--bg-tertiary)] transition-all duration-200 flex-shrink-0"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 font-medium">New Story</p>
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate max-w-[200px]">
                {title || "Untitled"}
              </p>
            </div>
          </div>

          {/* Center: progress */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
            <div className="flex-1 h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-slate-400 font-medium flex-shrink-0">{progress}% complete</span>
          </div>

          {/* Right: meta + publish */}
          <div className="flex items-center gap-3">
            {description && (
              <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Clock size={12} />{readTime} min read</span>
                <span className="flex items-center gap-1"><Hash size={12} />{wordCount} words</span>
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !title.trim()}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? <><Loader2 size={14} className="animate-spin" />Publishing...</>
                : <><Send size={14} />Publish</>
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ════════════════════════════
              LEFT — Main editor (2/3)
          ════════════════════════════ */}
          <div className="lg:col-span-2 space-y-6">

            {/* Error banner */}
            {error && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700/50 text-rose-600 dark:text-rose-400 text-sm animate-fadeIn">
                <span className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                {error}
                <button onClick={() => setError("")} className="ml-auto text-rose-400 hover:text-rose-600"><X size={14} /></button>
              </div>
            )}

            {/* ── Cover photo area ── */}
            <div
              className={`relative rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-300 cursor-pointer group ${
                dragOver
                  ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : files.length > 0
                    ? "border-transparent"
                    : "border-[var(--border-color)] hover:border-blue-300 dark:hover:border-blue-600 bg-[var(--bg-card)]"
              }`}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => files.length === 0 && fileInputRef.current?.click()}
            >
              {files.length > 0 ? (
                /* Photo grid */
                <div>
                  {/* Cover image */}
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl">
                    <img
                      src={URL.createObjectURL(files[0])}
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
                      Cover Photo
                    </div>
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); removeFile(0); }}
                      className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  {/* Additional photos row */}
                  {files.length > 1 && (
                    <div className="p-3 flex gap-2 flex-wrap">
                      {files.slice(1).map((file, i) => (
                        <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden group/thumb flex-shrink-0">
                          <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity rounded-xl" />
                          <button
                            type="button"
                            onClick={e => { e.stopPropagation(); removeFile(i + 1); }}
                            className="absolute top-1 right-1 w-5 h-5 bg-rose-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity"
                          >
                            <X size={10} />
                          </button>
                        </div>
                      ))}
                      {/* Add more */}
                      <button
                        type="button"
                        onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}
                        className="w-20 h-20 rounded-xl border-2 border-dashed border-[var(--border-color)] flex items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-500 transition-all duration-200 flex-shrink-0"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  )}

                  {/* Add more button when only 1 photo */}
                  {files.length === 1 && (
                    <div className="p-3">
                      <button
                        type="button"
                        onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-color)] text-xs font-medium text-slate-500 dark:text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-all duration-200"
                      >
                        <Plus size={14} /> Add more photos
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Empty upload zone */
                <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Camera size={28} className="text-blue-400" />
                  </div>
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Add a cover photo
                  </p>
                  <p className="text-sm text-slate-400 mb-4">
                    Drag & drop or <span className="text-blue-500 font-medium">click to browse</span>
                  </p>
                  <p className="text-xs text-slate-300 dark:text-slate-600">PNG, JPG, WEBP · Max 10MB each</p>
                </div>
              )}
              <input ref={fileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>

            {/* ── Story editor card ── */}
            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-sm p-6 space-y-5">

              {/* Title */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  <Type size={13} className="text-blue-500" />
                  Story Title
                  <span className="text-rose-400 normal-case font-semibold">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Give your travel story a compelling title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-[var(--border-color)] bg-[var(--bg-input)] text-slate-900 dark:text-white text-base font-semibold placeholder-slate-300 dark:placeholder-slate-600 focus:border-blue-500 focus:ring-0 transition-colors duration-200 outline-none"
                />
              </div>

              {/* Location */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  <MapPin size={13} className="text-blue-500" />
                  Location
                </label>
                <div className="relative">
                  <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Where did you go? (e.g., Paris, France)"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-[var(--border-color)] bg-[var(--bg-input)] text-slate-800 dark:text-slate-200 text-sm placeholder-slate-300 dark:placeholder-slate-600 focus:border-blue-500 focus:ring-0 transition-colors duration-200 outline-none"
                  />
                  {location && (
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-emerald-500 font-semibold flex items-center gap-1">
                      <Globe size={11} /> Set
                    </span>
                  )}
                </div>
              </div>

              {/* Story */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  <AlignLeft size={13} className="text-blue-500" />
                  Your Story
                </label>
                <textarea
                  placeholder="Start writing your travel story here...&#10;&#10;Describe the sights, sounds, and feelings. Share what surprised you, what moved you, and what you'd tell a friend planning the same trip."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={14}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-[var(--border-color)] bg-[var(--bg-input)] text-slate-800 dark:text-slate-200 text-sm placeholder-slate-300 dark:placeholder-slate-600 focus:border-blue-500 focus:ring-0 transition-colors duration-200 outline-none resize-none leading-relaxed"
                />
                {/* Footer meta */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Hash size={11} />{wordCount} words</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{readTime} min read</span>
                    {description.length > 0 && (
                      <span className="flex items-center gap-1"><Eye size={11} />{description.length} chars</span>
                    )}
                  </div>
                  {description.length > 50 && (
                    <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1">
                      <Sparkles size={11} /> Looking good!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ── Mobile publish button ── */}
            <div className="lg:hidden">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !title.trim()}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 dark:shadow-blue-900/30 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting
                  ? <><Loader2 size={16} className="animate-spin" />Publishing your story...</>
                  : <><Send size={16} />Publish Story</>
                }
              </button>
            </div>
          </div>

          {/* ════════════════════════════
              RIGHT — Sidebar (1/3)
          ════════════════════════════ */}
          <div className="space-y-5">

            {/* ── Story details card ── */}
            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-[var(--border-color)]">
                <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <BookOpen size={15} className="text-blue-500" />
                  Story Details
                </h3>
              </div>
              <div className="p-5 space-y-4">

                {/* Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(category === cat ? "" : cat)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                          category === cat
                            ? "bg-blue-500 text-white shadow-sm"
                            : "bg-[var(--bg-tertiary)] text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-500 border border-[var(--border-color)]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Completion checklist */}
                <div>
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Checklist
                  </label>
                  <div className="space-y-2">
                    {[
                      { label: "Story title",   done: !!title.trim() },
                      { label: "Location",      done: !!location.trim() },
                      { label: "Story content", done: description.length > 50 },
                      { label: "Cover photo",   done: files.length > 0 },
                      { label: "Category",      done: !!category },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          item.done ? "bg-emerald-500" : "bg-[var(--bg-tertiary)] border border-[var(--border-color)]"
                        }`}>
                          {item.done && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <span className={`text-xs transition-colors duration-200 ${item.done ? "text-slate-700 dark:text-slate-300 font-medium" : "text-slate-400"}`}>
                          {item.label}
                        </span>
                        {!item.done && <span className="ml-auto text-xs text-slate-300 dark:text-slate-600">Optional</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-slate-400">Story completeness</span>
                    <span className={`text-xs font-bold ${progress === 100 ? "text-emerald-500" : "text-blue-500"}`}>{progress}%</span>
                  </div>
                  <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${progress === 100 ? "bg-gradient-to-r from-emerald-400 to-teal-500" : "bg-gradient-to-r from-blue-500 to-violet-500"}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
