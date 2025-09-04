// // import { Link, NavLink } from "react-router-dom";
// // import { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { Menu, X } from "lucide-react";
// // import "tailwindcss"

// // export default function Navbar() {
// //   const { user, logout } = useAuth();
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <header className="bg-white shadow-sm border-b border-gray-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <Link 
// //             to="/" 
// //             className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
// //           >
// //             <div className="w-10 h-10 rounded-full flex items-center justify-center">
// //               <img src="/logo.png" alt="" />
// //             </div>
// //             <span className="font-semibold text-xl text-gray-900">Travel Diary</span>
// //           </Link>

// //           {/* Desktop menu */}
// //           <nav className="hidden md:block">
// //             <ul className="flex items-center space-x-8">
// //               <li>
// //                 <NavLink 
// //                   to="/" 
// //                   className={({ isActive }) => 
// //                     `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                       isActive 
// //                         ? "text-blue-600 bg-blue-50" 
// //                         : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                     }`
// //                   }
// //                 >
// //                   Home
// //                 </NavLink>
// //               </li>
// //               <li>
// //                 <NavLink 
// //                   to="/places" 
// //                   className={({ isActive }) => 
// //                     `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                       isActive 
// //                         ? "text-blue-600 bg-blue-50" 
// //                         : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                     }`
// //                   }
// //                 >
// //                   Places
// //                 </NavLink>
// //               </li>
// //               <li>
// //                 <NavLink 
// //                   to="/feed" 
// //                   className={({ isActive }) => 
// //                     `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                       isActive 
// //                         ? "text-blue-600 bg-blue-50" 
// //                         : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                     }`
// //                   }
// //                 >
// //                   Feed
// //                 </NavLink>
// //               </li>

// //               {user ? (
// //                 <>
// //                   <li>
// //                     <NavLink 
// //                       to="/post" 
// //                       className={({ isActive }) => 
// //                         `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                           isActive 
// //                             ? "text-blue-600 bg-blue-50" 
// //                             : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                         }`
// //                       }
// //                     >
// //                       Post
// //                     </NavLink>
// //                   </li>
// //                   <li>
// //                     <NavLink 
// //                       to="/profile" 
// //                       className={({ isActive }) => 
// //                         `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                           isActive 
// //                             ? "text-blue-600 bg-blue-50" 
// //                             : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                         }`
// //                       }
// //                     >
// //                       Profile
// //                     </NavLink>
// //                   </li>
// //                   {user.role === "admin" && (
// //                     <li>
// //                       <NavLink 
// //                         to="/admin" 
// //                         className={({ isActive }) => 
// //                           `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                             isActive 
// //                               ? "text-blue-600 bg-blue-50" 
// //                               : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                           }`
// //                         }
// //                       >
// //                         Dashboard
// //                       </NavLink>
// //                     </li>
// //                   )}
// //                   <li>
// //                     <button 
// //                       onClick={logout}
// //                       className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-md hover:bg-red-50 hover:border-red-300 transition-colors"
// //                     >
// //                       Logout
// //                     </button>
// //                   </li>
// //                 </>
// //               ) : (
// //                 <>
// //                   <li>
// //                     <NavLink 
// //                       to="/login" 
// //                       className={({ isActive }) => 
// //                         `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                           isActive 
// //                             ? "text-blue-600 bg-blue-50" 
// //                             : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                         }`
// //                       }
// //                     >
// //                       Login
// //                     </NavLink>
// //                   </li>
// //                   <li>
// //                     <NavLink 
// //                       to="/register" 
// //                       className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
// //                     >
// //                       Sign Up
// //                     </NavLink>
// //                   </li>
// //                 </>
// //               )}
// //             </ul>
// //           </nav>

// //           {/* Mobile menu button */}
// //           <button
// //             className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
// //             onClick={() => setOpen(!open)}
// //             aria-label="Menu"
// //           >
// //             {open ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile nav */}
// //       {open && (
// //         <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
// //           <div className="px-2 pt-2 pb-3 space-y-1">
// //             <NavLink 
// //               to="/" 
// //               onClick={() => setOpen(false)}
// //               className={({ isActive }) => 
// //                 `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                   isActive 
// //                     ? "text-blue-600 bg-blue-50" 
// //                     : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                 }`
// //               }
// //             >
// //               Home
// //             </NavLink>
// //             <NavLink 
// //               to="/places" 
// //               onClick={() => setOpen(false)}
// //               className={({ isActive }) => 
// //                 `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                   isActive 
// //                     ? "text-blue-600 bg-blue-50" 
// //                     : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                 }`
// //               }
// //             >
// //               Places
// //             </NavLink>
// //             <NavLink 
// //               to="/feed" 
// //               onClick={() => setOpen(false)}
// //               className={({ isActive }) => 
// //                 `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                   isActive 
// //                     ? "text-blue-600 bg-blue-50" 
// //                     : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                 }`
// //               }
// //             >
// //               Feed
// //             </NavLink>

// //             {user ? (
// //               <>
// //                 <NavLink 
// //                   to="/post" 
// //                   onClick={() => setOpen(false)}
// //                   className={({ isActive }) => 
// //                     `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                       isActive 
// //                         ? "text-blue-600 bg-blue-50" 
// //                         : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                     }`
// //                   }
// //                 >
// //                   Post
// //                 </NavLink>
// //                 <NavLink 
// //                   to="/profile" 
// //                   onClick={() => setOpen(false)}
// //                   className={({ isActive }) => 
// //                     `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                       isActive 
// //                         ? "text-blue-600 bg-blue-50" 
// //                         : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                     }`
// //                   }
// //                 >
// //                   Profile
// //                 </NavLink>
// //                 {user.role === "admin" && (
// //                   <NavLink 
// //                     to="/admin" 
// //                     onClick={() => setOpen(false)}
// //                     className={({ isActive }) => 
// //                       `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                         isActive 
// //                           ? "text-blue-600 bg-blue-50" 
// //                           : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                       }`
// //                     }
// //                   >
// //                     Dashboard
// //                   </NavLink>
// //                 )}
// //                 <button 
// //                   onClick={() => {
// //                     logout();
// //                     setOpen(false);
// //                   }}
// //                   className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
// //                 >
// //                   Logout
// //                 </button>
// //               </>
// //             ) : (
// //               <>
// //                 <NavLink 
// //                   to="/login" 
// //                   onClick={() => setOpen(false)}
// //                   className={({ isActive }) => 
// //                     `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                       isActive 
// //                         ? "text-blue-600 bg-blue-50" 
// //                         : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
// //                     }`
// //                   }
// //                 >
// //                   Login
// //                 </NavLink>
// //                 <NavLink 
// //                   to="/register" 
// //                   onClick={() => setOpen(false)}
// //                   className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
// //                 >
// //                   Sign Up
// //                 </NavLink>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }







// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Menu, X, MapPin, Home, Rss, FileText, User, LogOut } from "lucide-react";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center space-x-3 text-gray-800 hover:text-blue-500 transition-colors duration-200"
//           >
//             <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-sm">
//               <MapPin size={20} className="text-white" />
//             </div>
//             <span className="font-semibold text-xl text-gray-800">Travel Diary</span>
//           </Link>

//           {/* Desktop menu */}
//           <nav className="hidden md:block">
//             <ul className="flex items-center space-x-1">
//               <li>
//                 <NavLink 
//                   to="/" 
//                   className={({ isActive }) => 
//                     `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
//                       isActive 
//                         ? "text-blue-600 bg-blue-50 shadow-sm" 
//                         : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                     }`
//                   }
//                 >
//                   <Home size={16} />
//                   <span>Home</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/places" 
//                   className={({ isActive }) => 
//                     `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
//                       isActive 
//                         ? "text-blue-600 bg-blue-50 shadow-sm" 
//                         : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                     }`
//                   }
//                 >
//                   <MapPin size={16} />
//                   <span>Places</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/feed" 
//                   className={({ isActive }) => 
//                     `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
//                       isActive 
//                         ? "text-blue-600 bg-blue-50 shadow-sm" 
//                         : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                     }`
//                   }
//                 >
//                   <Rss size={16} />
//                   <span>Feed</span>
//                 </NavLink>
//               </li>

//               {user ? (
//                 <>
//                   <li>
//                     <NavLink 
//                       to="/post" 
//                       className={({ isActive }) => 
//                         `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
//                           isActive 
//                             ? "text-blue-600 bg-blue-50 shadow-sm" 
//                             : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                         }`
//                       }
//                     >
//                       <FileText size={16} />
//                       <span>Post</span>
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink 
//                       to="/profile" 
//                       className={({ isActive }) => 
//                         `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
//                           isActive 
//                             ? "text-blue-600 bg-blue-50 shadow-sm" 
//                             : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                         }`
//                       }
//                     >
//                       <User size={16} />
//                       <span>Profile</span>
//                     </NavLink>
//                   </li>
//                   {user.role === "admin" && (
//                     <li>
//                       <NavLink 
//                         to="/admin" 
//                         className={({ isActive }) => 
//                           `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
//                             isActive 
//                               ? "text-blue-600 bg-blue-50 shadow-sm" 
//                               : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                           }`
//                         }
//                       >
//                         <span>Dashboard</span>
//                       </NavLink>
//                     </li>
//                   )}
//                   <li className="ml-2 border-l border-gray-200 pl-2">
//                     <button 
//                       onClick={logout}
//                       className="px-4 py-2 text-sm font-medium text-rose-600 flex items-center space-x-1 rounded-lg border border-rose-100 bg-white hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm"
//                     >
//                       <LogOut size={16} />
//                       <span>Logout</span>
//                     </button>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <NavLink 
//                       to="/login" 
//                       className={({ isActive }) => 
//                         `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                           isActive 
//                             ? "text-blue-600 bg-blue-50 shadow-sm" 
//                             : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                         }`
//                       }
//                     >
//                       Login
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink 
//                       to="/register" 
//                       className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
//                     >
//                       Sign Up
//                     </NavLink>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200"
//             onClick={() => setOpen(!open)}
//             aria-label="Menu"
//           >
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile nav */}
//       {open && (
//         <div className="md:hidden bg-white flex justify-end border-t border-gray-100 shadow-lg animate-fadeIn">
//           <div className="px-2 pt-2 pb-4 space-y-1">
//             <NavLink 
//               to="/" 
//               onClick={() => setOpen(false)}
//               className={({ isActive }) => 
//                 `flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                   isActive 
//                     ? "text-blue-600 bg-blue-50 shadow-sm" 
//                     : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                 }`
//               }
//             >
//               <Home size={18} />
//               <span>Home</span>
//             </NavLink>
//             <NavLink 
//               to="/places" 
//               onClick={() => setOpen(false)}
//               className={({ isActive }) => 
//                 `flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                   isActive 
//                     ? "text-blue-600 bg-blue-50 shadow-sm" 
//                     : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                 }`
//               }
//             >
//               <MapPin size={18} />
//               <span>Places</span>
//             </NavLink>
//             <NavLink 
//               to="/feed" 
//               onClick={() => setOpen(false)}
//               className={({ isActive }) => 
//                 `flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                   isActive 
//                     ? "text-blue-600 bg-blue-50 shadow-sm" 
//                     : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                 }`
//               }
//             >
//               <Rss size={18} />
//               <span>Feed</span>
//             </NavLink>

//             {user ? (
//               <>
//                 <NavLink 
//                   to="/post" 
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) => 
//                     `flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                       isActive 
//                         ? "text-blue-600 bg-blue-50 shadow-sm" 
//                         : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                     }`
//                   }
//                 >
//                   <FileText size={18} />
//                   <span>Post</span>
//                 </NavLink>
//                 <NavLink 
//                   to="/profile" 
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) => 
//                     `flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                       isActive 
//                         ? "text-blue-600 bg-blue-50 shadow-sm" 
//                         : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                     }`
//                   }
//                 >
//                   <User size={18} />
//                   <span>Profile</span>
//                 </NavLink>
//                 {user.role === "admin" && (
//                   <NavLink 
//                     to="/admin" 
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) => 
//                       `flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                         isActive 
//                           ? "text-blue-600 bg-blue-50 shadow-sm" 
//                           : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                       }`
//                     }
//                   >
//                     <span>Dashboard</span>
//                   </NavLink>
//                 )}
//                 <button 
//                   onClick={() => {
//                     logout();
//                     setOpen(false);
//                   }}
//                   className="w-full text-left flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-rose-600 hover:bg-rose-50 transition-all duration-200"
//                 >
//                   <LogOut size={18} />
//                   <span>Logout</span>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink 
//                   to="/login" 
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) => 
//                     `flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
//                       isActive 
//                         ? "text-blue-600 bg-blue-50 shadow-sm" 
//                         : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//                     }`
//                   }
//                 >
//                   <span>Login</span>
//                 </NavLink>
//                 <NavLink 
//                   to="/register" 
//                   onClick={() => setOpen(false)}
//                   className="flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm"
//                 >
//                   <span>Sign Up</span>
//                 </NavLink>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }






import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, X, MapPin, Home, Rss, FileText, User, LogOut, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-0 text-gray-800 hover:text-blue-500 transition-colors duration-200"
          >
            <div className="w-9 h-9  flex items-center justify-center">
              {/* <MapPin size={20} className="text-white" /> */}
              <img src="/logo.png" alt="" />
            </div>
            <span className="font-semibold text-xl text-gray-800">TRAVEA</span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                      isActive 
                        ? "text-blue-600 bg-blue-50 shadow-sm" 
                        : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    }`
                  }
                >
                  <Home size={16} />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/places" 
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                      isActive 
                        ? "text-blue-600 bg-blue-50 shadow-sm" 
                        : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    }`
                  }
                >
                  <MapPin size={16} />
                  <span>Places</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/feed" 
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                      isActive 
                        ? "text-blue-600 bg-blue-50 shadow-sm" 
                        : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    }`
                  }
                >
                  <Rss size={16} />
                  <span>Feed</span>
                </NavLink>
              </li>

              {user ? (
                <>
                  <li>
                    <NavLink 
                      to="/post" 
                      className={({ isActive }) => 
                        `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                          isActive 
                            ? "text-blue-600 bg-blue-50 shadow-sm" 
                            : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        }`
                      }
                    >
                      <FileText size={16} />
                      <span>Post</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/profile" 
                      className={({ isActive }) => 
                        `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                          isActive 
                            ? "text-blue-600 bg-blue-50 shadow-sm" 
                            : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        }`
                      }
                    >
                      <User size={16} />
                      <span>Profile</span>
                    </NavLink>
                  </li>
                  {user.role === "admin" && (
                    <li>
                      <NavLink 
                        to="/admin" 
                        className={({ isActive }) => 
                          `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                            isActive 
                              ? "text-blue-600 bg-blue-50 shadow-sm" 
                              : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                          }`
                        }
                      >
                        <span>Dashboard</span>
                      </NavLink>
                    </li>
                  )}
                  <li className="ml-2 border-l border-gray-200 pl-2">
                    <button 
                      onClick={logout}
                      className="px-4 py-2 text-sm font-medium text-rose-600 flex items-center space-x-1 rounded-lg border border-rose-100 bg-white hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 shadow-sm"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink 
                      to="/login" 
                      className={({ isActive }) => 
                        `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive 
                            ? "text-blue-600 bg-blue-50 shadow-sm" 
                            : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        }`
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/register" 
                      className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile menu button and dropdown */}
          <div className="md:hidden relative" ref={dropdownRef}>
            <button
              className="p-2 rounded-lg text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200 flex items-center"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
              <ChevronDown size={16} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile dropdown menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-fadeIn">
                <div className="space-y-1">
                  <NavLink 
                    to="/" 
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                      }`
                    }
                  >
                    <Home size={18} />
                    <span>Home</span>
                  </NavLink>
                  <NavLink 
                    to="/places" 
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                      }`
                    }
                  >
                    <MapPin size={18} />
                    <span>Places</span>
                  </NavLink>
                  <NavLink 
                    to="/feed" 
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => 
                      `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                      }`
                    }
                  >
                    <Rss size={18} />
                    <span>Feed</span>
                  </NavLink>

                  {user ? (
                    <>
                      <NavLink 
                        to="/post" 
                        onClick={() => setOpen(false)}
                        className={({ isActive }) => 
                          `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            isActive 
                              ? "text-blue-600 bg-blue-50" 
                              : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                          }`
                        }
                      >
                        <FileText size={18} />
                        <span>Post</span>
                      </NavLink>
                      <NavLink 
                        to="/profile" 
                        onClick={() => setOpen(false)}
                        className={({ isActive }) => 
                          `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            isActive 
                              ? "text-blue-600 bg-blue-50" 
                              : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                          }`
                        }
                      >
                        <User size={18} />
                        <span>Profile</span>
                      </NavLink>
                      {user.role === "admin" && (
                        <NavLink 
                          to="/admin" 
                          onClick={() => setOpen(false)}
                          className={({ isActive }) => 
                            `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                              isActive 
                                ? "text-blue-600 bg-blue-50" 
                                : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                            }`
                          }
                        >
                          <span>Dashboard</span>
                        </NavLink>
                      )}
                      <button 
                        onClick={() => {
                          logout();
                          setOpen(false);
                        }}
                        className="w-full text-left flex items-center space-x-3 px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-all duration-200"
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <NavLink 
                        to="/login" 
                        onClick={() => setOpen(false)}
                        className={({ isActive }) => 
                          `flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            isActive 
                              ? "text-blue-600 bg-blue-50" 
                              : "text-gray-700 hover:text-blue-500 hover:bg-gray-50"
                          }`
                        }
                      >
                        <span>Login</span>
                      </NavLink>
                      <NavLink 
                        to="/register" 
                        onClick={() => setOpen(false)}
                        className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                      >
                        <span>Sign Up</span>
                      </NavLink>
                    </>
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