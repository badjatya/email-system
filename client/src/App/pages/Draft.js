// Packages
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Card from "../components/Card";

// Assets / Utils
import { API } from "../utils/api";

const Draft = () => {
  // State
  const [mails, setMails] = useState([]);
  const token = useSelector((state) => state.user.user.token);
  const navigate = useNavigate();

  // Fetch mails
  const fetchMails = async () => {
    const { data } = await axios.get(`${API}/user/mail/draft`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMails(data.mails);
  };

  useEffect(() => {
    fetchMails();
  }, []);

  const clickHandler = (mail) => {
    navigate(`/sent/${mail.id}`, { state: mail });
  };

  return (
    <StyledDraft>
      {mails &&
        mails.map((mail) => (
          <Card onClick={() => clickHandler(mail)} mail={mail} key={mail._id} />
        ))}
    </StyledDraft>
  );
};

export default Draft;

const StyledDraft = styled.div`
  width: 100%;
  margin-top: 100px;
`;
