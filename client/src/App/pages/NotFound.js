import React from "react";
import styled from "styled-components";
import NotFoundSvg from "../assets/notFound.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="container">
        <img src={NotFoundSvg} alt="NotFoundSvg" />
        <Button as={Link} title="Home" to="/" />
      </div>
    </StyledNotFound>
  );
};

export default NotFound;

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);

  .container {
    width: 500px;
    display: flex;
    flex-direction: column;
  }
`;
