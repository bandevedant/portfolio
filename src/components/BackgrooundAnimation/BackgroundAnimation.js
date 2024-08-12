import React from "react";
import styled from "styled-components";

// Create a styled component for the image
const ResponsiveImage = styled.img`
  height: 90vh;
  width: 40vw;
  border-radius: 50%;
  object-fit: cover;

  // Apply media queries for responsiveness
  @media (max-width: 768px) {
    height: 50vh;
    width: 50vw;
  }

  @media (max-width: 480px) {
    height: 40vh;
    width: 80vw;
  }
`;

const BackgroundAnimation = () => (
  <div>
    <ResponsiveImage src="assets/linkedin-profile.jpg" />
  </div>
);

export default BackgroundAnimation;
