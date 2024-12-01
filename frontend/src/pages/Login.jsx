import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { api_base_url } from "../helper";
import image from "../images/authPageSide.png";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate to redirect

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(api_base_url + "/login", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pwd,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success === true) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", data.userId);

        setIsLoggedIn(true); // Update the isLoggedIn state

        // Redirect after successful login
        navigate("/"); // Navigate to the home page
      } else {
        console.error("Login failed:", data.message);
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    // If already logged in, navigate to home page
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/"); // Redirect to home page if already logged in
    }
  }, [navigate]);

  return (
    <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
      <div className="left w-[35%]">
        <img className="w-[200px]" src={logo} alt="Logo" />
        <form onSubmit={submitForm} className="w-full mt-[60px]" action="">
          <div className="inputBox">
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="inputBox">
            <input
              required
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              type="password"
              placeholder="Password"
            />
          </div>

          <p className="text-[gray]">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-[#00AEEF]">
              Sign Up
            </Link>
          </p>

          <p className="text-red-500 text-[14px] my-2">{error}</p>

          <button className="btnBlue w-full mt-[20px]">Login</button>
        </form>
      </div>
      <div className="right w-[55%]">
        <img className="h-[100vh] w-[100%] object-cover" src={image} alt="Side" />
      </div>
    </div>
  );
};

export default Login;
