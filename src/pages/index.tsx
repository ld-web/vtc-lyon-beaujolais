import { graphql, PageProps } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";
import Cta from "../components/Home/Cta";
import { PolygonDirection, PolygonTheme } from "../components/Polygon";
import PolygonSection from "../components/PolygonSection";
import { Desktop, Mobile } from "../utils/rwd";

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
  position: relative;
  text-align: center;
  margin-bottom: 3rem;
`;

const IndexPage = ({ data }: PageProps<DataProps>) => {
  return (
    <div>
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
        <Desktop>
          <Cta />
        </Desktop>
      </CarouselContainer>

      <Mobile>
        <Cta />
      </Mobile>

      <PolygonSection
        title="Antoine & Adeline"
        direction={PolygonDirection.DOWN}
        theme={PolygonTheme.DARK}
      >
        Antoine & Adeline transport Taxi/VTC vous proposent leur service de
        transport avec chauffeur pour plusieurs types de prestations. Du trajet
        simple, transfert de gares et d’aéroports, aux mises à disposition pour
        des événements (mariage, séminaire, shopping, rendez-vous , départ en
        station de ski) jusqu'aux circuits découverte de LYON et ses domaines
        viticoles, ...
      </PolygonSection>

      <PolygonSection
        title="Silence ça roule"
        direction={PolygonDirection.UP}
        theme={PolygonTheme.LIGHT}
      >
        Passionnés par le service, par la conduite et par la nature, nous avons
        à coeur de préserver notre environnement . C'est pour cela que nous
        roulons en véhicules écologiques alliant respect de la planète et
        confort. C'est lors de vos excursions touristiques au coeur du vieux
        Lyon, des domaines viticoles des monts du beaujolais et de la vallée du
        Rhône, ou au coeur des Alpes, que vous pourrez apprécier la nature en
        toute quiétude à bord d'un transport qui se veut au maximum
        éco-responsable. Au départ de la région lyonnaise nous vous
        accompagnerons dans tous vos déplacements nationaux ou internationaux.
      </PolygonSection>

      <PolygonSection
        title="Un savoir-faire"
        direction={PolygonDirection.DOWN}
        theme={PolygonTheme.DARK_BLUE}
      >
        Fort d'une expérience solide dans le domaine du transport de personnes,
        nous avons pour but de satisfaire pleinement notre clientèle en assurant
        un service de grande qualité, en faisant preuve de professionnalisme et
        de la plus grande discrétion. Satisfaction, sécurité, courtoisie,
        fiabilité sont nos mots d'ordre.
      </PolygonSection>
    </div>
  );
};

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "home-carousel" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              width: 1900
              aspectRatio: 2
              placeholder: BLURRED
              transformOptions: { cropFocus: SOUTH, fit: COVER }
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
