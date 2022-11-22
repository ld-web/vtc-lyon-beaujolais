import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import links, { MenuSection } from "../../data/links";

const LinksNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;

    li {
      display: flex;
      position: relative;
    }

    li:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.green};
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
        background-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.bg};
      }
    }
  }

  .has-submenu {
    ul {
      position: absolute;
      left: 0;
      top: 42px;
      min-width: 300px;
      opacity: 0;
      pointer-events: none;
      background-color: ${({ theme }) => theme.colors.bg};
      border: 1px solid ${({ theme }) => theme.colors.green};
      padding: 0;
      flex-direction: column;
      transition: opacity 0.2s ease-in-out;

      li {
        display: block;
        border: none;

        &:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.colors.green};
        }
      }
    }

    &:hover ul {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export default function NavDesktop() {
  return (
    <LinksNav>
      <ul>
        {links.map(
          (link) =>
            link.sections.includes(MenuSection.Header) && (
              <li
                key={link.to}
                className={link.subLinks !== undefined ? "has-submenu" : ""}
              >
                <Link to={link.to} activeClassName="active">
                  {link.label}
                </Link>
                {link.subLinks && (
                  <ul>
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.to}>
                        <Link to={subLink.to} activeClassName="active">
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
        )}
      </ul>
    </LinksNav>
  );
}
