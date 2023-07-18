import React from "react";
const BackgroundAnimation = () => (
  <div>
    <img
      style={{
        height: "90vh",
        width: "40vw",
        borderRadius: "50%",
        objectFit: "cover",
        '@media (maxWidth: 768px)': {
          height: '50vh',
          width: '50vw',
        },
      
      }}
      
      src="assets/linkedin-profile.jpg"
    ></img>
  </div>
  
);

export default BackgroundAnimation;
