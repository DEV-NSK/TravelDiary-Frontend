// // import { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate, Link } from "react-router-dom";

// // export default function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [err, setErr] = useState("");
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     setErr("");
// //     try {
// //       await login(email, password);
// //       navigate("/feed");
// //     } catch (error) {
// //       setErr(error?.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-[70vh] grid place-items-center p-4">
// //       <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
// //         <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
// //         {err && <p className="mb-3 text-red-600">{err}</p>}
// //         <input className="w-full border rounded-md p-3 mb-3" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
// //         <input className="w-full border rounded-md p-3 mb-4" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
// //         <button className="w-full bg-black text-white py-3 rounded-md">Login</button>
// //         <p className="mt-3 text-center text-sm">New here? <Link to="/register" className="underline">Create an account</Link></p>
// //       </form>
// //     </div>
// //   );
// // }





// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import { apiUrl } from "../App"; // ✅ import backend URL

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setErr("");

//     try {
//       const res = await fetch(`${apiUrl}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data?.message || "Login failed");
//       }

//       // ✅ Save token to context + localStorage
//       login(data.token, data.user);
//       navigate("/");
//     } catch (error) {
//       setErr(error.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-[70vh] grid place-items-center p-4">
//       <form
//         onSubmit={onSubmit}
//         className="w-full max-w-md bg-white p-6 rounded-xl shadow"
//       >
//         <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
//         {err && <p className="mb-3 text-red-600">{err}</p>}
//         <input
//           className="w-full border rounded-md p-3 mb-3"
//           placeholder="Email"
//           type="email"
//           autoComplete="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           className="w-full border rounded-md p-3 mb-4"
//           placeholder="Password"
//           type="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
//         >
//           Login
//         </button>
//         <p className="mt-3 text-center text-sm">
//           New here?{" "}
//           <Link to="/register" className="underline">
//             Create an account
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }





import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { apiUrl } from "../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Login failed");

      // ✅ update context + localStorage
      await login(data.token, data.user);

      navigate("/");
    } catch (error) {
      setErr(error.message || "Login failed");
    }
  };

  return (
    <div className="min-h-[70vh] grid place-items-center p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        {err && <p className="mb-3 text-red-600">{err}</p>}
        <input
          className="w-full border rounded-md p-3 mb-3"
          placeholder="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border rounded-md p-3 mb-4"
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Login
        </button>
        <p className="mt-3 text-center text-sm">
          New here?{" "}
          <Link to="/register" className="underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
