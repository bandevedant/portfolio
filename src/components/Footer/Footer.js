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
          <LinkItem href="vedantbande2002@gmail.com">vedantbande2002@gmail.com</LinkItem>
        </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Bass Chal raha he !!!</Slogan>
          </CompanyContainer>
          <SocialIcons>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
