import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {


  return (
      <Section id="about"> 
        <SectionDivider/>
        <br/>
        <br/>
        <SectionTitle>About</SectionTitle>
        <SectionText>I am a highly enthusiast and a keen problem solver in the domain of
          web development with fluency in various frameworks such as NodeJs and
          ExpressJs in backend and ReactJs in frontend .
        </SectionText>
      </Section>

        
  );
};

export default Timeline;
