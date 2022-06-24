import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Engine from "../components/Tarifs/Engine";

const TarifsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;

    & > * {
      flex-basis: 50%;
    }
  }
`;

export default function About() {
  return (
    <>
      <Helmet>
        <title>Nos tarifs</title>
      </Helmet>
      <h1 className="content main-title center">Nos tarifs</h1>
      <TarifsContainer className="content">
        <div>
          <p>
            Vous pouvez directement simuler vos transferts via notre simulateur
            de prix en entrant vos destinations à partir de vos lieux de prise
            en charge.
          </p>

          <p>
            Cette estimation est basée sur un prix kilométrique global.
            <strong>(frais de péage non inclus)</strong>
          </p>

          <p>
            Tous les tarifs comprennent 4 passagers et leurs bagages sans
            supplément. Nous ne facturons pas l'attente en cas de retard de
            votre vol ou train.
          </p>
        </div>
        <Engine />
      </TarifsContainer>
      <div className="content">
        Vous pourrez procéder au paiement par carte bancaire, chèque ou espèces
        à bord du véhicule directement auprès de votre chauffeur une fois arrivé
        à destination.
      </div>
    </>
  );
}