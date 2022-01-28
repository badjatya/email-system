// Packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import Button from "../components/Button";
import ButtonOutlined from "../components/ButtonOutlined";

// Assets
import HomeSvg from "../assets/Home.svg";

const Home = () => {
  const token = useSelector((state) => state.user.user.token);
  return (
    <StyledHome>
      <div className="container">
        <div className="details">
          <h1>Welcome to Mailer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            modi.
          </p>
          {token ? (
            <div className="btn">
              <Button as={Link} to="/compose" title="Compose email" />
            </div>
          ) : (
            <div className="btn">
              <Button as={Link} to="/signup" title="Signup" />
              <ButtonOutlined as={Link} to="/signin" title="Signin" />
            </div>
          )}
        </div>
        <div className="img">
          <img src={HomeSvg} alt="homeSvg" />
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
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
    font-size: 3rem;
    margin-bottom: 32px;
    color: ${(props) => props.theme.primary};
  }

  p {
    color: ${(props) => props.theme.gray};
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
