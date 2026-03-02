import React, { useState } from "react";
import "./ALogin.css";
import { useAppContext } from "../../../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);

        // attach token to future requests
        axios.defaults.headers.common["Authorization"] = data.token;

        toast.success("Login successful");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message );
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Admin Login</h1>
        <p className="login-subtitle">
          Enter your login credentials to access admin panel.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;