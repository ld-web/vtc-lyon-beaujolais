import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Prestation = styled.section`
  position: relative;
  scroll-margin-top: 9rem;
  padding-top: 1.2rem;
  padding-bottom: 2rem;

  .wave {
    background: #fff;

    &::before {
      background-color: #fff;
    }

    &.to-darkblue::after {
      background-color: ${({ theme }) => theme.colors.darkblue};
    }

    &.to-green::after {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  &.darkblue {
    background-color: ${({ theme }) => theme.colors.darkblue};
    color: #fff;

    .wave {
      background: ${({ theme }) => theme.colors.darkblue};

      &::before {
        background-color: ${({ theme }) => theme.colors.darkblue};
      }

      &::after {
        background-color: #fff;
      }
    }
  }

  &.green {
    background-color: ${({ theme }) => theme.colors.green};
    color: #fff;

    .wave {
      background: ${({ theme }) => theme.colors.green};

      &::before {
        background-color: ${({ theme }) => theme.colors.green};
      }

      &::after {
        background-color: #fff;
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;

    & > div {
      text-align: center;
    }

    & > * {
      flex-basis: 50%;
    }
  }

  ul {
    padding-left: 1rem;

    li:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: justify;
    padding-bottom: 4rem;

    .body {
      flex-direction: row;
      align-items: center;
      column-gap: 3rem;

      &.reverse {
        flex-direction: row-reverse;
      }
    }

    h2 {
      margin-bottom: 0;
      text-align: left;
    }

    .wave {
      position: absolute;
      height: 65px;
      width: 100%;
      bottom: 0;
      overflow-x: clip;
    }

    .wave::before,
    .wave::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 50% 100%;
    }

    .wave::before {
      width: 55%;
      height: 100%;
      right: -1.5%;
      top: 40%;
      z-index: 20;
    }
    .wave::after {
      width: 55%;
      height: 109%;
      left: -1.5%;
      top: 60%;
    }
  }
`;

export default function NosPrestations() {
  return (
    <>
      <Helmet>
        <title>Nos prestations</title>
      </Helmet>
      <h1 className="content main-title upper center">Nos prestations</h1>
      <Prestation id="transfert-aeroports-et-gares">
        <div className="content">
          <h2>Transferts a??roports et gares</h2>
          <div className="body">
            <div>
              <StaticImage
                src="../images/Airport-bro.png"
                alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
                placeholder="blurred"
                layout={"constrained"}
              />
            </div>
            <p>
              Nous couvrons vos <strong>transferts A??roports et gares</strong>{" "}
              de la r??gion Lyonnaise, depuis ou vers la{" "}
              <strong>destination de votre choix</strong>. Aucun stress, on
              s'occupe de tout : il vous suffit de r??server via un{" "}
              <strong>simple appel/SMS/email</strong> nous mentionnant votre
              lieu de prise en charge ainsi que vos destinations.
              <br />
              <br />
              <strong>Nous pr??parons nos itin??raires ?? l'avance</strong> en
              fonction du trafic et du confort de la route, ainsi,{" "}
              <strong>aucun impr??vu</strong>, nous avons toujours{" "}
              <strong>un temps d'avance</strong>.
              <br />
              <br />
              Tous les transferts comprennent la{" "}
              <strong>prise en charge de 4 personnes</strong> maximum par
              voiture et leurs <strong>bagages sans suppl??ment</strong>.
            </p>
          </div>
        </div>
        <div className="wave to-darkblue"></div>
      </Prestation>
      <Prestation id="mise-a-disposition-chauffeur" className="darkblue">
        <div className="content">
          <h2>La mise ?? disposition</h2>
          <div className="body reverse">
            <div>
              <StaticImage
                src="../images/driver-bro.png"
                alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
                placeholder="blurred"
                layout={"constrained"}
              />
            </div>
            <p>
              Une{" "}
              <strong>
                envie de shopping sans les tracas du stationnement
              </strong>{" "}
              ? Un <strong>rendez-vous m??dical</strong> afin d?????tre s??r d'avoir
              un chauffeur pour le retour ? Pour{" "}
              <strong>tous vos ??v??nements</strong>, pensez{" "}
              <strong>Antoine & Adeline VTC</strong>, mariages, soir??es,
              s??minaires...
            </p>
          </div>
        </div>
        <div className="wave"></div>
      </Prestation>
      <Prestation id="circuits-touristiques">
        <div className="content">
          <h2>Circuits touristiques</h2>
          <div className="body">
            <div>
              <StaticImage
                src="../images/Forest-bro.png"
                alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
                placeholder="blurred"
                layout={"constrained"}
              />
            </div>
            <p>
              Nous proposons des{" "}
              <strong>excursions dans la r??gion lyonnaise</strong> et ses
              alentours sous forme de circuit.
              <ul>
                <li>
                  <strong>Domaines viticoles</strong> :{" "}
                  <strong>Visites de vignobles du Beaujolais</strong> avec ses{" "}
                  <strong>d??gustations de vins</strong> au milieu des pierres
                  dor??es, suivi d'une <strong>halte gourmande</strong> offrant
                  une vue sur le mont blanc. Plus au Sud en{" "}
                  <strong>vall??e du Rh??ne</strong> vous d??couvrirez les
                  mythiques <strong>Syrah, Grenache et Viognier</strong> marqu??s
                  par la rencontre avec des viticulteurs passionn??s et la{" "}
                  <strong>d??couverte de leurs somptueux domaines</strong>.
                </li>
                <li>
                  <strong>D??couverte de LYON</strong> : Une{" "}
                  <strong>ville remplie d'histoire</strong>, traversant les
                  si??cles depuis l'antiquit??, marqu??e par le passage de l'empire
                  Romain; Le <strong>Vieux Lyon</strong> avec ses ruelles pav??es
                  ou encore la <strong>colline de la Croix-Rousse</strong> ,
                  berceau des canuts, ses lieux charg??s d'histoire comme le{" "}
                  <strong>th????tre gallo-romain</strong> et ses{" "}
                  <strong>nombreux mus??es</strong>, sans oublier sa{" "}
                  <strong>riche gastronomie</strong> ?? d??guster dans ses
                  c??l??bres <strong>bouchons Lyonnais</strong>.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="wave to-green"></div>
      </Prestation>
      <Prestation id="vacances-mer-montagne" className="green">
        <div className="content">
          <h2>Vacances Mer Montagne</h2>
          <div className="body reverse">
            <div>
              <StaticImage
                src="../images/Exploring-bro.png"
                alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
                placeholder="blurred"
                layout={"constrained"}
              />
            </div>
            <p>
              Au d??part de la <strong>r??gion lyonnaise</strong> de l???a??roport et
              des gares de Lyon, nous couvrons{" "}
              <strong>toutes les stations de ski</strong>, nous sommes habitu??s
              et form??s ?? la <strong>conduite hivernale en montagne</strong> et
              nous sommes ??quip??s de v??hicules sp??cifiques, ainsi{" "}
              <strong>plus d'inqui??tude</strong>, il ne vous reste plus qu'??
              admirer le paysage.
              <br />
              <br />
              <strong>Besoin de soleil</strong> ? Pensez{" "}
              <strong>Antoine & Adeline</strong>, nous vous accompagnerons vers
              votre escapade sur la <strong>C??te d'Azur</strong>&nbsp;!
            </p>
          </div>
        </div>
        <div className="wave"></div>
      </Prestation>
      <Prestation id="feminin" className="content">
        <div className="content">
          <h2>Possibilit?? 100% F??minin</h2>
          <div className="body">
            <div>
              <StaticImage
                src="../images/Eyes-bro.png"
                alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
                placeholder="blurred"
                layout={"constrained"}
              />
            </div>
            <p>
              <strong>Antoine & Adeline transport VTC</strong> vous propose
              aussi un{" "}
              <strong>
                service de transport destin?? uniquement ?? la client??le f??minine
              </strong>
              . Votre chauffeur priv?? sera une{" "}
              <strong>femme exp??riment??e</strong> qui pourra vous rassurer et{" "}
              <strong>vous accompagner dans tous vos d??placements</strong>.
            </p>
          </div>
        </div>
      </Prestation>
    </>
  );
}
