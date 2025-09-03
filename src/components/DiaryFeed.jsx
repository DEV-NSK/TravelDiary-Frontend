// // // // import { useEffect, useState } from "react";
// // // // import DiaryCard from "./DiaryCard";
// // // // import { apiUrl } from "../App"; 
// // // // export default function DiaryFeed() {
// // // //   const [posts, setPosts] = useState([]);
// // // //   const token = localStorage.getItem("token"); 

// // // //   useEffect(() => {
// // // //     const fetchPosts = async () => {
// // // //       try {
// // // //         const res = await fetch(`${apiUrl}/api/diary/`, {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //         });

// // // //         if (!res.ok) {
// // // //           throw new Error(`HTTP error! Status: ${res.status}`);
// // // //         }

// // // //         const data = await res.json();
// // // //         setPosts(data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching posts:", err);
// // // //       }
// // // //     };

// // // //     fetchPosts();
// // // //   }, [token]);

// // // //   return (
// // // //     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // //       {posts.length > 0 ? (
// // // //         posts.map((post) => <DiaryCard key={post._id} post={post} />)
// // // //       ) : (
// // // //         <p className="text-gray-500">No posts yet.</p>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }




// // // import { useEffect, useState } from "react";
// // // import DiaryCard from "./DiaryCard";
// // // import { apiUrl } from "../App";

// // // export default function DiaryFeed() {
// // //   const [posts, setPosts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchPosts = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const token = localStorage.getItem("token"); // fetch inside effect
// // //         const res = await fetch(`${apiUrl}/api/diary/`, {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });

// // //         if (!res.ok) {
// // //           throw new Error(`HTTP error! Status: ${res.status}`);
// // //         }

// // //         const data = await res.json();
// // //         setPosts(data); // triggers re-render, but effect won't run again
// // //       } catch (err) {
// // //         console.error("Error fetching posts:", err);
// // //         setError("Failed to load posts.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPosts();
// // //   }, []); // empty dependency array → runs only once

// // //   if (loading) return <p className="text-gray-400 text-center mt-10">Loading posts...</p>;
// // //   if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

// // //   return (
// // //     <div className="p-4">
// // //       <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
// // //       {posts.length > 0 ? (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //           {posts.map((post) => (
// // //             <DiaryCard key={post._id} post={post} />
// // //           ))}
// // //         </div>
// // //       ) : (
// // //         <p className="text-gray-500 text-center">No posts yet.</p>
// // //       )}
// // //     </div>
// // //   );
// // // }



// // import { useEffect, useState } from "react";
// // import DiaryCard from "./DiaryCard";
// // import { apiUrl } from "../App";

// // export default function DiaryFeed() {
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     let isMounted = true; 

// //     const fetchPosts = async () => {
// //       setLoading(true);
// //       try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch(`${apiUrl}/api/diary/`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
// //         const data = await res.json();

// //         if (isMounted) setPosts(data); // only update state if component is still mounted
// //       } catch (err) {
// //         console.error("Error fetching posts:", err);
// //         if (isMounted) setError("Failed to load posts.");
// //       } finally {
// //         if (isMounted) setLoading(false);
// //       }
// //     };

// //     fetchPosts();

// //     return () => {
// //       isMounted = false; // cleanup
// //     };
// //   }, []); // runs once

// //   if (loading) return <p className="text-gray-400 text-center mt-10">Loading posts...</p>;
// //   if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
// //       {posts.length > 0 ? (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {posts.map((post) => (
// //             <DiaryCard key={post._id} post={post} />
// //           ))}
// //         </div>
// //       ) : (
// //         <p className="text-gray-500 text-center">No posts yet.</p>
// //       )}
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";
// import DiaryCard from "./DiaryCard";
// import { apiUrl } from "../App";

// export default function DiaryFeed() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     const fetchPosts = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch(`${apiUrl}/api/diary/`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//         const data = await res.json();

//         // ✅ Check response structure before setting state
//         if (isMounted) {
//           if (Array.isArray(data)) {
//             setPosts(data);
//           } else if (Array.isArray(data.posts)) {
//             setPosts(data.posts);
//           } else {
//             setPosts([]);
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         if (isMounted) setError("Failed to load posts.");
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };

//     fetchPosts();

//     return () => {
//       isMounted = false;
//     };
//   }, []); // ✅ no dependency → fetch runs only once

//   if (loading) return <p className="text-gray-400 text-center mt-10">Loading posts...</p>;
//   if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
//       {posts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {posts.map((post) => (
//             <DiaryCard key={post._id || post.id} post={post} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center">No posts yet.</p>
//       )}
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import DiaryCard from "./DiaryCard";
import { apiUrl } from "../App";

export default function DiaryFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${apiUrl}/api/diary/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();

        if (isMounted) {
          if (Array.isArray(data)) {
            setPosts(data);
          } else if (Array.isArray(data.posts)) {
            setPosts(data.posts);
          } else {
            setPosts([]);
          }
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        if (isMounted) setError("Failed to load posts.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p className="text-gray-400 text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <DiaryCard key={post._id || post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No posts yet.</p>
      )}
    </div>
  );
}
