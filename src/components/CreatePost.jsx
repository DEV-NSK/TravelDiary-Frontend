// // // // // import { useState } from "react";

// // // // // export default function CreatePost({ onPostCreated }) {
// // // // //   const [title, setTitle] = useState("");
// // // // //   const [description, setDescription] = useState("");
// // // // //   const [location, setLocation] = useState("");
// // // // //   const [files, setFiles] = useState([]);
// // // // //   const token = localStorage.getItem("token");

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
// // // // //       const res = await fetch("http://localhost:5000/api/diary/", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${token}`,
// // // // //         },
// // // // //         body: formData,
// // // // //       });

// // // // //       const data = await res.json();
// // // // //       if (res.ok) {
// // // // //         alert("Post created!");
// // // // //         onPostCreated(); // refresh feed
// // // // //         setTitle("");
// // // // //         setDescription("");
// // // // //         setLocation("");
// // // // //         setFiles([]);
// // // // //       } else {
// // // // //         alert(data.msg || "Failed to create post");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error("Error creating post:", err);
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
// // // // import { apiUrl } from "../App"; 
// // // // import Home from "../pages/Home"

// // // // export default function CreatePost({ onPostCreated }) {
// // // //   const [title, setTitle] = useState("");
// // // //   const [description, setDescription] = useState("");
// // // //   const [location, setLocation] = useState("");
// // // //   const [files, setFiles] = useState([]);
// // // //   const token = localStorage.getItem("token");  

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
// // // //         onPostCreated?.(); 
// // // //         setTitle("");
// // // //         setDescription("");
// // // //         setLocation("");
// // // //         setFiles([]);
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
// // // import { useNavigate } from "react-router-dom";  // ✅ import navigate
// // // import { apiUrl } from "../App"; 

// // // export default function CreatePost({ onPostCreated }) {
// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [location, setLocation] = useState("");
// // //   const [files, setFiles] = useState([]);
// // //   const token = localStorage.getItem("token");  
// // //   const navigate = useNavigate();  // ✅ initialize navigate

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

// // //       const data = await res.json();
// // //       if (res.ok) {
// // //         alert("Post created!");
// // //         onPostCreated?.(); 

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
// // //       alert("Something went wrong while creating the post.");
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

// //       const data = await res.json();
// //       if (res.ok) {
// //         alert("Post created!");

// //         // ✅ reset form
// //         setTitle("");
// //         setDescription("");
// //         setLocation("");
// //         setFiles([]);

// //         // ✅ navigate to home
// //         navigate("/");
// //       } else {
// //         alert(data.msg || "Failed to create post");
// //       }
// //     } catch (err) {
// //       console.error("Error creating post:", err);
// //       alert("Something went wrong while creating the post.");
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

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [files, setFiles] = useState([]);
//   const token = localStorage.getItem("token");  
//   const navigate = useNavigate();  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

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

//       // ✅ handle both JSON and non-JSON errors safely
//       let data;
//       const contentType = res.headers.get("content-type") || "";
//       if (contentType.includes("application/json")) {
//         data = await res.json();
//       } else {
//         const text = await res.text();
//         throw new Error(text || `Unexpected response: ${res.status} ${res.statusText}`);
//       }

//       if (res.ok) {
//         alert("Post created!");

//         // ✅ reset form
//         setTitle("");
//         setDescription("");
//         setLocation("");
//         setFiles([]);

//         // ✅ navigate to home
//         navigate("/");
//       } else {
//         alert(data.msg || "Failed to create post");
//       }
//     } catch (err) {
//       console.error("Error creating post:", err);
//       alert(err.message || "Something went wrong while creating the post.");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-4 rounded-xl shadow-md space-y-3"
//     >
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full border rounded p-2"
//         required
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="w-full border rounded p-2"
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         className="w-full border rounded p-2"
//       />
//       <input
//         type="file"
//         multiple
//         onChange={(e) => setFiles(e.target.files)}
//         className="w-full"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Post
//       </button>
//     </form>
//   );
// }




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../App"; 

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState([]);
  const token = localStorage.getItem("token");  
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        alert("Post created!");
        setTitle("");
        setDescription("");
        setLocation("");
        setFiles([]);
        navigate("/");
      } else {
        alert(data.msg || "Failed to create post");
      }
    } catch (err) {
      console.error("Error creating post:", err);
      alert(err.message || "Something went wrong while creating the post.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md space-y-3"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border rounded p-2"
      />
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Post
      </button>
    </form>
  );
}
