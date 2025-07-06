import React, { useState } from 'react';
import styles from './Login.module.css';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9290/api/auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("email", data.email);
        navigate("/DasBoard");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <div className={styles.loginLogo}>🌐</div>
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in</p>
        </div>

        <div className={styles.loginSocial}>
          <button className={styles.socialBtn}><FaGoogle /></button>
          <button className={styles.socialBtn}><FaApple /></button>
          <button className={styles.socialBtn}><FaFacebookF /></button>
        </div>

        <div className={styles.divider}>or</div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInput}
            value={user.email}
            required
          />

          <label>Password</label>
          <div className={styles.passwordField}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              value={user.password}
              required
            />
          </div>

          <button type="submit" className={styles.loginBtn}>Sign in</button>
        </form>

        <div className={styles.signupLink}>
          Don't have an account? <a href="http://localhost:5173">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
