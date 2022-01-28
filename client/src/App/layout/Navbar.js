// Packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledHeader>
      <StyledLink to="/" className="logo">
        Mailer
      </StyledLink>

      <div className="links">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/signup">Signup</StyledLink>
        <StyledLink to="/signin">Signin</StyledLink>
      </div>
    </StyledHeader>
  );
};

export default Navbar;

const StyledHeader = styled.nav`
  height: 80px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 2rem;
    color: #000;
    font-weight: 700px;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 10px;
  font-weight: 700px;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
