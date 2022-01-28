// Packages
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Button from "../components/Button";

// Assets / Utils
import ComposeSvg from "../assets/compose.svg";
import { API } from "../utils/api";

const Compose = () => {
  // State
  const [toEmail, setToEmail] = useState("architj240@gmail.com");
  const [emailSubject, setEmailSubject] = useState("From front end");
  const [emailText, setEmailText] = useState("Testing with react");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const token = useSelector((state) => state.user.user.token);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!toEmail || !emailSubject || !emailText) {
      setError("toEmail, emailSubject and emailText are required");
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/user/mail/send`, {
        toEmail,
        emailSubject,
        emailText,
        token,
      });
      console.log(data);

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <StyledLoading>Loading...</StyledLoading>;
  }

  return (
    <StyledCompose>
      <div className="container">
        <div className="img">
          <img src={ComposeSvg} alt="composeSvg" />
        </div>
        <div className="details">
          <h1>Compose mail</h1>
          <StyledInput
            type="email"
            onChange={(e) => setToEmail(e.target.value)}
            value={toEmail}
            placeholder="Email to"
            required
          />
          <StyledInput
            type="text"
            onChange={(e) => setEmailSubject(e.target.value)}
            value={emailSubject}
            placeholder="Enter Subject"
            required
          />
          <StyledInput
            type="text"
            onChange={(e) => setEmailText(e.target.value)}
            value={emailText}
            placeholder="Enter message"
            required
          />
          <div className="btn">
            <Button onClick={onSubmit} title="Send email" />
          </div>
        </div>
      </div>
    </StyledCompose>
  );
};

export default Compose;

const StyledCompose = styled.div`
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
