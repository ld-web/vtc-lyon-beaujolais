import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CtaBook from "../components/CtaBook";
import { Desktop, Mobile } from "../utils/rwd";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: flex-end;
    column-gap: 1.6rem;
    margin-bottom: 3rem;

    & > * {
      flex-basis: 50%;
    }
  }
`;

const AdvantagesContainer = styled(AboutContainer)`
  padding: 0.6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 1600px;
    margin: auto;
    align-items: center;
  }
`;

const AdvantagesList = styled.ul`
  padding-left: 0rem;
  list-style-type: none;

  li {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    position: relative;
    font-size: x-large;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      text-align: justify;
    }

    &:after {
      content: "";
      position: absolute;
      width: 50%;
      left: 0;
      bottom: 0;
      height: 1px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.main},
        white
      );
    }
  }
`;

export default function About() {
  return (
    <>
      <Helmet>
        <title>A propos</title>
      </Helmet>
      <h1 className="content main-title center">Qui sommes-nous ?</h1>
      <AboutContainer className="content">
        <div>
          <StaticImage
            src="../images/interieur_crv_nuit.jpg"
            alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
            placeholder="blurred"
            layout={"constrained"}
          />
        </div>
        <div className="text-content">
          <p>
            Situé au Nord de Lyon entre les monts d'or et le Beaujolais, notre
            entreprise est <strong>en activité depuis 2014</strong>. Ces années
            d'expérience nous ont apportées une{" "}
            <strong>
              vision très large et précise du métier de chauffeur privé
            </strong>
            , et des différentes attentes de la clientèle envers celui-ci.
          </p>
          <p>
            Titulaires de cartes professionnelles, nous avons tous bénéficié
            d'une <strong>formation certifiante</strong> à laquelle nous devons
            ajouter une <strong>formation continue</strong>. Nous sommes donc en
            constant apprentissage afin de garantir un{" "}
            <strong>maximum de sécurité et de professionnalisme</strong> lors de
            nos prestations.
          </p>
          <Desktop>
            <CtaBook />
          </Desktop>
        </div>
      </AboutContainer>
      <Mobile>
        <CtaBook />
      </Mobile>
      <AdvantagesContainer>
        <div>
          <h2>
            Quels sont les principaux avantages d'un chauffeur privé (VTC) ?
          </h2>
          <AdvantagesList>
            <li>Une prise en compte du confort de la clientèle</li>
            <li>Une ponctualité irréprochable</li>
            <li>
              Un prix communiqué lors de votre réservation et beaucoup moins
              onéreux que les services d'un Taxi, sans suppléments météo et
              autres...
            </li>
            <li>Une réservation au préalable pour voyager sans stress</li>
            <li>Le nombre de passagers ou bagages n’influence pas le prix</li>
            <li>Plus besoin de chercher une place de stationnement</li>
            <li>Pas de frais supplémentaires en cas de retard de votre part</li>
            <li>Un service personnalisable</li>
          </AdvantagesList>
        </div>
        <div>
          <StaticImage
            src="../images/crv_vignes.jpg"
            alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
            placeholder="blurred"
            layout={"constrained"}
          />
        </div>
      </AdvantagesContainer>
    </>
  );
}
