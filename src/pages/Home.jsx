// // // Home.jsx
// // import { useAuth } from "../context/AuthContext";
// // import { Link } from "react-router-dom";

// // export default function Home() {
// //   const { user } = useAuth(); // get user from context

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
// //       {!user ? (
// //         // Before login
// //         <div className="text-center space-y-6">
// //           <h1 className="text-4xl font-bold text-gray-800">
// //             Welcome to TravelDiary ✈️
// //           </h1>
// //           <p className="text-gray-600 text-lg max-w-md mx-auto">
// //             Capture your travel memories, plan your trips, and share your adventures.
// //           </p>
// //           <Link
// //             to="/register"
// //             className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
// //           >
// //             Get Started Now
// //           </Link>
// //           <p className="text-gray-500">
// //             Already have an account?{" "}
// //             <Link to="/login" className="text-blue-600 font-medium">
// //               Login
// //             </Link>
// //           </p>
// //         </div>
// //       ) : (
// //         // After login
// //         <div className="text-center space-y-6">
// //           <h1 className="text-4xl font-bold text-gray-800">
// //             Hello {user.name || "Traveler"} 👋
// //           </h1>
// //           <p className="text-gray-600 text-lg max-w-md mx-auto">
// //             Ready for your next journey? Explore beautiful destinations,
// //             document your travel stories, and relive your adventures.
// //           </p>
// //           <Link
// //             to="/my-trips"
// //             className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
// //           >
// //             Start Exploring
// //           </Link>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }








// import { useAuth } from "../context/AuthContext";
// import { Link } from "react-router-dom";
// import { MapPin, Compass, Camera, Users, Star, ArrowRight } from "lucide-react";

// export default function Home() {
//   const { user } = useAuth();

//   // Sample featured destinations data
//   const featuredDestinations = [
//     {
//       id: 1,
//       name: "Santorini, Greece",
//       image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       description: "Stunning sunsets and white-washed buildings"
//     },
//     {
//       id: 2,
//       name: "Kyoto, Japan",
//       image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       description: "Ancient temples and beautiful cherry blossoms"
//     },
//     {
//       id: 3,
//       name: "Banff, Canada",
//       image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       description: "Majestic mountains and turquoise lakes"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               {!user ? (
//                 <>
//                   Document Your <span className="text-blue-600">Travel Adventures</span> ✈️
//                 </>
//               ) : (
//                 <>
//                   Welcome Back, <span className="text-blue-600">{user.name || "Explorer"}</span>! 👋
//                 </>
//               )}
//             </h1>
            
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
//               {!user 
//                 ? "Capture memories, share experiences, and inspire others with your journey around the world."
//                 : "Ready for your next adventure? Explore new destinations and continue your travel story."
//               }
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               {!user ? (
//                 <>
//                   <Link
//                     to="/register"
//                     className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
//                   >
//                     <span>Get Started Now</span>
//                     <ArrowRight size={20} />
//                   </Link>
//                   <Link
//                     to="/login"
//                     className="px-8 py-4 border border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300"
//                   >
//                     Sign In
//                   </Link>
//                 </>
//               ) : (
//                 <Link
//                   to="/places"
//                   className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
//                 >
//                   <Compass size={20} />
//                   <span>Start Exploring</span>
//                 </Link>
//               )}
//             </div>
            
//             {!user && (
//               <p className="text-gray-500 mt-6">
//                 Join <span className="font-semibold">12,345+</span> travelers sharing their stories
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       {!user && (
//         <div className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why TravelDiary?</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 The perfect companion for your journeys around the globe
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
//                   <MapPin size={32} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Journey</h3>
//                 <p className="text-gray-600">
//                   Pinpoint every location you've visited and create a visual travel history
//                 </p>
//               </div>
              
//               <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
//                   <Camera size={32} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Capture Memories</h3>
//                 <p className="text-gray-600">
//                   Upload photos and write stories to preserve your travel experiences
//                 </p>
//               </div>
              
//               <div className="text-center p-6 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
//                   <Users size={32} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Share & Inspire</h3>
//                 <p className="text-gray-600">
//                   Connect with other travelers and discover new destinations through their eyes
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Featured Destinations */}
//       <div className="py-16 bg-gradient-to-b from-white to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               {user ? "Continue Your Adventure" : "Featured Destinations"}
//             </h2>
//             <p className="text-xl text-gray-600">
//               {user ? "Places waiting to be explored" : "Get inspired by beautiful locations around the world"}
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredDestinations.map((destination) => (
//               <div key={destination.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={destination.image} 
//                     alt={destination.name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
//                   <p className="text-gray-600 mb-4">{destination.description}</p>
//                   <div className="flex items-center">
//                     <div className="flex text-amber-500">
//                       <Star size={18} fill="currentColor" />
//                       <Star size={18} fill="currentColor" />
//                       <Star size={18} fill="currentColor" />
//                       <Star size={18} fill="currentColor" />
//                       <Star size={18} />
//                     </div>
//                     <span className="ml-2 text-sm text-gray-500">4.8 (128 reviews)</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-12">
//             <Link
//               to="/places"
//               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
//             >
//               Explore All Destinations
//               <ArrowRight size={20} className="ml-2" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       {!user && (
//         <div className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
//                 <div className="text-gray-600">Travel Stories</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-green-600 mb-2">120+</div>
//                 <div className="text-gray-600">Countries Explored</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-amber-600 mb-2">25K+</div>
//                 <div className="text-gray-600">Photos Shared</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
//                 <div className="text-gray-600">Happy Travelers</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             {user ? "Your Next Adventure Awaits" : "Ready to Start Your Journey?"}
//           </h2>
//           <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
//             {user 
//               ? "Discover new places, share your experiences, and create memories that last a lifetime."
//               : "Join our community of travelers and start documenting your adventures today."
//             }
//           </p>
//           <Link
//             to={user ? "/post" : "/register"}
//             className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
//           >
//             {user ? "Share Your Experience" : "Create Your Account"}
//             <ArrowRight size={20} className="ml-2" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }






import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { MapPin, Compass, Camera, Users, Star, ArrowRight, Heart, Globe, BookOpen } from "lucide-react";

export default function Home() {
  const { user } = useAuth();

  // Sample featured destinations data
  const featuredDestinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Stunning sunsets and white-washed buildings"
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Ancient temples and beautiful cherry blossoms"
    },
    {
      id: 3,
      name: "Banff, Canada",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Majestic mountains and turquoise lakes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <MapPin size={28} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {!user ? (
                <>
                  Document Your <span className="text-blue-600">Travel Adventures</span>
                </>
              ) : (
                <>
                  Welcome Back, <span className="text-blue-600">{user.name || "Explorer"}</span>
                </>
              )}
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {!user 
                ? "Capture memories, share experiences, and inspire others with your journey around the world. Your personal travel diary awaits."
                : "Ready for your next adventure? Explore new destinations and continue your travel story with your personal diary."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {!user ? (
                <>
                  <Link
                    to="/register"
                    className="px-7 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/login"
                    className="px-7 py-3.5 border border-blue-500/30 text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all duration-300 font-medium"
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <Link
                  to="/places"
                  className="px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
                >
                  <Compass size={18} />
                  <span>Start Exploring</span>
                </Link>
              )}
            </div>
            
            {!user && (
              <p className="text-gray-500 mt-8 text-sm">
                Join <span className="font-medium">12,345+</span> travelers sharing their stories
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      {!user && (
        <div className="py-16 bg-white/50">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose TravelDiary?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The perfect companion for your journeys around the globe
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-500 mb-5">
                  <MapPin size={26} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Track Your Journey</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pinpoint every location you've visited and create a visual travel history with interactive maps.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-50 text-green-500 mb-5">
                  <Camera size={26} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Capture Memories</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Upload photos and write stories to preserve your travel experiences for years to come.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-50 text-amber-500 mb-5">
                  <Users size={26} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Share & Inspire</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect with other travelers and discover new destinations through their experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Destinations */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              {user ? "Continue Your Adventure" : "Featured Destinations"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {user ? "Places waiting to be explored" : "Get inspired by beautiful locations around the world"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} />
                    </div>
                    <span className="ml-2 text-xs text-gray-500">4.8 (128 reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/places"
              className="inline-flex items-center px-6 py-3 border border-gray-200 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 shadow-sm"
            >
              Explore All Destinations
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {!user && (
        <div className="py-16 bg-white/70">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-semibold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600 text-sm">Travel Stories</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-green-600 mb-2">120+</div>
                <div className="text-gray-600 text-sm">Countries Explored</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-amber-600 mb-2">25K+</div>
                <div className="text-gray-600 text-sm">Photos Shared</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-indigo-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div className="py-16 bg-blue-50/20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-12">What Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-amber-400 justify-center mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-600 text-sm italic mb-4">"TravelDiary transformed how I document my journeys. It's like having a beautiful digital scrapbook of all my adventures."</p>
              <div className="text-xs text-gray-500">- Sarah, Travel Blogger</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-amber-400 justify-center mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-600 text-sm italic mb-4">"I've discovered so many hidden gems through this platform. The community recommendations are invaluable for planning trips."</p>
              <div className="text-xs text-gray-500">- Michael, Adventure Traveler</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {user ? "Your Next Adventure Awaits" : "Ready to Start Your Journey?"}
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto mb-10 text-blue-100">
            {user 
              ? "Discover new places, share your experiences, and create memories that last a lifetime."
              : "Join our community of travelers and start documenting your adventures today."
            }
          </p>
          <Link
            to={user ? "/post" : "/register"}
            className="inline-flex items-center px-7 py-3.5 bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300 font-medium"
          >
            {user ? "Share Your Experience" : "Create Your Account"}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white text-sm">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
          <p>© {new Date().getFullYear()} TravelDiary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}