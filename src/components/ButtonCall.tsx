import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const ButtonCallContainer = styled.div`
  a {
    display: inline-block;
    padding: 0.8rem 1.4rem;
    color: ${({ theme }) => theme.colors.darkblue};
    background-color: ${({ theme }) => theme.colors.bg};
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export default function ButtonCall() {
  return (
    <ButtonCallContainer>
      <Link to="tel:0659324617">Contact</Link>
    </ButtonCallContainer>
  );
}
