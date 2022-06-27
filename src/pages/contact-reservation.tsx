import { PageProps } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ContactForm from "../components/Contact/ContactForm";

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
        </div>
      </ContactContainer>
    </>
  );
};

export default ContactReservation;
