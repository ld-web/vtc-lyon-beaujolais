import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ContactForm from "../components/Contact/ContactForm";
import { Desktop } from "../utils/rwd";

const ContactContainer = styled.div`
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

const CtaContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  padding: 0.7rem 1rem;
  text-align: left;

  p {
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    display: inline-block;
    font-size: initial;
    padding: 0.4rem 0.8rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #00a98f;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 1.6rem 2rem;
    font-size: large;

    a {
      padding: 0.8rem 1.4rem;
      font-size: large;
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
`;

const ContactReservation = ({ location }: PageProps) => {
  const query = new URLSearchParams(location.search);
  console.log(query.get("startLocation"));

  return (
    <>
      <Helmet>
        <title>Contact & réservation</title>
      </Helmet>
      <h1 className="content main-title center">CONTACT & RESERVATION</h1>
      <ContactContainer className="content">
        <ContactForm query={query} />
        <div>
          <p>
            Disponibles 24H/24 7J/7, vous pourrez réserver ou avoir un devis sur
            mesure simplement par téléphone/SMS/e mail ou via notre formulaire
            de réservation.
          </p>
          <CtaContactContainer>
            <p>
              Email
              <br />
              <a href="mailto:antoineadeline.vtc@gmail.com">
                antoineadeline.vtc@gmail.com
              </a>
            </p>
            <p>
              Téléphone
              <br />
              <a href="tel:+33659324617">0659324617</a>
            </p>
          </CtaContactContainer>
        </div>
      </ContactContainer>
      <ImagesContainer className="content">
        <Desktop>
          <StaticImage
            src="../images/contact-images/fourviere_hotel.jpg"
            alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
            placeholder="blurred"
            layout={"constrained"}
          />
        </Desktop>
        <StaticImage
          src="../images/contact-images/Bocuse_1.jpg"
          alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
          placeholder="blurred"
          layout={"constrained"}
        />
        <Desktop>
          <StaticImage
            src="../images/contact-images/mur_lyonnais.jpg"
            alt="Antoine & Adeline transport VTC, traversez l'horizon avec nous !"
            placeholder="blurred"
            layout={"constrained"}
          />
        </Desktop>
      </ImagesContainer>
    </>
  );
};

export default ContactReservation;
