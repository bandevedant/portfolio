import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Mentored 10+ students at college as a Student Guide'},
  {  text: 'Secretary at E-Cell IIIT Jabalpur', },
  {  text: '1st Prize in Nukkad Natak Competition at BITS Hyderabad Annual Cultural Fest', },
  {  text: 'Solved 300+problems across all platforms like LeetCode,CodeForces', }
];

const Acomplishments = () => (
  <Section>
     <SectionDivider/>
      <br/>
      <br/>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum >{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
