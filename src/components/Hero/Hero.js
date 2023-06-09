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
          Hii...
          <br />
          Vedant Bande here !
        </SectionTitle>
        <SectionText>
          {/* I am a highly enthusiast and a keen problem solver in the domain of
          web development with fluency in various frameworks such as NodeJs and
          ExpressJs in backend and ReactJs in frontend and also have a pecular
          experience with work of REST APIs and willing to work with people over
          projects to get a one step ahead in development. */}
        </SectionText>
        <Button onClick={()=>window.location='https://github.com/VedantBandeJain'}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
