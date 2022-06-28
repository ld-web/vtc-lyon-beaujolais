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
    margin-top: 3rem;
    align-items: flex-start;

    h2 {
      margin-top: 0;
    }
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
            Situé au{" "}
            <strong>nord de Lyon entre les Monts d'Or et le Beaujolais</strong>,
            notre entreprise est <strong>en activité depuis 2014</strong>. Ces
            années d'expérience nous ont apportées une{" "}
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
            <li>
              Une prise en compte du <strong>confort de la clientèle</strong>
            </li>
            <li>
              Une <strong>ponctualité</strong> irréprochable
            </li>
            <li>
              Un prix communiqué lors de votre réservation et beaucoup{" "}
              <strong>moins onéreux que les services d'un Taxi</strong>, sans
              suppléments météo et autres...
            </li>
            <li>
              Une <strong>réservation au préalable</strong> pour voyager{" "}
              <strong>sans stress</strong>
            </li>
            <li>Le nombre de passagers ou bagages n’influence pas le prix</li>
            <li>
              <strong>Plus besoin</strong> de chercher une place de
              stationnement
            </li>
            <li>
              <strong>Pas de frais supplémentaires</strong> en cas de retard de
              votre part
            </li>
            <li>
              Un <strong>service personnalisable</strong>
            </li>
          </AdvantagesList>
        </div>
        <div>
          <StaticImage
            src="../images/airport_ext_opt.png"
            alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
            placeholder="blurred"
            layout={"constrained"}
          />
        </div>
      </AdvantagesContainer>
    </>
  );
}
