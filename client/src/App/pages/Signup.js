// Packages
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Components
import Button from "../components/Button";

// Assets
import SignupSvg from "../assets/signup.svg";
import { API } from "../utils/api";

const Signup = () => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Name, email and password are required");
    }

    const user = { name, email, password };

    setLoading(true);
    try {
      const response = axios.post(`${API}/auth/signup`, user);
      const data = (await response).data;
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <StyledSignup>
      <div className="container">
        <div className="img">
          <img src={SignupSvg} alt="signupSvg" />
        </div>
        <div className="details">
          <h1>Signup</h1>
          <StyledInput
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Name"
            required
          />
          <StyledInput
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
            required
          />
          <StyledInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Password"
            required
          />
          <div className="btn">
            <Button onClick={onSubmit} title="Signup" />
          </div>
        </div>
      </div>
    </StyledSignup>
  );
};

export default Signup;

const StyledSignup = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .details {
    width: 45%;
  }

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 32px;
    color: ${(props) => props.theme.primary};
  }

  p {
    color: ${(props) => props.theme.gray};
    margin-bottom: 10px;
  }

  .btn {
    margin-top: 25px;
  }

  .img {
    /* width: 500px; */
    width: 45%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledInput = styled.input`
  background: transparent;
  padding: 10px 30px;
  border-radius: 30px;
  margin: 10px;
  display: block;
  width: 100%;

  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.gray};
  outline: none;

  &:focus {
    outline: none;
  }
`;
