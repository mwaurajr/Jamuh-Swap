import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
    setNameError("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailError("");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // validate form data
    let formIsValid = true;
    if (!name.trim()) {
      setNameError("Name is required");
      formIsValid = false;
    }
    if (!email.trim()) {
      setEmailError("Email is required");
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      formIsValid = false;
    }
    if (!password.trim()) {
      setPasswordError("Password is required");
      formIsValid = false;
    }

    // submit form data if valid
    if (formIsValid) {
      const data = {
        user: {
          name: name,
          email: email,
          password: password
        }
      };

      fetch("http://127.0.0.1:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  }

  return (
    <div className="signup">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          {nameError && <div className="error">{nameError}</div>}
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <div className="error">{emailError}</div>}
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {passwordError && <div className="error">{passwordError}</div>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
