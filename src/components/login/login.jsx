import React, { useState } from "react";
import "./login.css";

import user_icon from "../imgss/person.png";
import email_icon from "../imgss/email.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = async () => {
    const userData = { name, email };

    try {
      const response = await fetch(
        "https://655db2319f1e1093c599b502.mockapi.io/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="img" />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="img" />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            handleFormSubmit();
          }}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default SignUp;
