// // // // // import { useEffect, useState } from "react";
// // // // // import DiaryCard from "./DiaryCard";
// // // // // import { apiUrl } from "../App"; 
// // // // // export default function DiaryFeed() {
// // // // //   const [posts, setPosts] = useState([]);
// // // // //   const token = localStorage.getItem("token"); 

// // // // //   useEffect(() => {
// // // // //     const fetchPosts = async () => {
// // // // //       try {
// // // // //         const res = await fetch(`${apiUrl}/api/diary/`, {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${token}`,
// // // // //           },
// // // // //         });

// // // // //         if (!res.ok) {
// // // // //           throw new Error(`HTTP error! Status: ${res.status}`);
// // // // //         }

// // // // //         const data = await res.json();
// // // // //         setPosts(data);
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching posts:", err);
// // // // //       }
// // // // //     };

// // // // //     fetchPosts();
// // // // //   }, [token]);

// // // // //   return (
// // // // //     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // //       {posts.length > 0 ? (
// // // // //         posts.map((post) => <DiaryCard key={post._id} post={post} />)
// // // // //       ) : (
// // // // //         <p className="text-gray-500">No posts yet.</p>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // import { useEffect, useState } from "react";
// // // // import DiaryCard from "./DiaryCard";
// // // // import { apiUrl } from "../App";

// // // // export default function DiaryFeed() {
// // // //   const [posts, setPosts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchPosts = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const token = localStorage.getItem("token"); // fetch inside effect
// // // //         const res = await fetch(`${apiUrl}/api/diary/`, {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //         });

// // // //         if (!res.ok) {
// // // //           throw new Error(`HTTP error! Status: ${res.status}`);
// // // //         }

// // // //         const data = await res.json();
// // // //         setPosts(data); // triggers re-render, but effect won't run again
// // // //       } catch (err) {
// // // //         console.error("Error fetching posts:", err);
// // // //         setError("Failed to load posts.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchPosts();
// // // //   }, []); // empty dependency array → runs only once

// // // //   if (loading) return <p className="text-gray-400 text-center mt-10">Loading posts...</p>;
// // // //   if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

// // // //   return (
// // // //     <div className="p-4">
// // // //       <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
// // // //       {posts.length > 0 ? (
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // //           {posts.map((post) => (
// // // //             <DiaryCard key={post._id} post={post} />
// // // //           ))}
// // // //         </div>
// // // //       ) : (
// // // //         <p className="text-gray-500 text-center">No posts yet.</p>
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
// // //     let isMounted = true; 

// // //     const fetchPosts = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const res = await fetch(`${apiUrl}/api/diary/`, {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });

// // //         if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
// // //         const data = await res.json();

// // //         if (isMounted) setPosts(data); // only update state if component is still mounted
// // //       } catch (err) {
// // //         console.error("Error fetching posts:", err);
// // //         if (isMounted) setError("Failed to load posts.");
// // //       } finally {
// // //         if (isMounted) setLoading(false);
// // //       }
// // //     };

// // //     fetchPosts();

// // //     return () => {
// // //       isMounted = false; // cleanup
// // //     };
// // //   }, []); // runs once

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
// //       try {
// //         const token = localStorage.getItem("token");
// //         const res = await fetch(`${apiUrl}/api/diary/`, {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
// //         const data = await res.json();

// //         // ✅ Check response structure before setting state
// //         if (isMounted) {
// //           if (Array.isArray(data)) {
// //             setPosts(data);
// //           } else if (Array.isArray(data.posts)) {
// //             setPosts(data.posts);
// //           } else {
// //             setPosts([]);
// //           }
// //         }
// //       } catch (err) {
// //         console.error("Error fetching posts:", err);
// //         if (isMounted) setError("Failed to load posts.");
// //       } finally {
// //         if (isMounted) setLoading(false);
// //       }
// //     };

// //     fetchPosts();

// //     return () => {
// //       isMounted = false;
// //     };
// //   }, []); // ✅ no dependency → fetch runs only once

// //   if (loading) return <p className="text-gray-400 text-center mt-10">Loading posts...</p>;
// //   if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
// //       {posts.length > 0 ? (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {posts.map((post) => (
// //             <DiaryCard key={post._id || post.id} post={post} />
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
//   }, []);

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






import { useEffect, useState, useRef } from "react";
import DiaryCard from "./DiaryCard";
import { apiUrl } from "../App";

export default function DiaryFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Prevent multiple API calls
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Authentication required");
          setLoading(false);
          return;
        }

        const res = await fetch(`${apiUrl}/api/diary/`, {
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        });

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Failed to fetch posts: ${res.status} - ${errorText}`);
        }

        const data = await res.json();
        console.log("API Response:", data); // Debug log

        // Handle different response structures
        let postsData = [];
        if (Array.isArray(data)) {
          postsData = data;
        } else if (data.posts && Array.isArray(data.posts)) {
          postsData = data.posts;
        } else if (data.data && Array.isArray(data.data)) {
          postsData = data.data;
        } else if (data.diaries && Array.isArray(data.diaries)) {
          postsData = data.diaries;
        }

        setPosts(postsData);
        
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.message || "Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // Cleanup function
    return () => {
      hasFetched.current = false;
    };
  }, []);

  if (loading) return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    </div>
  );

  if (error) return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Diary Feed</h2>
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-500 text-2xl">⚠️</span>
        </div>
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Diary Feed</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </span>
      </div>
      
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <DiaryCard key={post._id || post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-gray-200">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📝</span>
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No posts yet</h3>
          <p className="text-gray-500 mb-6">Be the first to share your travel experience!</p>
          <button 
            onClick={() => window.location.href = '/post'}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Create First Post
          </button>
        </div>
      )}
    </div>
  );
}