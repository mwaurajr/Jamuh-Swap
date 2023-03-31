import React, { useState } from "react";
import './Signup.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [bioError, setBioError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

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

  function handleAddressChange(event) {
    setAddress(event.target.value);
    setAddressError("");
  }

  function handleBioChange(event) {
    setBio(event.target.value);
    setBioError("");
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
    setAgeError("");
  }

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
    setPhoneNumberError("");
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
    if (!address.trim()) {
      setAddressError("Address is required");
      formIsValid = false;
    }
    if (!bio.trim()) {
      setBioError("Bio is required");
      formIsValid = false;
    }
    if (!age.trim()) {
      setAgeError("Age is required");
      formIsValid = false;
    }
    if (!phoneNumber.trim()) {
      setPhoneNumberError("Phone number is required");
      formIsValid = false;
    }

    // submit form data if valid
    if (formIsValid) {
      const data = {
        user: {
          name: name,
          email: email,
          password: password,
          address: address,
          bio: bio,
          age: age,
          phoneNumber: phoneNumber
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
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <div className="error">{passwordError}</div>}

      <label htmlFor="address">Address:</label>
      <input type="text" value={address} onChange={handleAddressChange} />
      {addressError && <div className="error">{addressError}</div>}

      <label htmlFor="bio">Bio:</label>
      <textarea value={bio} onChange={handleBioChange} />
      {bioError && <div className="error">{bioError}</div>}

      <label htmlFor="age">Age:</label>
      <input type="number" value={age} onChange={handleAgeChange} />
      {ageError && <div className="error">{ageError}</div>}

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        pattern="[0-9]{10}"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      {phoneNumberError && (
        <div className="error">{phoneNumberError}</div>
      )}

      <button type="submit">Sign Up</button>
    </form>
  </div>
</div>
  )}
  export default Signup;