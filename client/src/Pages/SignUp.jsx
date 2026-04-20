import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-2xl"
          id="username"/>
        <input type="text"
          placeholder="email"
          className="border p-3 rounded-2xl"
          id="email"/>
        <input type="password"
          placeholder="password"
          className="border p-3 rounded-2xl"
          id="password"/>

        <button className="bg-slate-600 text-white p-3 rounded-2xl hover:opacity-90">Sign Up</button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <Link to="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </div>
    </div>
  );
}
