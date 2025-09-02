// // // // import { useState, useEffect } from "react";

// // // // export default function Profile() {
// // // //   const [user, setUser] = useState(null);

// // // //   useEffect(() => {
// // // //     // Fetch user profile later with JWT
// // // //     setUser({
// // // //       name: "John Doe",
// // // //       email: "john@example.com",
// // // //       bio: "Traveler & blogger 🌍",
// // // //     });
// // // //   }, []);

// // // //   if (!user) return <p>Loading profile...</p>;

// // // //   return (
// // // //     <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
// // // //       <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
// // // //       <p className="text-gray-500 mb-2">{user.email}</p>
// // // //       <p className="text-gray-700">{user.bio}</p>
// // // //       {/* Later: Add edit form + list user’s posts */}
// // // //     </div>
// // // //   );
// // // // }


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
// // //         setUser(data);
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProfile();
// // //   }, []);

// // //   if (loading) return <p>Loading profile...</p>;
// // //   if (error) return <p className="text-red-500">{error}</p>;
// // //   if (!user) return <p>No user data available</p>;

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
// // //       <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
// // //       <p className="text-gray-500 mb-2">{user.email}</p>
// // //       <p className="text-gray-700">{user.bio}</p>
// // //       {/* Later: Add edit form + list user’s posts */}
// // //     </div>
// // //   );
// // // }





// src/pages/UserProfile.jsx
import { useState, useEffect } from "react";
import { apiUrl } from "../App";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        // Adjust depending on your backend response
        setUser(data.user || data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading profile...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!user) return <p className="text-center mt-6">No user data available</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-2">{user.name || "N/A"}</h2>
      <p className="text-gray-500 mb-2">{user.email || "N/A"}</p>
      <p className="text-gray-700">{user.bio || "No bio available"}</p>

      {/* Placeholder: Edit form + list user’s posts */}
      <div className="mt-4 border-t pt-4">
        <p className="text-gray-500 italic">Edit profile & view your posts here.</p>
      </div>
    </div>
  );
}




// import { useState, useEffect } from "react";
// import { apiUrl } from "../App";

// export default function UserProfile() {
//   const [user, setUser] = useState({
//     name: "Travel Blogger",
//     email: "example@travel.com",
//     bio: "Traveler & blogger 🌍",
//   });
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     bio: "",
//   });

//   useEffect(() => {
//     const fetchProfileAndPosts = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         // Fetch user profile
//         const resUser = await fetch(`${apiUrl}/api/auth/me`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!resUser.ok) throw new Error("Failed to fetch profile");
//         const userData = await resUser.json();
//         setUser(userData || user);
//         setFormData({
//           name: userData?.name || user.name,
//           email: userData?.email || user.email,
//           bio: userData?.bio || user.bio,
//         });

//         // Fetch user posts
//         const resPosts = await fetch(`${apiUrl}/api/diaries/`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!resPosts.ok) throw new Error("Failed to fetch posts");
//         const postsData = await resPosts.json();
//         setPosts(postsData || []);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileAndPosts();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`${apiUrl}/api/auth/update`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!res.ok) throw new Error("Failed to update profile");
//       const updatedUser = await res.json();
//       setUser(updatedUser);
//       setEditMode(false);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p className="text-center mt-6">Loading profile...</p>;
//   if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <div className="bg-white shadow-md rounded-xl p-6 mb-6">
//         {editMode ? (
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//               placeholder="Email"
//             />
//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//               placeholder="Bio"
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setEditMode(false)}
//                 className="px-4 py-2 rounded-md bg-gray-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 rounded-md bg-blue-500 text-white"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
//             <p className="text-gray-500 mb-2">{user.email}</p>
//             <p className="text-gray-700 mb-4">{user.bio}</p>
//             <button
//               onClick={() => setEditMode(true)}
//               className="px-4 py-2 rounded-md bg-blue-500 text-white"
//             >
//               Edit Profile
//             </button>
//           </div>
//         )}
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-4">My Posts</h3>
//         {posts.length === 0 ? (
//           <p>No posts yet.</p>
//         ) : (
//           <div className="space-y-4">
//             {posts.map((post) => (
//               <div
//                 key={post._id}
//                 className="border rounded-md p-4 bg-gray-50 shadow-sm"
//               >
//                 <h4 className="font-semibold">{post.title}</h4>
//                 <p className="text-gray-700">{post.content}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { apiUrl } from "../App";

// export default function UserProfile() {
//   const [user, setUser] = useState({
//     name: "Travel Blogger",
//     email: "travel@example.com",
//     bio: "Traveler & blogger 🌍",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", bio: "" });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`${apiUrl}/api/auth/me`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) throw new Error("Failed to fetch profile");

//         const data = await res.json();
//         setUser({
//           name: data.name ,
//           email: data.email,
//           bio: data.bio || "Traveler & blogger 🌍",
//         });
//         setFormData({
//           name: data.name || "Travel Blogger",
//           email: data.email || "travel@example.com",
//           bio: data.bio || "Traveler & blogger 🌍",
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`${apiUrl}/api/auth/update`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error("Failed to update profile");

//       const updatedUser = await res.json();
//       setUser(updatedUser);
//       setEditing(false);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading profile...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6">
//       {editing ? (
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             placeholder="Name"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             placeholder="Email"
//           />
//           <textarea
//             name="bio"
//             value={formData.bio}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             placeholder="Bio"
//           />
//           <div className="flex justify-between">
//             <button
//               onClick={handleSave}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setEditing(false)}
//               className="bg-gray-300 px-4 py-2 rounded-md"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
//           <p className="text-gray-500 mb-2">{user.email}</p>
//           <p className="text-gray-700 mb-4">{user.bio}</p>
//           <button
//             onClick={() => setEditing(true)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Edit Profile
//           </button>
//         </>
//       )}

//       {/* Placeholder: User posts will be displayed here later */}
//       <div className="mt-6 border-t pt-4">
//         <p className="text-gray-500 italic">Your posts will appear here.</p>
//       </div>
//     </div>
//   );
// }
