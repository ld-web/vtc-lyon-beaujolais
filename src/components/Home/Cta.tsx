import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { CONTACT } from "../../data/links";

const CarouselCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: initial;
  z-index: 20;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;

  * {
    font-weight: 300;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.8rem;
    margin: 0;
  }

  h3 {
    margin: 0.3rem 0rem;
  }

  a {
    display: block;
    padding: 0.8rem 1.4rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #00a98f;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    left: 15%;
    bottom: 15%;
    flex-direction: row;
    padding: 1.5rem 2.1rem;

    h1 {
      font-size: 2.2rem;
    }
  }
`;

export default function Cta() {
  return (
    <CarouselCta>
      <div>
        <h1>Chauffeur privé</h1>
        <h3>Traversez l'horizon avec nous</h3>
      </div>
      <div>
        <Link to={CONTACT.to}>Réserver</Link>
      </div>
    </CarouselCta>
  );
}
