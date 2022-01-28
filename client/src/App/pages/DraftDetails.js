// Packages
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// Assets
import SentMailSvg from "../assets/sentMail.svg";

const DraftDetails = () => {
  const location = useLocation();
  return (
    <StyledDraftDetails>
      <div className="container">
        <div className="img">
          <img src={SentMailSvg} alt="aboutSvg" />
        </div>
        <div className="details">
          <h1>Draft Mail details</h1>
          <p>
            <span>To:</span> {location.state.toEmail}
          </p>
          <p>
            <span>Subject:</span> {location.state.emailSubject}
          </p>
          <p>
            <span>Message:</span> {location.state.emailText}
          </p>
        </div>
      </div>
    </StyledDraftDetails>
  );
};

export default DraftDetails;

const StyledDraftDetails = styled.div`
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

  span {
    font-weight: 700;
    color: ${(props) => props.theme.gray};
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
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
