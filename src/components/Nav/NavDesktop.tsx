import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import links from "../../data/links";

const LinksNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;

    li {
      display: flex;
    }

    li:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.main};
    }

    li a {
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.main};
      padding: 0.3rem 0.6rem;
      transition: all 200ms;
      font-weight: 300;

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
