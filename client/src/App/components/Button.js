// Packages
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton {...props}>{props.title}</StyledButton>;
};

export default Button;

const StyledButton = styled.span`
  padding: 10px 30px;
  border-radius: 30px;
  margin: 10px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  display: ${(props) => (props.width ? "block" : "inline")};

  color: #fff;
  background: ${(props) => props.theme.primary};

  &:hover {
    background: ${(props) => props.theme.primaryLight};
  }
`;
