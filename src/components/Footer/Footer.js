import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section>
      <FooterWrapper>
        <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="8380806436">8380806436</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vedantbande2002@gmail.com" target="_blank">vedantbande2002@gmail.com</LinkItem>
        </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Made with ❤️ in 2023 !</Slogan>
          </CompanyContainer>
      <SocialContainer>
          <SocialIcons href="https://github.com/bandevedant/" target="_blank">
          <AiFillGithub style={{ fontSize: "3rem" }} />
        </SocialIcons>
        
        <SocialIcons
          href="https://www.linkedin.com/in/vedantjain2002/" target="_blank"
        >
          <AiFillLinkedin style={{ fontSize: "3rem" }} />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/bandeji_?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
          <AiFillInstagram style={{ fontSize: "3rem" }} />
        </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
