// // import DiaryFeed from "../components/DiaryFeed";

// // export default function Feed() {
// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-semibold mb-4">Travel Feed 🌍</h2>
// //       <DiaryFeed />
// //     </div>
// //   );
// // }




// import { useEffect, useState } from "react";
// import DiaryFeed from "../components/DiaryFeed";

// export const apiUrl = "https://travel-diary-bduv.onrender.com";

// export default function Feed() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch posts from backend
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(`${apiUrl}/api/diary`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Travel Feed 🌍</h2>

//       {loading ? (
//         <p className="text-gray-500">Loading posts...</p>
//       ) : posts.length === 0 ? (
//         <p className="text-gray-500">No posts yet. Be the first one!</p>
//       ) : (
//         <div className="grid  gap-6">
//           {posts.map((post) => (
//             <DiaryFeed key={post._id} post={post} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }








import { useEffect, useState } from "react";
import DiaryCard from "../components/DiaryCard"; // Import DiaryCard instead of DiaryFeed
import { apiUrl } from "../App";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/diary`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        
        // Handle different response formats
        const postsArray = Array.isArray(data) ? data : 
                          (Array.isArray(data.posts) ? data.posts : []);
        setPosts(postsArray);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Travel Feed 🌍</h2>

      {loading ? (
        <p className="text-gray-500">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500">No posts yet. Be the first one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <DiaryCard key={post._id || post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}