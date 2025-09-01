// // import { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { useNavigate, Link } from "react-router-dom";

// // export default function Register() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [err, setErr] = useState("");
// //   const { register } = useAuth();
// //   const navigate = useNavigate();

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     setErr("");
// //     try {
// //       await register({ name, email, password });
// //       navigate("/feed");
// //     } catch (error) {
// //       setErr(error?.response?.data?.message || "Signup failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-[70vh] grid place-items-center p-4">
// //       <form onSubmit={onSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow">
// //         <h1 className="text-2xl font-semibold mb-4 text-center">Signup</h1>
// //         {err && <p className="mb-3 text-red-600">{err}</p>}
// //         <input className="w-full border rounded-md p-3 mb-3" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
// //         <input className="w-full border rounded-md p-3 mb-3" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
// //         <input className="w-full border rounded-md p-3 mb-4" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
// //         <button className="w-full bg-black text-white py-3 rounded-md">Create account</button>
// //         <p className="mt-3 text-center text-sm">Already have an account? <Link to="/login" className="underline">Login</Link></p>
// //       </form>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import { apiUrl } from "../App"; // ✅ import backend URL

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const { login } = useAuth(); // ✅ after signup, directly login user
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setErr("");

//     try {
//       const res = await fetch(`${apiUrl}/api/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data?.message || "Signup failed");
//       }

//       // ✅ After successful signup, log the user in with token
//       login(data.token, data.user);
//       navigate("/login");
//     } catch (error) {
//       setErr(error.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="min-h-[70vh] grid place-items-center p-4">
//       <form
//         onSubmit={onSubmit}
//         className="w-full max-w-md bg-white p-6 rounded-xl shadow"
//       >
//         <h1 className="text-2xl font-semibold mb-4 text-center">Signup</h1>
//         {err && <p className="mb-3 text-red-600">{err}</p>}
//         <input
//           className="w-full border rounded-md p-3 mb-3"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
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
//           autoComplete="new-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
//         >
//           Create account
//         </button>
//         <p className="mt-3 text-center text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="underline">
//             Login
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

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const res = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Signup failed");

      // ✅ update context + localStorage
      await login(data.token, data.user);

      navigate("/login");
    } catch (error) {
      setErr(error.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-[70vh] grid place-items-center p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Signup</h1>
        {err && <p className="mb-3 text-red-600">{err}</p>}
        <input
          className="w-full border rounded-md p-3 mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Create account
        </button>
        <p className="mt-3 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
