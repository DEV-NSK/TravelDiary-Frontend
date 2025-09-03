// // // // // // import { useState, useEffect } from "react";

// // // // // // export default function Profile() {
// // // // // //   const [user, setUser] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     // Fetch user profile later with JWT
// // // // // //     setUser({
// // // // // //       name: "John Doe",
// // // // // //       email: "john@example.com",
// // // // // //       bio: "Traveler & blogger 🌍",
// // // // // //     });
// // // // // //   }, []);

// // // // // //   if (!user) return <p>Loading profile...</p>;

// // // // // //   return (
// // // // // //     <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
// // // // // //       <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
// // // // // //       <p className="text-gray-500 mb-2">{user.email}</p>
// // // // // //       <p className="text-gray-700">{user.bio}</p>
// // // // // //       {/* Later: Add edit form + list user’s posts */}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import { useState, useEffect } from "react";
// // // // // import { apiUrl } from "../App"; 

// // // // // export default function UserProfile() {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchProfile = async () => {
// // // // //       try {
// // // // //         const token = localStorage.getItem("token");
// // // // //         const res = await fetch(`${apiUrl}/api/auth/me`, {
// // // // //           headers: {
// // // // //             "Content-Type": "application/json",
// // // // //             Authorization: `Bearer ${token}`,
// // // // //           },
// // // // //         });

// // // // //         if (!res.ok) {
// // // // //           throw new Error("Failed to fetch profile");
// // // // //         }

// // // // //         const data = await res.json();
// // // // //         setUser(data);
// // // // //       } catch (err) {
// // // // //         setError(err.message);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchProfile();
// // // // //   }, []);

// // // // //   if (loading) return <p>Loading profile...</p>;
// // // // //   if (error) return <p className="text-red-500">{error}</p>;
// // // // //   if (!user) return <p>No user data available</p>;

// // // // //   return (
// // // // //     <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
// // // // //       <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
// // // // //       <p className="text-gray-500 mb-2">{user.email}</p>
// // // // //       <p className="text-gray-700">{user.bio}</p>
// // // // //       {/* Later: Add edit form + list user’s posts */}
// // // // //     </div>
// // // // //   );
// // // // // }





// // // // src/pages/UserProfile.jsx
// // // import { useState, useEffect } from "react";
// // // import { apiUrl } from "../App";

// // // export default function UserProfile() {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         if (!token) throw new Error("User not authenticated");

// // //         const res = await fetch(`${apiUrl}/api/auth/me`, {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });

// // //         if (!res.ok) {
// // //           throw new Error("Failed to fetch profile");
// // //         }

// // //         const data = await res.json();
// // //         // Adjust depending on your backend response
// // //         setUser(data.user || data); 
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProfile();
// // //   }, []);

// // //   if (loading) return <p className="text-center mt-6">Loading profile...</p>;
// // //   if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
// // //   if (!user) return <p className="text-center mt-6">No user data available</p>;

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
// // //       <h2 className="text-2xl font-semibold mb-2">{user.name || "N/A"}</h2>
// // //       <p className="text-gray-500 mb-2">{user.email || "N/A"}</p>
// // //       <p className="text-gray-700">{user.bio || "No bio available"}</p>

// // //       {/* Placeholder: Edit form + list user’s posts */}
// // //       <div className="mt-4 border-t pt-4">
// // //         <p className="text-gray-500 italic">Edit profile & view your posts here.</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // // import { useState, useEffect } from "react";
// // // import { apiUrl } from "../App";

// // // export default function UserProfile() {
// // //   const [user, setUser] = useState({
// // //     name: "Travel Blogger",
// // //     email: "example@travel.com",
// // //     bio: "Traveler & blogger 🌍",
// // //   });
// // //   const [posts, setPosts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [editMode, setEditMode] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     bio: "",
// // //   });

// // //   useEffect(() => {
// // //     const fetchProfileAndPosts = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");

// // //         // Fetch user profile
// // //         const resUser = await fetch(`${apiUrl}/api/auth/me`, {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });
// // //         if (!resUser.ok) throw new Error("Failed to fetch profile");
// // //         const userData = await resUser.json();
// // //         setUser(userData || user);
// // //         setFormData({
// // //           name: userData?.name || user.name,
// // //           email: userData?.email || user.email,
// // //           bio: userData?.bio || user.bio,
// // //         });

// // //         // Fetch user posts
// // //         const resPosts = await fetch(`${apiUrl}/api/diaries/`, {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });
// // //         if (!resPosts.ok) throw new Error("Failed to fetch posts");
// // //         const postsData = await resPosts.json();
// // //         setPosts(postsData || []);
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProfileAndPosts();
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// // //   };

// // //   const handleSave = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await fetch(`${apiUrl}/api/auth/update`, {
// // //         method: "PUT",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });
// // //       if (!res.ok) throw new Error("Failed to update profile");
// // //       const updatedUser = await res.json();
// // //       setUser(updatedUser);
// // //       setEditMode(false);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   if (loading) return <p className="text-center mt-6">Loading profile...</p>;
// // //   if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;

// // //   return (
// // //     <div className="max-w-3xl mx-auto p-6">
// // //       <div className="bg-white shadow-md rounded-xl p-6 mb-6">
// // //         {editMode ? (
// // //           <div className="space-y-4">
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               value={formData.name}
// // //               onChange={handleChange}
// // //               className="w-full border p-2 rounded-md"
// // //               placeholder="Name"
// // //             />
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //               className="w-full border p-2 rounded-md"
// // //               placeholder="Email"
// // //             />
// // //             <textarea
// // //               name="bio"
// // //               value={formData.bio}
// // //               onChange={handleChange}
// // //               className="w-full border p-2 rounded-md"
// // //               placeholder="Bio"
// // //             />
// // //             <div className="flex justify-end gap-2">
// // //               <button
// // //                 onClick={() => setEditMode(false)}
// // //                 className="px-4 py-2 rounded-md bg-gray-200"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleSave}
// // //                 className="px-4 py-2 rounded-md bg-blue-500 text-white"
// // //               >
// // //                 Save
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ) : (
// // //           <div>
// // //             <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
// // //             <p className="text-gray-500 mb-2">{user.email}</p>
// // //             <p className="text-gray-700 mb-4">{user.bio}</p>
// // //             <button
// // //               onClick={() => setEditMode(true)}
// // //               className="px-4 py-2 rounded-md bg-blue-500 text-white"
// // //             >
// // //               Edit Profile
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>

// // //       <div>
// // //         <h3 className="text-xl font-semibold mb-4">My Posts</h3>
// // //         {posts.length === 0 ? (
// // //           <p>No posts yet.</p>
// // //         ) : (
// // //           <div className="space-y-4">
// // //             {posts.map((post) => (
// // //               <div
// // //                 key={post._id}
// // //                 className="border rounded-md p-4 bg-gray-50 shadow-sm"
// // //               >
// // //                 <h4 className="font-semibold">{post.title}</h4>
// // //                 <p className="text-gray-700">{post.content}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // // import { useState, useEffect } from "react";
// // // import { apiUrl } from "../App";

// // // export default function UserProfile() {
// // //   const [user, setUser] = useState({
// // //     name: "Travel Blogger",
// // //     email: "travel@example.com",
// // //     bio: "Traveler & blogger 🌍",
// // //   });
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [editing, setEditing] = useState(false);
// // //   const [formData, setFormData] = useState({ name: "", email: "", bio: "" });

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const res = await fetch(`${apiUrl}/api/auth/me`, {
// // //           headers: {
// // //             "Content-Type": "application/json",
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });

// // //         if (!res.ok) throw new Error("Failed to fetch profile");

// // //         const data = await res.json();
// // //         setUser({
// // //           name: data.name ,
// // //           email: data.email,
// // //           bio: data.bio || "Traveler & blogger 🌍",
// // //         });
// // //         setFormData({
// // //           name: data.name || "Travel Blogger",
// // //           email: data.email || "travel@example.com",
// // //           bio: data.bio || "Traveler & blogger 🌍",
// // //         });
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProfile();
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSave = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const res = await fetch(`${apiUrl}/api/auth/update`, {
// // //         method: "PUT",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       if (!res.ok) throw new Error("Failed to update profile");

// // //       const updatedUser = await res.json();
// // //       setUser(updatedUser);
// // //       setEditing(false);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   if (loading) return <p>Loading profile...</p>;
// // //   if (error) return <p className="text-red-500">{error}</p>;

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
// // //       {editing ? (
// // //         <div className="space-y-4">
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             className="w-full border p-2 rounded-md"
// // //             placeholder="Name"
// // //           />
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //             className="w-full border p-2 rounded-md"
// // //             placeholder="Email"
// // //           />
// // //           <textarea
// // //             name="bio"
// // //             value={formData.bio}
// // //             onChange={handleChange}
// // //             className="w-full border p-2 rounded-md"
// // //             placeholder="Bio"
// // //           />
// // //           <div className="flex justify-between">
// // //             <button
// // //               onClick={handleSave}
// // //               className="bg-blue-500 text-white px-4 py-2 rounded-md"
// // //             >
// // //               Save
// // //             </button>
// // //             <button
// // //               onClick={() => setEditing(false)}
// // //               className="bg-gray-300 px-4 py-2 rounded-md"
// // //             >
// // //               Cancel
// // //             </button>
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
// // //           <p className="text-gray-500 mb-2">{user.email}</p>
// // //           <p className="text-gray-700 mb-4">{user.bio}</p>
// // //           <button
// // //             onClick={() => setEditing(true)}
// // //             className="bg-blue-500 text-white px-4 py-2 rounded-md"
// // //           >
// // //             Edit Profile
// // //           </button>
// // //         </>
// // //       )}

// // //       {/* Placeholder: User posts will be displayed here later */}
// // //       <div className="mt-6 border-t pt-4">
// // //         <p className="text-gray-500 italic">Your posts will appear here.</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }











// // import { useState, useEffect, useRef } from "react";
// // import { apiUrl } from "../App";
// // import { Edit3, Camera, MapPin, Heart, MessageCircle, User, Mail, Calendar, Grid, Bookmark, Settings } from "lucide-react";

// // export default function UserProfile() {
// //   const [user, setUser] = useState(null);
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editForm, setEditForm] = useState({
// //     name: "",
// //     bio: "",
// //     website: "",
// //     location: ""
// //   });
// //   const fileInputRef = useRef(null);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) throw new Error("User not authenticated");

// //         const res = await fetch(`${apiUrl}/api/auth/me`, {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         if (!res.ok) {
// //           throw new Error("Failed to fetch profile");
// //         }

// //         const data = await res.json();
// //         const userData = data.user || data;
// //         setUser(userData);
// //         setEditForm({
// //           name: userData.name || "",
// //           bio: userData.bio || "",
// //           website: userData.website || "",
// //           location: userData.location || ""
// //         });

// //         // Fetch user's posts (replace with your actual API endpoint)
// //         await fetchUserPosts(token);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   const fetchUserPosts = async (token) => {
// //     try {
// //       // Replace with your actual API endpoint for fetching user posts
// //       const res = await fetch(`${apiUrl}/api/diary/user`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       if (res.ok) {
// //         const data = await res.json();
// //         setPosts(data.posts || []);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch user posts:", err);
// //     }
// //   };

// //   const handleEditSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await fetch(`${apiUrl}/api/auth/update`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify(editForm),
// //       });

// //       if (res.ok) {
// //         const data = await res.json();
// //         setUser(data.user);
// //         setIsEditing(false);
// //       } else {
// //         throw new Error("Failed to update profile");
// //       }
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   const handleProfilePictureChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     try {
// //       const token = localStorage.getItem("token");
// //       const formData = new FormData();
// //       formData.append("profilePicture", file);

// //       const res = await fetch(`${apiUrl}/api/auth/upload-profile`, {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: formData,
// //       });

// //       if (res.ok) {
// //         const data = await res.json();
// //         setUser({ ...user, profilePicture: data.profilePicture });
// //       } else {
// //         throw new Error("Failed to upload profile picture");
// //       }
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   const triggerFileInput = () => {
// //     fileInputRef.current.click();
// //   };

// //   if (loading) return (
// //     <div className="flex justify-center items-center h-64">
// //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
// //     </div>
// //   );
  
// //   if (error) return (
// //     <div className="max-w-4xl mx-auto p-4">
// //       <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center">
// //         {error}
// //       </div>
// //     </div>
// //   );
  
// //   if (!user) return (
// //     <div className="max-w-4xl mx-auto p-4">
// //       <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-700 text-center">
// //         No user data available
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="max-w-4xl mx-auto bg-white min-h-screen">
// //       {/* Profile Header */}
// //       <div className="p-6 border-b border-gray-200">
// //         <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
// //           {/* Profile Picture */}
// //           <div className="relative">
// //             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
// //               <img 
// //                 src={user.profilePicture || "/default-avatar.png"} 
// //                 alt={user.name}
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             <button 
// //               onClick={triggerFileInput}
// //               className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors"
// //             >
// //               <Camera size={16} />
// //             </button>
// //             <input 
// //               type="file" 
// //               ref={fileInputRef}
// //               onChange={handleProfilePictureChange}
// //               className="hidden"
// //               accept="image/*"
// //             />
// //           </div>

// //           {/* Profile Info */}
// //           <div className="flex-1">
// //             <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
// //               <h2 className="text-2xl font-light text-gray-800">{user.name || "Traveler"}</h2>
// //               {!isEditing ? (
// //                 <div className="flex space-x-3">
// //                   <button 
// //                     onClick={() => setIsEditing(true)}
// //                     className="px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //                   >
// //                     Edit Profile
// //                   </button>
// //                   <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
// //                     <Settings size={18} />
// //                   </button>
// //                 </div>
// //               ) : (
// //                 <div className="flex space-x-3">
// //                   <button 
// //                     onClick={handleEditSubmit}
// //                     className="px-4 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
// //                   >
// //                     Save Changes
// //                   </button>
// //                   <button 
// //                     onClick={() => setIsEditing(false)}
// //                     className="px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// //                   >
// //                     Cancel
// //                   </button>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Stats */}
// //             <div className="flex space-x-8 mb-6">
// //               <div className="text-center">
// //                 <span className="font-semibold text-gray-800">{posts.length}</span>
// //                 <p className="text-gray-600 text-sm">Posts</p>
// //               </div>
// //               <div className="text-center">
// //                 <span className="font-semibold text-gray-800">1.2K</span>
// //                 <p className="text-gray-600 text-sm">Followers</p>
// //               </div>
// //               <div className="text-center">
// //                 <span className="font-semibold text-gray-800">456</span>
// //                 <p className="text-gray-600 text-sm">Following</p>
// //               </div>
// //             </div>

// //             {/* User Info */}
// //             {!isEditing ? (
// //               <div>
// //                 <p className="font-semibold text-gray-800">{user.name || "Travel Enthusiast"}</p>
// //                 <p className="text-gray-600 mb-2">{user.bio || "No bio yet"}</p>
// //                 {user.website && (
// //                   <a href={user.website} className="text-blue-500 text-sm font-medium hover:underline">
// //                     {user.website}
// //                   </a>
// //                 )}
// //                 {user.location && (
// //                   <div className="flex items-center text-gray-600 text-sm mt-1">
// //                     <MapPin size={14} className="mr-1" />
// //                     {user.location}
// //                   </div>
// //                 )}
// //               </div>
// //             ) : (
// //               <form onSubmit={handleEditSubmit} className="space-y-3">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
// //                   <input
// //                     type="text"
// //                     value={editForm.name}
// //                     onChange={(e) => setEditForm({...editForm, name: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
// //                   <textarea
// //                     value={editForm.bio}
// //                     onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
// //                     rows="2"
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
// //                   <input
// //                     type="url"
// //                     value={editForm.website}
// //                     onChange={(e) => setEditForm({...editForm, website: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
// //                   <input
// //                     type="text"
// //                     value={editForm.location}
// //                     onChange={(e) => setEditForm({...editForm, location: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //                   />
// //                 </div>
// //               </form>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Posts Section */}
// //       <div className="p-4">
// //         <div className="flex justify-center border-t border-gray-200">
// //           <button className="flex items-center py-4 px-6 border-t border-transparent -mt-px text-gray-800 font-medium">
// //             <Grid size={18} className="mr-2" />
// //             POSTS
// //           </button>
// //           <button className="flex items-center py-4 px-6 border-t border-transparent -mt-px text-gray-500 font-medium">
// //             <Bookmark size={18} className="mr-2" />
// //             SAVED
// //           </button>
// //         </div>

// //         {posts.length === 0 ? (
// //           <div className="text-center py-16">
// //             <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
// //               <Camera size={24} className="text-gray-400" />
// //             </div>
// //             <h3 className="text-xl font-light text-gray-800 mb-2">No Posts Yet</h3>
// //             <p className="text-gray-600">When you share your travel experiences, they will appear here.</p>
// //             <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
// //               Share Your First Experience
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-3 gap-1">
// //             {posts.map((post) => (
// //               <div key={post._id} className="aspect-square relative group cursor-pointer">
// //                 <img 
// //                   src={post.media && post.media.length > 0 ? post.media[0] : "/placeholder-image.jpg"} 
// //                   alt={post.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100">
// //                   <div className="flex items-center text-white font-semibold">
// //                     <Heart size={20} className="mr-1" />
// //                     {post.likes || 0}
// //                   </div>
// //                   <div className="flex items-center text-white font-semibold">
// //                     <MessageCircle size={20} className="mr-1" />
// //                     {post.comments || 0}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }









// import { useState, useEffect } from "react";
// import { apiUrl } from "../App";
// import { Camera, Edit3, Save, X, MapPin, Calendar, Heart, MessageCircle, MoreHorizontal, User, Mail } from "lucide-react";

// export default function UserProfile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     bio: "",
//     location: ""
//   });
//   const [userPosts, setUserPosts] = useState([]);
//   const [postsLoading, setPostsLoading] = useState(true);

//   // Default profile image
//   const defaultProfileImage = "";

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("User not authenticated");

//         const res = await fetch(`${apiUrl}/api/auth/me`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch profile");
//         }

//         const data = await res.json();
//         const userData = data.user || data;
//         setUser(userData);
//         setEditForm({
//           name: userData.name || "",
//           bio: userData.bio || "",
//           location: userData.location || ""
//         });
        
//         // Fetch user's posts
//         await fetchUserPosts(token);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchUserPosts = async (token) => {
//       try {
//         const res = await fetch(`${apiUrl}/api/diary/my`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
        
//         if (res.ok) {
//           const postsData = await res.json();
//           setUserPosts(postsData.posts || postsData || []);
//         } else {
//           setUserPosts([]);
//         }
//       } catch (err) {
//         console.error("Error fetching user posts:", err);
//         setUserPosts([]);
//       } finally {
//         setPostsLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleEditToggle = () => {
//     if (isEditing) {
//       // If canceling edit, reset form to original values
//       setEditForm({
//         name: user.name || "",
//         bio: user.bio || "Traveller",
//         location: user.location || ""
//       });
//     }
//     setIsEditing(!isEditing);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSaveProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`${apiUrl}/api/users/profile`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(editForm),
//       });

//       if (res.ok) {
//         const updatedData = await res.json();
//         setUser(updatedData.user || updatedData);
//         setIsEditing(false);
//         alert("Profile updated successfully!");
//       } else {
//         throw new Error("Failed to update profile");
//       }
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleImageUpload = (e) => {
//     // This would be implemented with your backend API
//     alert("Profile image upload functionality would be implemented here");
//   };

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//     </div>
//   );
  
//   if (error) return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <p className="text-red-500 text-lg">{error}</p>
//     </div>
//   );
  
//   if (!user) return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <p className="text-gray-600">No user data available</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 pb-12">
//       {/* Profile Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-4xl mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//             {/* Profile Image */}
//             <div className="relative">
//               <img 
//                 src={user.profileImage || defaultProfileImage} 
//                 alt={user.name} 
//                 className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
//               />
//               <label htmlFor="profileImage" className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
//                 <Camera size={16} />
//                 <input 
//                   type="file" 
//                   id="profileImage" 
//                   className="hidden" 
//                   onChange={handleImageUpload}
//                   accept="image/*"
//                 />
//               </label>
//             </div>
            
//             {/* Profile Info */}
//             <div className="flex-1 text-center md:text-left">
//               <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="name"
//                     value={editForm.name}
//                     onChange={handleInputChange}
//                     className="text-2xl font-bold text-gray-800 bg-gray-100 rounded-lg px-3 py-2 w-full md:w-auto"
//                   />
//                 ) : (
//                   <h1 className="text-2xl font-bold text-gray-800">{user.name || "N/A"}</h1>
//                 )}
                
//                 <button
//                   onClick={isEditing ? handleSaveProfile : handleEditToggle}
//                   className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
//                 >
//                   {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
//                   {isEditing ? "Save" : "Edit Profile"}
//                 </button>
                
//                 {isEditing && (
//                   <button
//                     onClick={handleEditToggle}
//                     className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
//                   >
//                     <X size={16} />
//                     Cancel
//                   </button>
//                 )}
//               </div>
              
//               <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-600">
//                 <div className="flex items-center">
//                   <Mail size={16} className="mr-2" />
//                   <span>{user.email || "N/A"}</span>
//                 </div>
                
//                 <div className="flex items-center">
//                   <MapPin size={16} className="mr-2" />
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name="location"
//                       value={editForm.location}
//                       onChange={handleInputChange}
//                       placeholder="Add your location"
//                       className="bg-gray-100 rounded-lg px-3 py-1 text-sm w-full md:w-48"
//                     />
//                   ) : (
//                     <span>{user.location || "No location set"}</span>
//                   )}
//                 </div>
//               </div>
              
//               {isEditing ? (
//                 <textarea
//                   name="bio"
//                   value={editForm.bio}
//                   onChange={handleInputChange}
//                   placeholder="Tell us about yourself..."
//                   className="w-full bg-gray-100 rounded-lg px-3 py-2 text-gray-700 resize-none mb-4"
//                   rows="3"
//                 />
//               ) : (
//                 <p className="text-gray-700 mb-4">{user.bio || "No bio available"}</p>
//               )}
              
//               <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-gray-500">
//                 <span className="flex flex-col items-center">
//                   <span className="font-semibold text-gray-800 text-lg">{userPosts.length}</span>
//                   <span>Posts</span>
//                 </span>
//                 {/* <span className="flex flex-col items-center">
//                   <span className="font-semibold text-gray-800 text-lg">1.2K</span>
//                   <span>Followers</span>
//                 </span>
//                 <span className="flex flex-col items-center">
//                   <span className="font-semibold text-gray-800 text-lg">584</span>
//                   <span>Following</span>
//                 </span> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* User's Posts Section */}
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
//           <User size={20} className="mr-2 text-blue-500" />
//           Your Travel Diaries
//         </h2>
        
//         {postsLoading ? (
//           <div className="flex justify-center py-12">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//           </div>
//         ) : userPosts.length === 0 ? (
//           <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Edit3 size={24} className="text-gray-400" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-700 mb-2">No posts yet</h3>
//             <p className="text-gray-500 max-w-md mx-auto">
//               Share your first travel experience and start building your travel diary.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {userPosts.map((post) => (
//               <div key={post._id || post.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
//                 {post.media && post.media.length > 0 && (
//                   <div className="h-48 overflow-hidden">
//                     <img 
//                       src={post.media[0]} 
//                       alt={post.title} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 )}
//                 <div className="p-4">
//                   <h3 className="font-semibold text-gray-800 mb-2 truncate">{post.title}</h3>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
//                   {post.location && (
//                     <div className="flex items-center text-gray-500 text-xs mb-3">
//                       <MapPin size={14} className="mr-1" />
//                       <span>{post.location}</span>
//                     </div>
//                   )}
//                   {post.createdAt && (
//                     <div className="flex items-center text-gray-500 text-xs">
//                       <Calendar size={14} className="mr-1" />
//                       <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//                     </div>
//                   )}
//                   <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
//                     <div className="flex items-center space-x-3 text-gray-500">
//                       <button className="flex items-center hover:text-red-500 transition-colors">
//                         <Heart size={16} className="mr-1" />
//                         <span className="text-xs">{post.likes || 0}</span>
//                       </button>
//                       <button className="flex items-center hover:text-blue-500 transition-colors">
//                         <MessageCircle size={16} className="mr-1" />
//                         <span className="text-xs">{post.comments || 0}</span>
//                       </button>
//                     </div>
//                     <button className="text-gray-400 hover:text-gray-600">
//                       <MoreHorizontal size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }












import { useState, useEffect } from "react";
import { apiUrl } from "../App";
import { Camera, Edit3, Save, X, MapPin, Calendar, Heart, MessageCircle, MoreHorizontal, User, Mail, Globe } from "lucide-react";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    bio: "",
    location: ""
  });
  const [userPosts, setUserPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  // Default profile image
  const defaultProfileImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const res = await fetch(`${apiUrl}/api/auth/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await res.json();
        const userData = data.user || data;
        setUser(userData);
        setEditForm({
          name: userData.name || "",
          bio: userData.bio || "",
          location: userData.location || ""
        });
        
        // Fetch user's posts
        await fetchUserPosts(token, userData._id || userData.id);
      } catch (err) {
        setError(err.message);
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserPosts = async (token, userId) => {
      try {
        console.log("Fetching posts for user:", userId);
        
        // Try different endpoints - adjust based on your API
        const endpoints = [
          `${apiUrl}/api/diary/user/${userId}`,
          `${apiUrl}/api/posts/user/${userId}`,
          `${apiUrl}/api/diary/my`,
          `${apiUrl}/api/posts/my`
        ];
        
        let postsData = null;
        
        for (const endpoint of endpoints) {
          try {
            const res = await fetch(endpoint, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            
            if (res.ok) {
              const data = await res.json();
              console.log("Posts API response:", data);
              
              // Handle different response structures
              if (Array.isArray(data)) {
                postsData = data;
              } else if (data.posts && Array.isArray(data.posts)) {
                postsData = data.posts;
              } else if (data.data && Array.isArray(data.data)) {
                postsData = data.data;
              } else if (data.diaries && Array.isArray(data.diaries)) {
                postsData = data.diaries;
              }
              
              if (postsData) break;
            }
          } catch (err) {
            console.warn(`Endpoint ${endpoint} failed:`, err);
            continue;
          }
        }
        
        if (postsData) {
          setUserPosts(postsData);
        } else {
          console.warn("No posts data found in any endpoint");
          setUserPosts([]);
        }
      } catch (err) {
        console.error("Error fetching user posts:", err);
        setUserPosts([]);
      } finally {
        setPostsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditToggle = () => {
    if (isEditing) {
      // If canceling edit, reset form to original values
      setEditForm({
        name: user.name || "",
        bio: user.bio || "",
        location: user.location || ""
      });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });

      if (res.ok) {
        const updatedData = await res.json();
        setUser(updatedData.user || updatedData);
        setIsEditing(false);
        alert("Profile updated successfully!");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update profile");
      }
    } catch (err) {
      alert(err.message);
      console.error("Update error:", err);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('profileImage', file);
      
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/users/profile/image`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setUser(prev => ({ ...prev, profileImage: data.profileImage }));
        alert("Profile image updated successfully!");
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (err) {
      alert(err.message);
      console.error("Image upload error:", err);
    }
  };

  // Debug function to check API structure
  const debugApi = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${apiUrl}/api/diary/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      console.log("Debug API response:", await res.json());
    } catch (err) {
      console.error("Debug error:", err);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <X className="text-red-500" size={24} />
        </div>
        <p className="text-red-500 text-lg mb-2">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    </div>
  );
  
  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-600">No user data available</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Debug button - remove in production */}
      <button 
        onClick={debugApi}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full text-xs opacity-50 hover:opacity-100"
        title="Debug API"
      >
        Debug
      </button>

      {/* Profile Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={user.profileImage || defaultProfileImage} 
                alt={user.name} 
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                onError={(e) => {
                  e.target.src = defaultProfileImage;
                }}
              />
              <label htmlFor="profileImage" className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                <Camera size={16} />
                <input 
                  type="file" 
                  id="profileImage" 
                  className="hidden" 
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-3 mb-4">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleInputChange}
                    className="text-2xl font-bold text-gray-800 bg-gray-100 rounded-lg px-3 py-2 w-full"
                    placeholder="Your name"
                  />
                ) : (
                  <h1 className="text-2xl font-bold text-gray-800">{user.name || "Unknown User"}</h1>
                )}
                
                <div className="flex gap-2 justify-center md:justify-start">
                  <button
                    onClick={isEditing ? handleSaveProfile : handleEditToggle}
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                  >
                    {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
                    {isEditing ? "Save" : "Edit Profile"}
                  </button>
                  
                  {isEditing && (
                    <button
                      onClick={handleEditToggle}
                      className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                      <X size={16} />
                      Cancel
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-600">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail size={16} className="mr-2" />
                  <span>{user.email || "No email"}</span>
                </div>
                
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin size={16} className="mr-2" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={editForm.location}
                      onChange={handleInputChange}
                      placeholder="Add your location"
                      className="bg-gray-100 rounded-lg px-3 py-1 text-sm w-48"
                    />
                  ) : (
                    <span>{user.location || "No location set"}</span>
                  )}
                </div>
              </div>
              
              {isEditing ? (
                <textarea
                  name="bio"
                  value={editForm.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself..."
                  className="w-full bg-gray-100 rounded-lg px-3 py-2 text-gray-700 resize-none mb-4"
                  rows="3"
                />
              ) : (
                <p className="text-gray-700 mb-4 text-center md:text-left">
                  {user.bio || "This user hasn't written a bio yet."}
                </p>
              )}
              
              <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-gray-500">
                <span className="flex flex-col items-center">
                  <span className="font-semibold text-gray-800 text-lg">{userPosts.length}</span>
                  <span>Posts</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User's Posts Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center justify-center md:justify-start">
          <Globe size={20} className="mr-2 text-blue-500" />
          Your Travel Diaries
        </h2>
        
        {postsLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : userPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit3 size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No posts yet</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-4">
              Share your first travel experience and start building your travel diary.
            </p>
            <button 
              onClick={() => window.location.href = '/post'}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Create Your First Post
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userPosts.map((post) => (
              <div key={post._id || post.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                {post.media && post.media.length > 0 && post.media[0] ? (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.media[0]} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-48 bg-gray-100 items-center justify-center">
                      <Globe size={32} className="text-gray-400" />
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <Globe size={32} className="text-gray-400" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 truncate">{post.title || "Untitled Post"}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.description || post.content || "No description available"}
                  </p>
                  {post.location && (
                    <div className="flex items-center text-gray-500 text-xs mb-3">
                      <MapPin size={14} className="mr-1" />
                      <span className="truncate">{post.location}</span>
                    </div>
                  )}
                  {post.createdAt && (
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={14} className="mr-1" />
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-3 text-gray-500">
                      <button className="flex items-center hover:text-red-500 transition-colors">
                        <Heart size={16} className="mr-1" />
                        <span className="text-xs">{post.likes || post.likesCount || 0}</span>
                      </button>
                      <button className="flex items-center hover:text-blue-500 transition-colors">
                        <MessageCircle size={16} className="mr-1" />
                        <span className="text-xs">{post.comments || post.commentsCount || 0}</span>
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}