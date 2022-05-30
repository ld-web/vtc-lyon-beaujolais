import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface MenuCloseProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CloseButton = styled.button`
  width: ${({ theme }) => theme.sizes.menuButton};
  height: ${({ theme }) => theme.sizes.menuButton};
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;

  div {
    width: ${({ theme }) => theme.sizes.menuButton};
    position: absolute;
    height: 6px;
    border-radius: 5px;
    background-color: white;
  }

  div:first-child {
    transform: rotate(45deg);
  }

  div:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

export default function MenuClose({ onClick }: MenuCloseProps) {
  return (
    <CloseButton onClick={onClick}>
      <div></div>
      <div></div>
    </CloseButton>
  );
}
