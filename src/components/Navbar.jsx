import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import {
  Menu, X, MapPin, Home, Rss, PenSquare,
  User, LogOut, Sun, Moon, Compass, LayoutDashboard
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  const close = () => setMobileOpen(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "text-blue-500 bg-blue-50 dark:bg-blue-900/30"
        : "text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? "text-blue-500 bg-blue-50 dark:bg-blue-900/30"
        : "text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800"
    }`;

  return (
    <header className="sticky top-0 z-50 navbar-blur bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={close}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-md group-hover:shadow-blue-300/40 transition-shadow duration-300">
              <Compass size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-white">
              Travel<span className="text-blue-500">Diary</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>
              <Home size={15} />
              Home
            </NavLink>
            <NavLink to="/places" className={navLinkClass}>
              <MapPin size={15} />
              Places
            </NavLink>
            <NavLink to="/feed" className={navLinkClass}>
              <Rss size={15} />
              Feed
            </NavLink>

            {user && (
              <>
                <NavLink to="/post" className={navLinkClass}>
                  <PenSquare size={15} />
                  Write
                </NavLink>
                <NavLink to="/profile" className={navLinkClass}>
                  <User size={15} />
                  Profile
                </NavLink>
                {user.role === "admin" && (
                  <NavLink to="/admin" className={navLinkClass}>
                    <LayoutDashboard size={15} />
                    Admin
                  </NavLink>
                )}
              </>
            )}
          </nav>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {isDark
                ? <Sun size={17} className="text-amber-400" />
                : <Moon size={17} />
              }
            </button>

            {user ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  {(user.name || user.email || "U")[0].toUpperCase()}
                </div>
                <button
                  onClick={logout}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-rose-500 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-200"
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
                <NavLink
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-sm hover:shadow-blue-300/40 transition-all duration-200"
                >
                  Get Started
                </NavLink>
              </div>
            )}
          </div>

          {/* ── Mobile Controls ── */}
          <div className="md:hidden flex items-center gap-1" ref={mobileRef}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {isDark
                ? <Sun size={17} className="text-amber-400" />
                : <Moon size={17} />
              }
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Dropdown */}
            {mobileOpen && (
              <div className="absolute top-16 right-4 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 animate-fadeIn">
                <div className="px-2 space-y-0.5">
                  <NavLink to="/" onClick={close} className={mobileNavLinkClass}>
                    <Home size={17} /> Home
                  </NavLink>
                  <NavLink to="/places" onClick={close} className={mobileNavLinkClass}>
                    <MapPin size={17} /> Places
                  </NavLink>
                  <NavLink to="/feed" onClick={close} className={mobileNavLinkClass}>
                    <Rss size={17} /> Feed
                  </NavLink>

                  {user ? (
                    <>
                      <NavLink to="/post" onClick={close} className={mobileNavLinkClass}>
                        <PenSquare size={17} /> Write
                      </NavLink>
                      <NavLink to="/profile" onClick={close} className={mobileNavLinkClass}>
                        <User size={17} /> Profile
                      </NavLink>
                      {user.role === "admin" && (
                        <NavLink to="/admin" onClick={close} className={mobileNavLinkClass}>
                          <LayoutDashboard size={17} /> Admin
                        </NavLink>
                      )}
                      <div className="border-t border-slate-100 dark:border-slate-800 my-1 pt-1">
                        <button
                          onClick={() => { logout(); close(); }}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-200"
                        >
                          <LogOut size={17} /> Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="border-t border-slate-100 dark:border-slate-800 my-1 pt-1 space-y-1 px-2">
                      <NavLink
                        to="/login"
                        onClick={close}
                        className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                      >
                        Sign in
                      </NavLink>
                      <NavLink
                        to="/register"
                        onClick={close}
                        className="block px-4 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 text-center transition-all duration-200"
                      >
                        Get Started
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
