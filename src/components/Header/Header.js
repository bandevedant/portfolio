import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <DiCssdeck size="3rem" style={{ marginBottom: "20px" }} />{" "}
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink> Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink> About Us</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/VedantBandeJain">
          <AiFillGithub style={{ fontSize: "3rem" }} />
        </SocialIcons>
        <SocialIcons
          href="www.linkedin.com/in/vedantjain2002"
        >
          <AiFillLinkedin style={{ fontSize: "3rem" }} />
        </SocialIcons>
        <SocialIcons href="https://github.com">
          <AiFillInstagram style={{ fontSize: "3rem" }} />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
