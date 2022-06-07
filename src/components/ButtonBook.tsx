import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { CONTACT } from "../data/links";

const ButtonBookContainer = styled.div`
  a {
    display: inline-block;
    padding: 0.8rem 1.4rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #00a98f;
    }
  }
`;

export default function ButtonBook() {
  return (
    <ButtonBookContainer>
      <Link to={CONTACT.to}>Réserver</Link>
    </ButtonBookContainer>
  );
}
