import React, { useCallback, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import LocationField from "../Form/LocationField";
import NbLuggages from "../Form/NbLuggages";
import NbPeople from "../Form/NbPeople";
import { Form, FormFieldError } from "../Form/styles";
import TripDate from "../Form/TripDate";
import TripTime from "../Form/TripTime";
import { EngineInputs } from "../Tarifs/Engine";
import Location from "../Tarifs/Location";

const FormContainer = styled.div`
  padding: 1.8rem 0.8rem;
  box-shadow: 0 0 20px 7px rgb(0 0 0 / 27%);

  h2 {
    margin-top: 0;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 2rem;
  }
`;

type ContactFormInputs = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
} & EngineInputs;

interface ContactFormProps {
  query: URLSearchParams;
}

const ContactForm = ({ query }: ContactFormProps) => {
  const methods = useForm<ContactFormInputs>();
  const { errors } = methods.formState;

  useEffect(() => {
    methods.setValue("startLocation", query.get("startLocation") ?? "");
    methods.setValue("endLocation", query.get("endLocation") ?? "");
    methods.setValue("tripDate", query.get("tripDate") ?? "");
    methods.setValue("tripTime", query.get("tripTime") ?? "");
    methods.setValue("nbPeople", query.get("nbPeople") ?? "");
    methods.setValue("nbLuggage", query.get("nbLuggage") ?? "");
  }, []);

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
  };

  const departureSelected = useCallback((location: Location) => {
    methods.setValue("startLocation", location.format());
  }, []);

  const arrivalSelected = useCallback((location: Location) => {
    methods.setValue("endLocation", location.format());
  }, []);

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h2>Formulaire de réservation</h2>
        <Form
          method="POST"
          action="https://getform.io/f/c09b5a69-e4e8-412c-b02e-5a6e53d133d9"
        >
          {errors.fullName && (
            <FormFieldError>Le nom complet est obligatoire</FormFieldError>
          )}
          <div>
            <input
              type="text"
              {...methods.register("fullName", { required: true })}
              placeholder="Nom complet"
            />
          </div>
          {errors.phone && (
            <FormFieldError>Le téléphone est obligatoire</FormFieldError>
          )}
          <div>
            <input
              type="tel"
              {...methods.register("phone", { required: true })}
              placeholder="Téléphone"
            />
          </div>
          {errors.email && (
            <FormFieldError>L'email est obligatoire</FormFieldError>
          )}
          <div>
            <input
              type="email"
              {...methods.register("email", { required: true })}
              placeholder="Email"
            />
          </div>
          <LocationField
            name="startLocation"
            callback={departureSelected}
            placeholder="Lieu de prise en charge"
            errorMessage="Le lieu de prise en charge est obligatoire"
          />
          <LocationField
            name="endLocation"
            callback={arrivalSelected}
            placeholder="Lieu d'arrivée"
            errorMessage="Le lieu d'arrivée est obligatoire"
          />
          <TripDate />
          <TripTime />
          <NbPeople />
          <NbLuggages />
          <textarea
            {...methods.register("message")}
            placeholder="Autre demande..."
            rows={6}
          ></textarea>
          <button type="submit" aria-label="Envoyer la demande de contact">
            Envoyer
          </button>
        </Form>
      </FormContainer>
    </FormProvider>
  );
};

export default ContactForm;
