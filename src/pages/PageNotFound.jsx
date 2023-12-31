import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageNotFound({ changeMetaArr }) {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    changeMetaArr("title", "PageNotFound");
  }, [changeMetaArr]);

  useEffect(() => {
    const array = [
      "/assets/Error 404 Illustrations 2.0/PNG/14.png",
      "/assets/Error 404 Illustrations 2.0/PNG/5.png",
      "/assets/Error 404 Illustrations 2.0/PNG/24.png",
      "/assets/Error 404 Illustrations 2.0/PNG/23.png",
      "/assets/Error 404 Illustrations 2.0/PNG/4.png",
    ];

    // Preload all images
    const preloadedImages = [];
    for (const imageSrc of array) {
      const img = new Image();
      img.src = imageSrc;
      preloadedImages.push(img);
    }

    // Choose a random image from the preloaded set
    const randomIndex = Math.floor(Math.random() * preloadedImages.length);
    setRandomImage(preloadedImages[randomIndex].src);
  }, []);

  return (
    <NotFoundWrapper>
      <ErrorCTA>
        <img
          src={randomImage}
          width="320"
          alt="AkioNotFound"
          className="error-image"
        />
        <HomeLink to="/"></HomeLink>
      </ErrorCTA>
      <ErrorDetails>
        <h2 className="error-code">404</h2>
        <p className="error-status">Page Not Found</p>
        <h1 className="error-message">Looks like you are lost...</h1>
      </ErrorDetails>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  padding: 10px 10px;
  gap: 20px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const ErrorCTA = styled.div`
  position: relative;
  margin-bottom: 3rem;
  margin-top: 1rem;
  width: 350px;
  overflow: hidden;
  border-radius: 10px;
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }
  .error-image {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media screen and (max-width: 380px) {
    width: 100%;
  }
`;

const HomeLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 210px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 32px;
  font-family: "Acme", sans-serif;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 380px) {
    width: 100%;
    font-size: 16px;
  }
`;

const ErrorDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  gap: 1rem;
  white-space: pre-wrap;
  .error-code {
    font-size: 100px;
    font-family: "Acme", sans-serif;
    letter-spacing: 0px;
    color: white;
  }
  .error-status {
    font-size: 65px;
    font-family: "Acme", sans-serif;
    letter-spacing: -5px;
    color: #ccc;
  }
  .error-message {
    color: gray;
  }
  @media screen and (max-width: 1024px) {
    .error-code {
      font-size: 80px;
    }
    .error-status {
      font-size: 70px;
    }
    .error-message {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 600px) {
    .error-code {
      font-size: 60px;
    }
    .error-status {
      font-size: 40px;
    }
    .error-message {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 380px) {
  }
`;

export default PageNotFound;
