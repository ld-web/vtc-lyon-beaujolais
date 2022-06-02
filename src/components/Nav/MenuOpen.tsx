import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface MenuOpenProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const OpenButton = styled.button`
  width: ${({ theme }) => theme.sizes.menuButton};
  height: ${({ theme }) => theme.sizes.menuButton};
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  div {
    width: ${({ theme }) => theme.sizes.menuButton};
    height: 3px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export default function MenuOpen({ onClick }: MenuOpenProps) {
  return (
    <OpenButton onClick={onClick} aria-label="Ouvrir le menu">
      <div></div>
      <div></div>
      <div></div>
    </OpenButton>
  );
}
