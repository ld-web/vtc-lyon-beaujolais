import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import links, { MenuSection } from "../data/links";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBg};
  padding: 1.5rem 0.5rem;
  font-weight: 400;
  margin-top: 3.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 3rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterMenu = styled.ul`
  list-style-type: none;
  text-align: left;
  padding: 0;

  li {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.main};
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const FooterInfos = styled.div`
  text-align: right;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper className="content">
        <FooterMenu>
          {links.map(
            (link) =>
              link.sections.includes(MenuSection.Footer) && (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              )
          )}
        </FooterMenu>
        <FooterInfos>
          <StaticImage
            src="../images/logo_fond_clair.jpg"
            alt="Title"
            placeholder="blurred"
            width={100}
            height={100}
          />
          <br />
          <strong>Antoine & Adeline</strong>
          <br />
          Transport - Taxi - VTC
          <br />
          antoineadeline.vtc@gmail.com
          <br />
          0659324617
        </FooterInfos>
      </ContentWrapper>
    </FooterContainer>
  );
}
