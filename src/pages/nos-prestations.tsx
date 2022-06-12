import { graphql, PageProps } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";

type DataProps = {
  allFile: {
    edges: {
      node: {
        id: string;
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    }[];
  };
};

const slideshowProperties = {
  duration: 4000,
  arrows: false,
  pauseOnHover: false,
};

const CarouselContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Prestation = styled.section`
  display: flex;
  flex-direction: column;
  scroll-margin-top: 5rem;

  & > * {
    flex-basis: 50%;
  }

  ul {
    padding-left: 1rem;

    li:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  }

  p {
    padding: 1rem;
  }

  p.green {
    background-color: ${({ theme }) => theme.colors.green};
    color: #fff;
  }

  p.darkblue {
    background-color: ${({ theme }) => theme.colors.darkblue};
    color: #fff;
  }

  p.main {
    background-color: ${({ theme }) => theme.colors.main};
    color: #fff;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: justify;

    h2 {
      margin-bottom: 0;
      text-align: left;
    }

    p {
      padding: 1.3rem;
    }
  }
`;

export default function NosPrestations({ data }: PageProps<DataProps>) {
  return (
    <>
      <Helmet>
        <title>Nos prestations</title>
      </Helmet>
      <h1 className="content main-title center">Nos prestations</h1>
      <CarouselContainer>
        <Fade {...slideshowProperties}>
          {data.allFile.edges.map((img) => (
            <GatsbyImage
              key={img.node.id}
              image={img.node.childImageSharp.gatsbyImageData}
              alt="Traversez l'horizon avec nous"
            />
          ))}
        </Fade>
      </CarouselContainer>
      <Prestation id="transfert-aeroports-et-gares" className="content">
        <h2>Tranferts aéroports et gares</h2>
        <p className="green">
          Nous couvrons vos <strong>transferts Aéroports et gares</strong> de la
          région Lyonnaise, depuis ou vers la{" "}
          <strong>destination de votre choix</strong>. Aucun stress, on s'occupe
          de tout : il vous suffit de réserver via un{" "}
          <strong>simple appel/SMS/email</strong> nous mentionnant votre lieu de
          prise en charge ainsi que vos destinations.
          <br />
          <br />
          <strong>Nous préparons nos itinéraires à l'avance</strong> en fonction
          du trafic et du confort de la route, ainsi,{" "}
          <strong>aucun imprévu</strong>, nous avons toujours{" "}
          <strong>un temps d'avance</strong>.
          <br />
          <br />
          Tous les transferts comprennent la{" "}
          <strong>prise en charge de 4 personnes</strong> maximum par voiture et
          leurs <strong>bagages sans supplément</strong>.
        </p>
      </Prestation>
      <Prestation id="mise-a-disposition-chauffeur" className="content">
        <h2>La mise à disposition</h2>
        <p className="darkblue">
          Une{" "}
          <strong>envie de shopping sans les tracas du stationnement</strong> ?
          Un <strong>rendez-vous médical</strong> afin d’être sûr d'avoir un
          chauffeur pour le retour ? Pour <strong>tous vos événements</strong>,
          pensez <strong>Antoine & Adeline VTC</strong>, mariages, soirées,
          séminaires...
        </p>
      </Prestation>
      <Prestation id="circuits-touristiques" className="content">
        <h2>Circuits touristiques</h2>
        <p className="main">
          Nous proposons des{" "}
          <strong>excursions dans la région lyonnaise</strong> et ses alentours
          sous forme de circuit.
          <ul>
            <li>
              <strong>Domaines viticoles</strong> :{" "}
              <strong>Visites de vignobles du Beaujolais</strong> avec ses{" "}
              <strong>dégustations de vins</strong> au milieu des pierres
              dorées, suivi d'une <strong>halte gourmande</strong> offrant une
              vue sur le mont blanc. Plus au Sud en{" "}
              <strong>vallée du Rhône</strong> vous découvrirez les mythiques{" "}
              <strong>Syrah, Grenache et Viognier</strong> marqués par la
              rencontre avec des viticulteurs passionnés et la{" "}
              <strong>découverte de leurs somptueux domaines</strong>.
            </li>
            <li>
              <strong>Découverte de LYON</strong> : Une{" "}
              <strong>ville remplie d'histoire</strong>, traversant les siècles
              depuis l'antiquité, marquée par le passage de l'empire Romain; Le{" "}
              <strong>Vieux Lyon</strong> avec ses ruelles pavées ou encore la{" "}
              <strong>colline de la Croix-Rousse</strong> , berceau des canuts,
              ses lieux chargés d'histoire comme le{" "}
              <strong>théâtre gallo-romain</strong> et ses{" "}
              <strong>nombreux musées</strong>, sans oublier sa{" "}
              <strong>riche gastronomie</strong> à déguster dans ses célèbres{" "}
              <strong>bouchons Lyonnais</strong>.
            </li>
          </ul>
        </p>
      </Prestation>
      <Prestation id="vacances-mer-montagne" className="content">
        <h2>Vacances Mer Montagne</h2>
        <p className="green">
          Au départ de la <strong>région lyonnaise</strong> de l’aéroport et des
          gares de Lyon, nous couvrons{" "}
          <strong>toutes les stations de ski</strong>, nous sommes habitués et
          formés à la <strong>conduite hivernale en montagne</strong> et nous
          sommes équipés de véhicules spécifiques, ainsi{" "}
          <strong>plus d'inquiétude</strong>, il ne vous reste plus qu'à admirer
          le paysage.
          <br />
          <br />
          <strong>Besoin de soleil</strong> ? Pensez{" "}
          <strong>Antoine & Adeline</strong>, nous vous accompagnerons vers
          votre escapade sur la <strong>Côte d'Azur</strong> !
        </p>
      </Prestation>
      <Prestation id="feminin" className="content">
        <h2>Possibilité 100% Féminin</h2>
        <p className="darkblue">
          <strong>Antoine & Adeline transport VTC</strong> vous propose aussi un{" "}
          <strong>
            service de transport destiné uniquement à la clientèle féminine
          </strong>
          . Votre chauffeur privé sera une <strong>femme expérimentée</strong>{" "}
          qui pourra vous rassurer et{" "}
          <strong>vous accompagner dans tous vos déplacements</strong>.
        </p>
      </Prestation>
    </>
  );
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "prestations-carousel" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              width: 1900
              aspectRatio: 2
              placeholder: BLURRED
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  }
`;
