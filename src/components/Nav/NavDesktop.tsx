import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import links from "../../data/links";

const LinksNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 0.6rem;
    margin-bottom: 0;

    li a {
      text-transform: uppercase;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.main};
      padding: 0.3rem 0.6rem;
      transition: all 200ms;
      font-weight: 400;

      &.active,
      &:hover {
        background-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.bg};
      }
    }
  }
`;

export default function NavDesktop() {
  return (
    <LinksNav>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} activeClassName="active">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </LinksNav>
  );
}
