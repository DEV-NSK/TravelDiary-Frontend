
// // // import { Link, NavLink } from "react-router-dom";
// // // import { useState } from "react";
// // // import { useAuth } from "../context/AuthContext";
// // // import { Menu, X } from "lucide-react"; // modern icons

// // // const linkBase =
// // //   "px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100";
// // // const active = ({ isActive }) =>
// // //   isActive ? `${linkBase} bg-gray-100 font-medium` : linkBase;

// // // export default function Navbar() {
// // //   const { user, logout } = useAuth();
// // //   const [open, setOpen] = useState(false);

// // //   return (
// // //     <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex justify-between items-center h-16">
// // //           {/* Logo */}
// // //           <Link to="/" className="flex items-center gap-2">
// // //             <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
// // //               T
// // //             </div>
// // //             <span className="font-semibold text-lg tracking-tight">
// // //               Travel Diary
// // //             </span>
// // //           </Link>

// // //           {/* Desktop nav */}
// // //           <nav className="hidden sm:flex sm:items-center sm:gap-2">
// // //             <ul className="flex gap-2 items-center">
// // //               <li>
// // //                 <NavLink to="/" className={active}>
// // //                   Home
// // //                 </NavLink>
// // //               </li>
// // //               <li>
// // //                 <NavLink to="/places" className={active}>
// // //                   Places
// // //                 </NavLink>
// // //               </li>
// // //               <li>
// // //                 <NavLink to="/feed" className={active}>
// // //                   Feed
// // //                 </NavLink>
// // //               </li>

// // //               {user && (
// // //                 <>
// // //                   <li>
// // //                     <NavLink to="/post" className={active}>
// // //                       Post
// // //                     </NavLink>
// // //                   </li>
// // //                   <li>
// // //                     <NavLink to="/profile" className={active}>
// // //                       Profile
// // //                     </NavLink>
// // //                   </li>
// // //                   {user.role === "admin" && (
// // //                     <li>
// // //                       <NavLink to="/admin" className={active}>
// // //                         Dashboard
// // //                       </NavLink>
// // //                     </li>
// // //                   )}
// // //                   <li>
// // //                     <button
// // //                       onClick={logout}
// // //                       className="ml-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition"
// // //                     >
// // //                       Logout
// // //                     </button>
// // //                   </li>
// // //                 </>
// // //               )}

// // //               {!user && (
// // //                 <>
// // //                   <li>
// // //                     <NavLink to="/login" className={active}>
// // //                       Login
// // //                     </NavLink>
// // //                   </li>
// // //                   <li>
// // //                     <NavLink
// // //                       to="/register"
// // //                       className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
// // //                     >
// // //                       Signup
// // //                     </NavLink>
// // //                   </li>
// // //                 </>
// // //               )}
// // //             </ul>
// // //           </nav>

// // //           {/* Mobile button */}
// // //           <button
// // //             className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition"
// // //             onClick={() => setOpen(!open)}
// // //             aria-label="Menu"
// // //           >
// // //             {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile nav (only on small screens) */}
// // //       {open && (
// // //         <div className="sm:hidden bg-white border-t shadow-md">
// // //           <ul className="flex flex-col p-3 space-y-2">
// // //             <li>
// // //               <NavLink to="/" className={active} onClick={() => setOpen(false)}>
// // //                 Home
// // //               </NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink
// // //                 to="/places"
// // //                 className={active}
// // //                 onClick={() => setOpen(false)}
// // //               >
// // //                 Places
// // //               </NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink
// // //                 to="/feed"
// // //                 className={active}
// // //                 onClick={() => setOpen(false)}
// // //               >
// // //                 Feed
// // //               </NavLink>
// // //             </li>

// // //             {user && (
// // //               <>
// // //                 <li>
// // //                   <NavLink
// // //                     to="/post"
// // //                     className={active}
// // //                     onClick={() => setOpen(false)}
// // //                   >
// // //                     Post
// // //                   </NavLink>
// // //                 </li>
// // //                 <li>
// // //                   <NavLink
// // //                     to="/profile"
// // //                     className={active}
// // //                     onClick={() => setOpen(false)}
// // //                   >
// // //                     Profile
// // //                   </NavLink>
// // //                 </li>
// // //                 {user.role === "admin" && (
// // //                   <li>
// // //                     <NavLink
// // //                       to="/admin"
// // //                       className={active}
// // //                       onClick={() => setOpen(false)}
// // //                     >
// // //                       Dashboard
// // //                     </NavLink>
// // //                   </li>
// // //                 )}
// // //                 <li>
// // //                   <button
// // //                     onClick={() => {
// // //                       logout();
// // //                       setOpen(false);
// // //                     }}
// // //                     className="w-full px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition"
// // //                   >
// // //                     Logout
// // //                   </button>
// // //                 </li>
// // //               </>
// // //             )}

// // //             {!user && (
// // //               <>
// // //                 <li>
// // //                   <NavLink
// // //                     to="/login"
// // //                     className={active}
// // //                     onClick={() => setOpen(false)}
// // //                   >
// // //                     Login
// // //                   </NavLink>
// // //                 </li>
// // //                 <li>
// // //                   <NavLink
// // //                     to="/register"
// // //                     className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
// // //                     onClick={() => setOpen(false)}
// // //                   >
// // //                     Signup
// // //                   </NavLink>
// // //                 </li>
// // //               </>
// // //             )}
// // //           </ul>
// // //         </div>
// // //       )}
// // //     </header>
// // //   );
// // // }




// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="navbar-logo">
//           <div className="logo-circle">T</div>
//           <span>Travel Diary</span>
//         </Link>

//         {/* Desktop menu */}
//         <nav className="navbar-links">
//           <ul>
//             <li>
//               <NavLink to="/" className="nav-link">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/places" className="nav-link">
//                 Places
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/feed" className="nav-link">
//                 Feed
//               </NavLink>
//             </li>

//             {user ? (
//               <>
//                 <li>
//                   <NavLink to="/post" className="nav-link">
//                     Post
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/profile" className="nav-link">
//                     Profile
//                   </NavLink>
//                 </li>
//                 {user.role === "admin" && (
//                   <li>
//                     <NavLink to="/admin" className="nav-link">
//                       Dashboard
//                     </NavLink>
//                   </li>
//                 )}
//                 <li>
//                   <button onClick={logout} className="btn-outline">
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <NavLink to="/login" className="nav-link">
//                     Login
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/register" className="btn-primary">
//                     Signup
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>

//         {/* Mobile menu button */}
//         <button
//           className="menu-toggle"
//           onClick={() => setOpen(!open)}
//           aria-label="Menu"
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile nav */}
//       {open && (
//         <div className="mobile-menu">
//           <ul>
//             <li>
//               <NavLink to="/" onClick={() => setOpen(false)} className="nav-link">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/places" onClick={() => setOpen(false)} className="nav-link">
//                 Places
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/feed" onClick={() => setOpen(false)} className="nav-link">
//                 Feed
//               </NavLink>
//             </li>

//             {user ? (
//               <>
//                 <li>
//                   <NavLink to="/post" onClick={() => setOpen(false)} className="nav-link">
//                     Post
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/profile" onClick={() => setOpen(false)} className="nav-link">
//                     Profile
//                   </NavLink>
//                 </li>
//                 {user.role === "admin" && (
//                   <li>
//                     <NavLink to="/admin" onClick={() => setOpen(false)} className="nav-link">
//                       Dashboard
//                     </NavLink>
//                   </li>
//                 )}
//                 <li>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setOpen(false);
//                     }}
//                     className="btn-outline"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <NavLink to="/login" onClick={() => setOpen(false)} className="nav-link">
//                     Login
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/register" onClick={() => setOpen(false)} className="btn-primary">
//                     Signup
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }















import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import "tailwindcss"

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-semibold text-xl text-gray-900">Travel Diary</span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/places" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  Places
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/feed" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  Feed
                </NavLink>
              </li>

              {user ? (
                <>
                  <li>
                    <NavLink 
                      to="/post" 
                      className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? "text-blue-600 bg-blue-50" 
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`
                      }
                    >
                      Post
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/profile" 
                      className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? "text-blue-600 bg-blue-50" 
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  {user.role === "admin" && (
                    <li>
                      <NavLink 
                        to="/admin" 
                        className={({ isActive }) => 
                          `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            isActive 
                              ? "text-blue-600 bg-blue-50" 
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          }`
                        }
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <button 
                      onClick={logout}
                      className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-md hover:bg-red-50 hover:border-red-300 transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink 
                      to="/login" 
                      className={({ isActive }) => 
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? "text-blue-600 bg-blue-50" 
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/register" 
                      className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              to="/" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/places" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`
              }
            >
              Places
            </NavLink>
            <NavLink 
              to="/feed" 
              onClick={() => setOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`
              }
            >
              Feed
            </NavLink>

            {user ? (
              <>
                <NavLink 
                  to="/post" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  Post
                </NavLink>
                <NavLink 
                  to="/profile" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  Profile
                </NavLink>
                {user.role === "admin" && (
                  <NavLink 
                    to="/admin" 
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => 
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>
                )}
                <button 
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink 
                  to="/login" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`
                  }
                >
                  Login
                </NavLink>
                <NavLink 
                  to="/register" 
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}