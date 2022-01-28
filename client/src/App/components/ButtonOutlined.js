// Packages
import React from "react";
import styled from "styled-components";

const ButtonOutlined = (props) => {
  return <StyledButton {...props}>{props.title}</StyledButton>;
};

export default ButtonOutlined;

const StyledButton = styled.span`
  padding: 10px 30px;
  border-radius: 30px;
  margin: 10px;
  text-decoration: none;
  text-align: center;

  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.primary};
    color: #fff;
  }
`;
