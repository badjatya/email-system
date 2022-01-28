// Packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { removeUser } from "../redux/actions/user.action";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.user.token);
  return (
    <StyledHeader>
      <StyledLink to="/" className="logo">
        Mailer
      </StyledLink>

      <div className="links">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        {!token && <StyledLink to="/signup">Signup</StyledLink>}
        {!token && <StyledLink to="/signin">Signin</StyledLink>}
        {token && <StyledLink to="/compose">Compose</StyledLink>}
        {token && <StyledLink to="/sent">Sent</StyledLink>}
        {token && <StyledLink to="/draft">Draft</StyledLink>}
        {token && (
          <StyledLink onClick={() => dispatch(removeUser())} to="/signin">
            Signout
          </StyledLink>
        )}
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
    color: ${(props) => props.theme.primary};
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 10px;
  font-weight: 700px;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
