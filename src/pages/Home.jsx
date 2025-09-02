// export default function Home() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="text-3xl font-bold">Welcome to Travel Diary ✈️</h1>
//     </div>
//   );
// }



// Home.jsx
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth(); // get user from context

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {!user ? (
        // Before login
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to TravelDiary ✈️
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Capture your travel memories, plan your trips, and share your adventures.
          </p>
          <Link
            to="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Get Started Now
          </Link>
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      ) : (
        // After login
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Hello {user.name || "Traveler"} 👋
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Ready for your next journey? Explore beautiful destinations,
            document your travel stories, and relive your adventures.
          </p>
          <Link
            to="/my-trips"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            Start Exploring
          </Link>
        </div>
      )}
    </div>
  );
}
