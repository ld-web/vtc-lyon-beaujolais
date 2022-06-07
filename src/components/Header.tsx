import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import NavMobile from "./Nav/NavMobile";
import NavDesktop from "./Nav/NavDesktop";
import { Desktop, Mobile } from "../utils/rwd";
import { Link } from "gatsby";

const Container = styled.header`
  position: sticky;
  top: 0px;
  z-index: 30;
  padding: 0rem 2rem;
  background-color: ${({ theme }) => theme.colors.headerBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 9px 3px #80808047;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export default function Header() {
  const logo_dimension = 110;

  return (
    <Container>
      <Link to="/">
        <StaticImage
          src="../images/logo_transparent.jpg"
          alt="Antoine & Adeline - Chauffeur privé"
          placeholder="blurred"
          width={logo_dimension}
          height={logo_dimension}
        />
      </Link>
      <Mobile>
        <NavMobile />
      </Mobile>
      <Desktop>
        <NavDesktop />
      </Desktop>
    </Container>
  );
}
