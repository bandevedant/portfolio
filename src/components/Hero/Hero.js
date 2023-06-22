import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <div>
    <Section nopadding row>
      <LeftSection>
        <SectionTitle>
          Hey there !
          <br />
          Vedant Bande here !
        </SectionTitle>
        <SectionText>
          I am a tech enthusiast and a problem solver 
          with my interests in MERN stack who loves to solve real world problems and work
          together as a team player.In past I have also mentored students in college.
        </SectionText>
        <Button
          onClick={() => (window.location = "https://drive.google.com/file/d/1XL7pZ4il0SMWg4qP55cCG79Uhzro-JeR/view?usp=drive_link", "_blank")}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
