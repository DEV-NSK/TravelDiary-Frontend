// // // // // // // import { useState } from "react";

// // // // // // // export default function CreatePost({ onPostCreated }) {
// // // // // // //   const [title, setTitle] = useState("");
// // // // // // //   const [description, setDescription] = useState("");
// // // // // // //   const [location, setLocation] = useState("");
// // // // // // //   const [files, setFiles] = useState([]);
// // // // // // //   const token = localStorage.getItem("token");

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     const formData = new FormData();
// // // // // // //     formData.append("title", title);
// // // // // // //     formData.append("description", description);
// // // // // // //     formData.append("location", location);
// // // // // // //     for (let i = 0; i < files.length; i++) {
// // // // // // //       formData.append("media", files[i]);
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const res = await fetch("http://localhost:5000/api/diary/", {
// // // // // // //         method: "POST",
// // // // // // //         headers: {
// // // // // // //           Authorization: `Bearer ${token}`,
// // // // // // //         },
// // // // // // //         body: formData,
// // // // // // //       });

// // // // // // //       const data = await res.json();
// // // // // // //       if (res.ok) {
// // // // // // //         alert("Post created!");
// // // // // // //         onPostCreated(); // refresh feed
// // // // // // //         setTitle("");
// // // // // // //         setDescription("");
// // // // // // //         setLocation("");
// // // // // // //         setFiles([]);
// // // // // // //       } else {
// // // // // // //         alert(data.msg || "Failed to create post");
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Error creating post:", err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <form
// // // // // // //       onSubmit={handleSubmit}
// // // // // // //       className="bg-white p-4 rounded-xl shadow-md space-y-3"
// // // // // // //     >
// // // // // // //       <input
// // // // // // //         type="text"
// // // // // // //         placeholder="Title"
// // // // // // //         value={title}
// // // // // // //         onChange={(e) => setTitle(e.target.value)}
// // // // // // //         className="w-full border rounded p-2"
// // // // // // //         required
// // // // // // //       />
// // // // // // //       <textarea
// // // // // // //         placeholder="Description"
// // // // // // //         value={description}
// // // // // // //         onChange={(e) => setDescription(e.target.value)}
// // // // // // //         className="w-full border rounded p-2"
// // // // // // //       />
// // // // // // //       <input
// // // // // // //         type="text"
// // // // // // //         placeholder="Location"
// // // // // // //         value={location}
// // // // // // //         onChange={(e) => setLocation(e.target.value)}
// // // // // // //         className="w-full border rounded p-2"
// // // // // // //       />
// // // // // // //       <input
// // // // // // //         type="file"
// // // // // // //         multiple
// // // // // // //         onChange={(e) => setFiles(e.target.files)}
// // // // // // //         className="w-full"
// // // // // // //       />
// // // // // // //       <button
// // // // // // //         type="submit"
// // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // //       >
// // // // // // //         Post
// // // // // // //       </button>
// // // // // // //     </form>
// // // // // // //   );
// // // // // // // }




// // // // // // import { useState } from "react";
// // // // // // import { apiUrl } from "../App"; 
// // // // // // import Home from "../pages/Home"

// // // // // // export default function CreatePost({ onPostCreated }) {
// // // // // //   const [title, setTitle] = useState("");
// // // // // //   const [description, setDescription] = useState("");
// // // // // //   const [location, setLocation] = useState("");
// // // // // //   const [files, setFiles] = useState([]);
// // // // // //   const token = localStorage.getItem("token");  

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();

// // // // // //     const formData = new FormData();
// // // // // //     formData.append("title", title);
// // // // // //     formData.append("description", description);
// // // // // //     formData.append("location", location);
// // // // // //     for (let i = 0; i < files.length; i++) {
// // // // // //       formData.append("media", files[i]);
// // // // // //     }

// // // // // //     try {
// // // // // //       const res = await fetch(`${apiUrl}/api/diary/`, {
// // // // // //         method: "POST",
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${token}`,
// // // // // //         },
// // // // // //         body: formData,
// // // // // //       });

// // // // // //       const data = await res.json();
// // // // // //       if (res.ok) {
// // // // // //         alert("Post created!");
// // // // // //         onPostCreated?.(); 
// // // // // //         setTitle("");
// // // // // //         setDescription("");
// // // // // //         setLocation("");
// // // // // //         setFiles([]);
// // // // // //       } else {
// // // // // //         alert(data.msg || "Failed to create post");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.error("Error creating post:", err);
// // // // // //       alert("Something went wrong while creating the post.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <form
// // // // // //       onSubmit={handleSubmit}
// // // // // //       className="bg-white p-4 rounded-xl shadow-md space-y-3"
// // // // // //     >
// // // // // //       <input
// // // // // //         type="text"
// // // // // //         placeholder="Title"
// // // // // //         value={title}
// // // // // //         onChange={(e) => setTitle(e.target.value)}
// // // // // //         className="w-full border rounded p-2"
// // // // // //         required
// // // // // //       />
// // // // // //       <textarea
// // // // // //         placeholder="Description"
// // // // // //         value={description}
// // // // // //         onChange={(e) => setDescription(e.target.value)}
// // // // // //         className="w-full border rounded p-2"
// // // // // //       />
// // // // // //       <input
// // // // // //         type="text"
// // // // // //         placeholder="Location"
// // // // // //         value={location}
// // // // // //         onChange={(e) => setLocation(e.target.value)}
// // // // // //         className="w-full border rounded p-2"
// // // // // //       />
// // // // // //       <input
// // // // // //         type="file"
// // // // // //         multiple
// // // // // //         onChange={(e) => setFiles(e.target.files)}
// // // // // //         className="w-full"
// // // // // //       />
// // // // // //       <button
// // // // // //         type="submit"
// // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // //       >
// // // // // //         Post
// // // // // //       </button>
// // // // // //     </form>
// // // // // //   );
  
// // // // // // }




// // // // // import { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";  // ✅ import navigate
// // // // // import { apiUrl } from "../App"; 

// // // // // export default function CreatePost({ onPostCreated }) {
// // // // //   const [title, setTitle] = useState("");
// // // // //   const [description, setDescription] = useState("");
// // // // //   const [location, setLocation] = useState("");
// // // // //   const [files, setFiles] = useState([]);
// // // // //   const token = localStorage.getItem("token");  
// // // // //   const navigate = useNavigate();  // ✅ initialize navigate

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     const formData = new FormData();
// // // // //     formData.append("title", title);
// // // // //     formData.append("description", description);
// // // // //     formData.append("location", location);
// // // // //     for (let i = 0; i < files.length; i++) {
// // // // //       formData.append("media", files[i]);
// // // // //     }

// // // // //     try {
// // // // //       const res = await fetch(`${apiUrl}/api/diary/`, {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //         body: formData,
// // // // //       });

// // // // //       const data = await res.json();
// // // // //       if (res.ok) {
// // // // //         alert("Post created!");
// // // // //         onPostCreated?.(); 

// // // // //         // ✅ reset form
// // // // //         setTitle("");
// // // // //         setDescription("");
// // // // //         setLocation("");
// // // // //         setFiles([]);

// // // // //         // ✅ navigate to home
// // // // //         navigate("/");
// // // // //       } else {
// // // // //         alert(data.msg || "Failed to create post");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error("Error creating post:", err);
// // // // //       alert("Something went wrong while creating the post.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <form
// // // // //       onSubmit={handleSubmit}
// // // // //       className="bg-white p-4 rounded-xl shadow-md space-y-3"
// // // // //     >
// // // // //       <input
// // // // //         type="text"
// // // // //         placeholder="Title"
// // // // //         value={title}
// // // // //         onChange={(e) => setTitle(e.target.value)}
// // // // //         className="w-full border rounded p-2"
// // // // //         required
// // // // //       />
// // // // //       <textarea
// // // // //         placeholder="Description"
// // // // //         value={description}
// // // // //         onChange={(e) => setDescription(e.target.value)}
// // // // //         className="w-full border rounded p-2"
// // // // //       />
// // // // //       <input
// // // // //         type="text"
// // // // //         placeholder="Location"
// // // // //         value={location}
// // // // //         onChange={(e) => setLocation(e.target.value)}
// // // // //         className="w-full border rounded p-2"
// // // // //       />
// // // // //       <input
// // // // //         type="file"
// // // // //         multiple
// // // // //         onChange={(e) => setFiles(e.target.files)}
// // // // //         className="w-full"
// // // // //       />
// // // // //       <button
// // // // //         type="submit"
// // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // //       >
// // // // //         Post
// // // // //       </button>
// // // // //     </form>
// // // // //   );
// // // // // }






// // // // import { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { apiUrl } from "../App"; 

// // // // export default function CreatePost() {
// // // //   const [title, setTitle] = useState("");
// // // //   const [description, setDescription] = useState("");
// // // //   const [location, setLocation] = useState("");
// // // //   const [files, setFiles] = useState([]);
// // // //   const token = localStorage.getItem("token");  
// // // //   const navigate = useNavigate();  

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const formData = new FormData();
// // // //     formData.append("title", title);
// // // //     formData.append("description", description);
// // // //     formData.append("location", location);
// // // //     for (let i = 0; i < files.length; i++) {
// // // //       formData.append("media", files[i]);
// // // //     }

// // // //     try {
// // // //       const res = await fetch(`${apiUrl}/api/diary/`, {
// // // //         method: "POST",
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //         body: formData,
// // // //       });

// // // //       const data = await res.json();
// // // //       if (res.ok) {
// // // //         alert("Post created!");

// // // //         // ✅ reset form
// // // //         setTitle("");
// // // //         setDescription("");
// // // //         setLocation("");
// // // //         setFiles([]);

// // // //         // ✅ navigate to home
// // // //         navigate("/");
// // // //       } else {
// // // //         alert(data.msg || "Failed to create post");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Error creating post:", err);
// // // //       alert("Something went wrong while creating the post.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form
// // // //       onSubmit={handleSubmit}
// // // //       className="bg-white p-4 rounded-xl shadow-md space-y-3"
// // // //     >
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Title"
// // // //         value={title}
// // // //         onChange={(e) => setTitle(e.target.value)}
// // // //         className="w-full border rounded p-2"
// // // //         required
// // // //       />
// // // //       <textarea
// // // //         placeholder="Description"
// // // //         value={description}
// // // //         onChange={(e) => setDescription(e.target.value)}
// // // //         className="w-full border rounded p-2"
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Location"
// // // //         value={location}
// // // //         onChange={(e) => setLocation(e.target.value)}
// // // //         className="w-full border rounded p-2"
// // // //       />
// // // //       <input
// // // //         type="file"
// // // //         multiple
// // // //         onChange={(e) => setFiles(e.target.files)}
// // // //         className="w-full"
// // // //       />
// // // //       <button
// // // //         type="submit"
// // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // //       >
// // // //         Post
// // // //       </button>
// // // //     </form>
// // // //   );
// // // // }





// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { apiUrl } from "../App"; 

// // // export default function CreatePost() {
// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [location, setLocation] = useState("");
// // //   const [files, setFiles] = useState([]);
// // //   const token = localStorage.getItem("token");  
// // //   const navigate = useNavigate();  

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const formData = new FormData();
// // //     formData.append("title", title);
// // //     formData.append("description", description);
// // //     formData.append("location", location);
// // //     for (let i = 0; i < files.length; i++) {
// // //       formData.append("media", files[i]);
// // //     }

// // //     try {
// // //       const res = await fetch(`${apiUrl}/api/diary/`, {
// // //         method: "POST",
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: formData,
// // //       });

// // //       // ✅ handle both JSON and non-JSON errors safely
// // //       let data;
// // //       const contentType = res.headers.get("content-type") || "";
// // //       if (contentType.includes("application/json")) {
// // //         data = await res.json();
// // //       } else {
// // //         const text = await res.text();
// // //         throw new Error(text || `Unexpected response: ${res.status} ${res.statusText}`);
// // //       }

// // //       if (res.ok) {
// // //         alert("Post created!");

// // //         // ✅ reset form
// // //         setTitle("");
// // //         setDescription("");
// // //         setLocation("");
// // //         setFiles([]);

// // //         // ✅ navigate to home
// // //         navigate("/");
// // //       } else {
// // //         alert(data.msg || "Failed to create post");
// // //       }
// // //     } catch (err) {
// // //       console.error("Error creating post:", err);
// // //       alert(err.message || "Something went wrong while creating the post.");
// // //     }
// // //   };

// // //   return (
// // //     <form
// // //       onSubmit={handleSubmit}
// // //       className="bg-white p-4 rounded-xl shadow-md space-y-3"
// // //     >
// // //       <input
// // //         type="text"
// // //         placeholder="Title"
// // //         value={title}
// // //         onChange={(e) => setTitle(e.target.value)}
// // //         className="w-full border rounded p-2"
// // //         required
// // //       />
// // //       <textarea
// // //         placeholder="Description"
// // //         value={description}
// // //         onChange={(e) => setDescription(e.target.value)}
// // //         className="w-full border rounded p-2"
// // //       />
// // //       <input
// // //         type="text"
// // //         placeholder="Location"
// // //         value={location}
// // //         onChange={(e) => setLocation(e.target.value)}
// // //         className="w-full border rounded p-2"
// // //       />
// // //       <input
// // //         type="file"
// // //         multiple
// // //         onChange={(e) => setFiles(e.target.files)}
// // //         className="w-full"
// // //       />
// // //       <button
// // //         type="submit"
// // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // //       >
// // //         Post
// // //       </button>
// // //     </form>
// // //   );
// // // }




// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { apiUrl } from "../App"; 

// // export default function CreatePost() {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [location, setLocation] = useState("");
// //   const [files, setFiles] = useState([]);
// //   const token = localStorage.getItem("token");  
// //   const navigate = useNavigate();  

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("description", description);
// //     formData.append("location", location);
// //     for (let i = 0; i < files.length; i++) {
// //       formData.append("media", files[i]);
// //     }

// //     try {
// //       const res = await fetch(`${apiUrl}/api/diary/`, {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: formData,
// //       });

// //       let data;
// //       const contentType = res.headers.get("content-type") || "";
// //       if (contentType.includes("application/json")) {
// //         data = await res.json();
// //       } else {
// //         const text = await res.text();
// //         throw new Error(text || `Unexpected response: ${res.status} ${res.statusText}`);
// //       }

// //       if (res.ok) {
// //         alert("Post created!");
// //         setTitle("");
// //         setDescription("");
// //         setLocation("");
// //         setFiles([]);
// //         navigate("/");
// //       } else {
// //         alert(data.msg || "Failed to create post");
// //       }
// //     } catch (err) {
// //       console.error("Error creating post:", err);
// //       alert(err.message || "Something went wrong while creating the post.");
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="bg-white p-4 rounded-xl shadow-md space-y-3"
// //     >
// //       <input
// //         type="text"
// //         placeholder="Title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //         className="w-full border rounded p-2"
// //         required
// //       />
// //       <textarea
// //         placeholder="Description"
// //         value={description}
// //         onChange={(e) => setDescription(e.target.value)}
// //         className="w-full border rounded p-2"
// //       />
// //       <input
// //         type="text"
// //         placeholder="Location"
// //         value={location}
// //         onChange={(e) => setLocation(e.target.value)}
// //         className="w-full border rounded p-2"
// //       />
// //       <input
// //         type="file"
// //         multiple
// //         onChange={(e) => setFiles(e.target.files)}
// //         className="w-full"
// //       />
// //       <button
// //         type="submit"
// //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //       >
// //         Post
// //       </button>
// //     </form>
// //   );
// // }











// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiUrl } from "../App";
// import { MapPin, Image, FileText, Send, ArrowLeft, Plus, X } from "lucide-react";

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [files, setFiles] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const token = localStorage.getItem("token");  
//   const navigate = useNavigate();  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("location", location);
//     for (let i = 0; i < files.length; i++) {
//       formData.append("media", files[i]);
//     }

//     try {
//       const res = await fetch(`${apiUrl}/api/diary/`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       let data;
//       const contentType = res.headers.get("content-type") || "";
//       if (contentType.includes("application/json")) {
//         data = await res.json();
//       } else {
//         const text = await res.text();
//         throw new Error(text || `Unexpected response: ${res.status} ${res.statusText}`);
//       }

//       if (res.ok) {
//         alert("Post created successfully!");
//         setTitle("");
//         setDescription("");
//         setLocation("");
//         setFiles([]);
//         navigate("/feed");
//       } else {
//         alert(data.msg || "Failed to create post");
//       }
//     } catch (err) {
//       console.error("Error creating post:", err);
//       alert(err.message || "Something went wrong while creating the post.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles([...files, ...selectedFiles]);
//   };

//   const removeFile = (index) => {
//     const newFiles = [...files];
//     newFiles.splice(index, 1);
//     setFiles(newFiles);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-indigo-50/20 py-8 px-4">
//       <div className="max-w-2xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center mb-8">
//           <button 
//             onClick={() => navigate(-1)}
//             className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
//           >
//             <ArrowLeft size={20} />
//           </button>
//           <h1 className="text-2xl font-semibold text-gray-800">Create Travel Entry</h1>
//         </div>

//         {/* Form Container */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Title Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                 <FileText size={16} className="mr-2 text-blue-500" />
//                 Title
//               </label>
//               <input
//                 type="text"
//                 placeholder="Give your travel experience a title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 required
//               />
//             </div>

//             {/* Location Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                 <MapPin size={16} className="mr-2 text-blue-500" />
//                 Location
//               </label>
//               <input
//                 type="text"
//                 placeholder="Where did you go? (e.g., Paris, France)"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               />
//             </div>

//             {/* Description Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Description
//               </label>
//               <textarea
//                 placeholder="Share your travel experience, memories, and highlights..."
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows={6}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               />
//             </div>

//             {/* File Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                 <Image size={16} className="mr-2 text-blue-500" />
//                 Photos
//               </label>
              
//               {/* File Input */}
//               <label className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
//                 <div className="text-center">
//                   <div className="p-3 rounded-full bg-blue-50 inline-flex mb-3">
//                     <Plus size={20} className="text-blue-500" />
//                   </div>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-medium text-blue-500">Click to upload</span> or drag and drop
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//                 <input 
//                   type="file" 
//                   multiple 
//                   onChange={handleFileChange}
//                   className="hidden" 
//                   accept="image/*"
//                 />
//               </label>

//               {/* File Previews */}
//               {files.length > 0 && (
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-600 mb-2">{files.length} file(s) selected</p>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                     {files.map((file, index) => (
//                       <div key={index} className="relative group">
//                         <img 
//                           src={URL.createObjectURL(file)} 
//                           alt={`Preview ${index + 1}`}
//                           className="w-full h-24 object-cover rounded-lg"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeFile(index)}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
//                         >
//                           <X size={14} />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center font-medium disabled:opacity-70"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                     Publishing...
//                   </>
//                 ) : (
//                   <>
//                     <Send size={18} className="mr-2" />
//                     Publish Travel Entry
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Tips */}
//         <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
//           <h3 className="text-sm font-medium text-blue-800 mb-2">Tips for a great travel entry:</h3>
//           <ul className="text-xs text-blue-600 space-y-1">
//             <li>• Add specific details about what made this place special</li>
//             <li>• Include your personal experiences and feelings</li>
//             <li>• Mention any hidden gems or local recommendations</li>
//             <li>• High-quality photos help bring your story to life</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }









import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../App";
import { MapPin, Image, FileText, Send, ArrowLeft, Plus, X } from "lucide-react";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  
  return (
    <div className="fixed top-4 right-4 z-50 animate-fadeIn">
      <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between max-w-sm`}>
        <span className="text-sm font-medium">{message}</span>
        <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const token = localStorage.getItem("token");  
  const navigate = useNavigate();  

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      showToast('Please add a title for your travel entry', 'error');
      return;
    }
    
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    for (let i = 0; i < files.length; i++) {
      formData.append("media", files[i]);
    }

    try {
      const res = await fetch(`${apiUrl}/api/diary/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      let data;
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(text || `Unexpected response: ${res.status} ${res.statusText}`);
      }

      if (res.ok) {
        showToast("Travel entry created successfully!");
        setTimeout(() => {
          setTitle("");
          setDescription("");
          setLocation("");
          setFiles([]);
          navigate("/feed");
        }, 1500);
      } else {
        showToast(data.msg || "Failed to create post", 'error');
      }
    } catch (err) {
      console.error("Error creating post:", err);
      showToast(err.message || "Something went wrong while creating the post.", 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 5) {
      showToast('Maximum 5 images allowed', 'error');
      return;
    }
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-indigo-50/20 py-6 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Toast Notification */}
        {toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ show: false, message: '', type: '' })} />}
        
        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {/* Header */}
          <div className="flex items-center mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Create Travel Entry</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FileText size={16} className="mr-2 text-blue-500" />
                Title
              </label>
              <input
                type="text"
                placeholder="Give your travel experience a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>

            {/* Location Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <MapPin size={16} className="mr-2 text-blue-500" />
                Location
              </label>
              <input
                type="text"
                placeholder="Where did you go? (e.g., Paris, France)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Share your travel experience, memories, and highlights..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Image size={16} className="mr-2 text-blue-500" />
                Photos {files.length > 0 && `(${files.length}/5)`}
              </label>
              
              {/* File Input */}
              <label className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
                <div className="text-center">
                  <div className="p-2 rounded-full bg-blue-50 inline-flex mb-2">
                    <Plus size={16} className="text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-blue-500">Click to upload</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5 images</p>
                </div>
                <input 
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  className="hidden" 
                  accept="image/*"
                />
              </label>

              {/* File Previews */}
              {files.length > 0 && (
                <div className="mt-3">
                  <div className="grid grid-cols-3 gap-2">
                    {files.map((file, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={URL.createObjectURL(file)} 
                          alt={`Preview ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center font-medium disabled:opacity-70 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Publishing...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Publish Entry
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Tips - Moved inside form container to reduce height */}
        <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
          <h3 className="text-xs font-medium text-blue-800 mb-1">Tips for a great travel entry:</h3>
          <ul className="text-xs text-blue-600">
            <li className="truncate">• Add specific details about what made this place special</li>
            <li className="truncate">• Include your personal experiences and feelings</li>
            <li className="truncate">• Mention any hidden gems or local recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}