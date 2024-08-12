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
        <Link legacyBehavior href="/">
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <DiCssdeck size="3rem" style={{ marginBottom: "20px" }} />{" "}
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2 >
        <li >
          <Link legacyBehavior href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#tech">
            <NavLink> Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#about">
            <NavLink> About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
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
      </Div3>
    </Container>
  </div>
);

export default Header;
