import React from "react";
import styled from "styled-components";

// Icons
import { FaRegStar, FaStar } from "react-icons/fa";

const Card = (props) => {
  const { mail } = props;
  return (
    <StyledCard {...props}>
      <div className="icon">
        {mail.favorite ? (
          <FaStar className="icon-full" />
        ) : (
          <FaRegStar className="icon-half" />
        )}
      </div>
      <p>{mail.toEmail}</p>
      <p>{mail.emailSubject}</p>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  border: 1px solid ${(props) => props.theme.primary};
  padding: 10px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon-full {
    background: #ffcd3c;
  }

  .icon-half {
    color: #ffcd3c;
  }

  &:hover {
    background: ${(props) => props.theme.primaryLight};
  }
`;
