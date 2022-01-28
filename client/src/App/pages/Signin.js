// Packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Button from "../components/Button";
import ButtonOutlined from "../components/ButtonOutlined";

// Assets
import SigninSvg from "../assets/signin.svg";

const Signin = () => {
  return (
    <StyledSignin>
      <div className="container">
        <div className="img">
          <img src={SigninSvg} alt="signinSvg" />
        </div>
        <div className="details">
          <h1>Signin</h1>
          <StyledInput type="email" placeholder="Enter Email" />
          <StyledInput type="password" placeholder="Enter Password" />
          <div className="btn">
            <Button title="Signin" />
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
