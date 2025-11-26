import React, { useState } from "react";

export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (email === "hire-me@anshumat.org" && pass === "HireMe@2025") {
      setLoggedIn(true);
    } else alert("Wrong credentials!");
  };

  return (

  <div className="min-h-screen flex">
      <div className="flex-1 bg-gradient-to-br from-purple-500 to-blue-500 text-white flex flex-col justify-center p-16">
        <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
        <p className="text-lg">Log in to access the admin panel and manage your coupons. First-time demo login: hire-me@anshumat.org</p></div>
      <div className="flex-1 flex items-center justify-center bg-white p-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
          <div className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"onChange={e => setPass(e.target.value)}/>
            <button onClick={login} className="bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
