// Packages
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { setUser } from "../redux/actions/user.action";

// Components
import Button from "../components/Button";

// Assets
import SigninSvg from "../assets/signin.svg";
import { API } from "../utils/api";

const Signin = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Name, email and password are required");
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/auth/signin`, {
        email,
        password,
      });
      console.log(data);
      dispatch(
        setUser({ name: data.name, email: data.email, token: data.token })
      );
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  if (loading) {
    return <StyledLoading>Loading...</StyledLoading>;
  }
  return (
    <StyledSignin>
      <div className="container">
        <div className="img">
          <img src={SigninSvg} alt="signinSvg" />
        </div>
        <div className="details">
          <h1>Signin</h1>
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
            <Button onClick={onSubmit} title="Signin" />
          </div>
        </div>
      </div>
    </StyledSignin>
  );
};

export default Signin;

const StyledSignin = styled.div`
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
const StyledLoading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
