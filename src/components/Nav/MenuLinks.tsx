import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import links, { MenuSection } from "../../data/links";
import MenuClose from "./MenuClose";
import NavLink from "./NavLink";

interface LinksProps {
  readonly isOpen: boolean;
}

interface MenuProps extends LinksProps {
  readonly closeMenuFn: MouseEventHandler;
}

const LinksNav = styled.nav<LinksProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.82);
  transform: ${({ isOpen }) => (isOpen ? "translate(0)" : "translate(100%)")};
  transition: transform 300ms;
  z-index: 999;

  ul {
    list-style-type: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    text-transform: uppercase;
    padding: 0;

    a {
      text-decoration: none;
      color: white;
      font-size: 1.4rem;

      &:hover,
      &.active {
        text-decoration: underline;
      }
    }
  }
`;

export default function MenuLinks({ isOpen, closeMenuFn }: MenuProps) {
  return (
    <LinksNav isOpen={isOpen}>
      <ul>
        <li>
          <MenuClose onClick={closeMenuFn} />
        </li>
        {links.map(
          (link) =>
            link.sections.includes(MenuSection.Header) && (
              <li key={link.to}>
                <NavLink to={link.to} onClick={closeMenuFn}>
                  {link.label}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </LinksNav>
  );
}
