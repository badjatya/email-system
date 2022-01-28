// Packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Button from "../components/Button";
import ButtonOutlined from "../components/ButtonOutlined";

// Assets
import AboutSvg from "../assets/About.svg";

const About = () => {
  return (
    <StyledAbout>
      <div className="container">
        <div className="img">
          <img src={AboutSvg} alt="homeSvg" />
        </div>
        <div className="details">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            impedit ex expedita eum eaque quam nam ab. Suscipit, perspiciatis
            minus eos ad, accusantium eveniet et laboriosam, hic culpa unde
            nisi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            repellendus commodi totam temporibus ex ullam aut officia quibusdam
            pariatur architecto numquam voluptas quaerat fugit corporis, et illo
            nostrum ad voluptate odio veritatis sapiente, libero illum? Corporis
            debitis minima fugit vero, ducimus cumque tempore minus, in
            temporibus doloribus quibusdam beatae? Sed!
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div`
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
