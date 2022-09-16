import React from "react";
import styled from "styled-components";
import ButtonBook from "../ButtonBook";
import ButtonCall from "../ButtonCall";

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

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.3rem 0rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    left: 15%;
    bottom: 15%;
    flex-direction: row;
    padding: 1.5rem 2.1rem;

    h1,
    h2 {
      text-align: left;
    }

    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }
`;

const ButtonsCta = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export default function Cta() {
  return (
    <CarouselCta>
      <div>
        <h1>Chauffeur privé</h1>
        <h2>Traversez l'horizon avec nous</h2>
      </div>
      <ButtonsCta>
        <ButtonBook />
        <ButtonCall />
      </ButtonsCta>
    </CarouselCta>
  );
}
