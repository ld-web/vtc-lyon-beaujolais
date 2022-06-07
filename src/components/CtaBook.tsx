import React from "react";
import styled from "styled-components";
import ButtonBook from "./ButtonBook";

const CtaBookContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  padding: 1.6rem 2rem;
  text-align: left;
`;

const CtaBookTitle = styled.p`
  font-size: xx-large;
  margin-top: 0;
  margin-bottom: 0;
`;

export default function CtaBook() {
  return (
    <CtaBookContainer>
      <CtaBookTitle>
        Antoine & Adeline transport VTC, traversez l'horizon avec nous !
      </CtaBookTitle>
      <p>
        Notre entreprise aura le plaisir de vous accueillir et de vos
        accompagner dans une atmosphère chaleureuse et rassurante.
      </p>
      <ButtonBook />
    </CtaBookContainer>
  );
}
