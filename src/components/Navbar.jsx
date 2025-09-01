// // // import { Link, NavLink } from "react-router-dom";
// // // import { useState } from "react";
// // // import { useAuth } from "../context/AuthContext";

// // // const linkBase = "px-4 py-2 rounded-md hover:bg-gray-100";
// // // const active = ({ isActive }) =>
// // //   isActive ? `${linkBase} bg-gray-100` : linkBase;

// // // export default function Navbar() {
// // //   const { user, logout } = useAuth();
// // //   const [open, setOpen] = useState(false);

// // //   return (
// // //     <header className="border-b bg-white sticky top-0 z-50">
// // //       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
// // //         <Link to="/" className="flex items-center gap-2">
// // //           <div className="w-8 h-8 rounded-full bg-black/80" />
// // //           <span className="font-semibold">Travel Diary</span>
// // //         </Link>

// // //         {/* mobile menu button (only visible <640px) */}
// // //         <button
// // //           className="sm:hidden p-2"
// // //           onClick={() => setOpen(!open)}
// // //           aria-label="Menu"
// // //         >
// // //           ☰
// // //         </button>

// // //         {/* nav links */}
// // //         <nav
// // //           className={`${
// // //             open ? "block" : "hidden"
// // //           } sm:flex sm:items-center sm:gap-2`}
// // //         >
// // //           <ul className="flex flex-col sm:flex-row sm:items-center gap-2">
// // //             <li><NavLink to="/" className={active}>Home</NavLink></li>
// // //             <li><NavLink to="/places" className={active}>Places</NavLink></li>
// // //             <li><NavLink to="/feed" className={active}>Feed</NavLink></li>

// // //             {user && (
// // //               <>
// // //                 <li><NavLink to="/post" className={active}>Post</NavLink></li>
// // //                 <li><NavLink to="/profile" className={active}>Profile</NavLink></li>
// // //                 {user.role === "admin" && (
// // //                   <li><NavLink to="/admin" className={active}>Dashboard</NavLink></li>
// // //                 )}
// // //                 <li>
// // //                   <button
// // //                     onClick={logout}
// // //                     className="ml-2 px-4 py-2 rounded-md border hover:bg-gray-50 w-full sm:w-auto"
// // //                   >
// // //                     Logout
// // //                   </button>
// // //                 </li>
// // //               </>
// // //             )}

// // //             {!user && (
// // //               <>
// // //                 <li><NavLink to="/login" className={active}>Login</NavLink></li>
// // //                 <li><NavLink to="/register" className={active}>Signup</NavLink></li>
// // //               </>
// // //             )}
// // //           </ul>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // }




// // import { Link, NavLink } from "react-router-dom";
// // import { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { Menu, X } from "lucide-react"; // ✅ nice icons

// // const linkBase =
// //   "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
// // const active = ({ isActive }) =>
// //   isActive
// //     ? `${linkBase} bg-gray-900 text-white`
// //     : `${linkBase} text-gray-700 hover:bg-gray-100`;

// // export default function Navbar() {
// //   const { user, logout } = useAuth();
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <header className="border-b bg-white shadow-sm sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center gap-2">
// //             <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-black to-gray-700" />
// //             <span className="font-bold text-lg sm:text-xl tracking-tight">
// //               Travel Diary
// //             </span>
// //           </Link>

// //           {/* Desktop Nav */}
// //           <nav className="hidden sm:flex items-center gap-2">
// //             <NavLink to="/" className={active}>
// //               Home
// //             </NavLink>
// //             <NavLink to="/places" className={active}>
// //               Places
// //             </NavLink>
// //             <NavLink to="/feed" className={active}>
// //               Feed
// //             </NavLink>

// //             {user && (
// //               <>
// //                 <NavLink to="/post" className={active}>
// //                   Post
// //                 </NavLink>
// //                 <NavLink to="/profile" className={active}>
// //                   Profile
// //                 </NavLink>
// //                 {user.role === "admin" && (
// //                   <NavLink to="/admin" className={active}>
// //                     Dashboard
// //                   </NavLink>
// //                 )}
// //                 <button
// //                   onClick={logout}
// //                   className="ml-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium"
// //                 >
// //                   Logout
// //                 </button>
// //               </>
// //             )}

// //             {!user && (
// //               <>
// //                 <NavLink to="/login" className={active}>
// //                   Login
// //                 </NavLink>
// //                 <NavLink to="/register" className={active}>
// //                   Signup
// //                 </NavLink>
// //               </>
// //             )}
// //           </nav>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="sm:hidden p-2 rounded-md hover:bg-gray-100"
// //             onClick={() => setOpen(!open)}
// //             aria-label="Toggle Menu"
// //           >
// //             {open ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Nav */}
// //       {open && (
// //         <div className="sm:hidden bg-white border-t shadow-md">
// //           <ul className="flex flex-col p-4 space-y-2">
// //             <li>
// //               <NavLink to="/" className={active} onClick={() => setOpen(false)}>
// //                 Home
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/places"
// //                 className={active}
// //                 onClick={() => setOpen(false)}
// //               >
// //                 Places
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/feed"
// //                 className={active}
// //                 onClick={() => setOpen(false)}
// //               >
// //                 Feed
// //               </NavLink>
// //             </li>

// //             {user && (
// //               <>
// //                 <li>
// //                   <NavLink
// //                     to="/post"
// //                     className={active}
// //                     onClick={() => setOpen(false)}
// //                   >
// //                     Post
// //                   </NavLink>
// //                 </li>
// //                 <li>
// //                   <NavLink
// //                     to="/profile"
// //                     className={active}
// //                     onClick={() => setOpen(false)}
// //                   >
// //                     Profile
// //                   </NavLink>
// //                 </li>
// //                 {user.role === "admin" && (
// //                   <li>
// //                     <NavLink
// //                       to="/admin"
// //                       className={active}
// //                       onClick={() => setOpen(false)}
// //                     >
// //                       Dashboard
// //                     </NavLink>
// //                   </li>
// //                 )}
// //                 <li>
// //                   <button
// //                     onClick={() => {
// //                       logout();
// //                       setOpen(false);
// //                     }}
// //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium text-left"
// //                   >
// //                     Logout
// //                   </button>
// //                 </li>
// //               </>
// //             )}

// //             {!user && (
// //               <>
// //                 <li>
// //                   <NavLink
// //                     to="/login"
// //                     className={active}
// //                     onClick={() => setOpen(false)}
// //                   >
// //                     Login
// //                   </NavLink>
// //                 </li>
// //                 <li>
// //                   <NavLink
// //                     to="/register"
// //                     className={active}
// //                     onClick={() => setOpen(false)}
// //                   >
// //                     Signup
// //                   </NavLink>
// //                 </li>
// //               </>
// //             )}
// //           </ul>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // for hamburger icons

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-indigo-600">
//           TravelDiary
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 font-medium text-gray-700">
//           <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
//           <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
//           <Link to="/blogs" className="hover:text-indigo-600 transition">Blogs</Link>
//           <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
//           <Link 
//             to="/login" 
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//           >
//             Login
//           </Link>
//           <Link 
//             to="/register" 
//             className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
//           >
//             Sign Up
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-gray-700">
//           <Link to="/" className="block hover:text-indigo-600 transition">Home</Link>
//           <Link to="/about" className="block hover:text-indigo-600 transition">About</Link>
//           <Link to="/blogs" className="block hover:text-indigo-600 transition">Blogs</Link>
//           <Link to="/contact" className="block hover:text-indigo-600 transition">Contact</Link>
//           <Link 
//             to="/login" 
//             className="block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center"
//           >
//             Login
//           </Link>
//           <Link 
//             to="/register" 
//             className="block px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition text-center"
//           >
//             Sign Up
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }





import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react"; // modern icons

const linkBase =
  "px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100";
const active = ({ isActive }) =>
  isActive ? `${linkBase} bg-gray-100 font-medium` : linkBase;

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Travel Diary
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex sm:items-center sm:gap-2">
            <ul className="flex gap-2 items-center">
              <li>
                <NavLink to="/" className={active}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/places" className={active}>
                  Places
                </NavLink>
              </li>
              <li>
                <NavLink to="/feed" className={active}>
                  Feed
                </NavLink>
              </li>

              {user && (
                <>
                  <li>
                    <NavLink to="/post" className={active}>
                      Post
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" className={active}>
                      Profile
                    </NavLink>
                  </li>
                  {user.role === "admin" && (
                    <li>
                      <NavLink to="/admin" className={active}>
                        Dashboard
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={logout}
                      className="ml-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

              {!user && (
                <>
                  <li>
                    <NavLink to="/login" className={active}>
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile button */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav (only on small screens) */}
      {open && (
        <div className="sm:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col p-3 space-y-2">
            <li>
              <NavLink to="/" className={active} onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/places"
                className={active}
                onClick={() => setOpen(false)}
              >
                Places
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feed"
                className={active}
                onClick={() => setOpen(false)}
              >
                Feed
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/post"
                    className={active}
                    onClick={() => setOpen(false)}
                  >
                    Post
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={active}
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </NavLink>
                </li>
                {user.role === "admin" && (
                  <li>
                    <NavLink
                      to="/admin"
                      className={active}
                      onClick={() => setOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!user && (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={active}
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    onClick={() => setOpen(false)}
                  >
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
