import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="tech">
      <SectionDivider/>
      <br/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>I love to explore new technologies and feels quite interesting.</SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>Experience with <br/>HTML5 ,   CSS , <br/>Javascript , <br/> React.Js.</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>Hands-On Experience with<br/> Node.Js , Express.Js and Mongodb , REST Api .</ListParagraph>
          </ListContainer>
        </ListItem>
        {/* <ListItem>
          <DiZend size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>Experience with React.</ListParagraph>
          </ListContainer>
        </ListItem> */}
      </List>
    </Section>
  </div>
);

export default Technologies;
