import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../../models/user";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const loginButton = async (e) => {
    e.preventDefault();
    try {
      if (!password || !username) {
        console.log("username dan password harus di isi");
        return;
      }

      const dataUser = users.find((user) => {
        return user.username === username && user.password === password;
      });

      if (!dataUser) {
        alert("username atau password salah");
        return;
      }

      localStorage.setItem("user", JSON.stringify(dataUser));

      setUser(dataUser);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-500 to-slate-950 px-4">
      <form
        action=""
        className="w-full max-w-md flex flex-col gap-5 p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl"
      >
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-white">Login</h1>
          <p className="text-gray-300 text-sm mt-1">Masuk ke akun Anda</p>
        </div>

        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none border border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 transition-all"
        />

        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg bg-white/90 outline-none border border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-500/30 transition-all"
        />

        <div className="flex gap-3 w-full">
          <Link
            to={"/"}
            className="py-3 px-5 rounded-lg bg-white hover:bg-slate-200 active:scale-95 text-blue-700 font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30"
          >
            Kembali
          </Link>
          <button
            type="submit"
            onClick={loginButton}
            className="flex-1 py-3 rounded-lg bg-blue-500 hover:bg-blue-700 active:scale-95 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
