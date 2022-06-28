import React, { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import LocationField from "../Form/LocationField";
import NbLuggages from "../Form/NbLuggages";
import NbPeople from "../Form/NbPeople";
import { Form, FormFieldError } from "../Form/styles";
import TripDate from "../Form/TripDate";
import TripTime from "../Form/TripTime";
import { EngineInputs } from "../Tarifs/Engine";

const FormContainer = styled.div`
  padding: 1.8rem 0.8rem;
  box-shadow: 0 0 20px 7px rgb(0 0 0 / 27%);

  .success,
  .error {
    font-weight: bold;
    text-align: center;
  }

  .success {
    color: ${({ theme }) => theme.colors.green};
  }

  .error {
    color: red;
  }

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
  const [success, setSuccess] = useState<boolean | null>(null);

  const methods = useForm<ContactFormInputs>();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = methods;

  useEffect(() => {
    methods.setValue("startLocation", query.get("startLocation") ?? "");
    methods.setValue("endLocation", query.get("endLocation") ?? "");
    methods.setValue("tripDate", query.get("tripDate") ?? "");
    methods.setValue("tripTime", query.get("tripTime") ?? "");
    methods.setValue("nbPeople", query.get("nbPeople") ?? "");
    methods.setValue("nbLuggage", query.get("nbLuggage") ?? "");
  }, []);

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    const formData = new FormData();
    formData.append("Départ", data.startLocation);
    formData.append("Arrivée", data.endLocation);
    formData.append("Nom complet", data.fullName);
    formData.append("Téléphone", data.phone);
    formData.append("Email", data.email);
    formData.append("Date", data.tripDate);
    formData.append("Heure", data.tripTime);
    formData.append("Nombre de personnes", data.nbPeople);
    formData.append("Nombre de bagages", data.nbLuggage);
    formData.append("Autre demande", data.message);

    fetch("https://getform.io/f/7e678a79-00ec-4be8-9fd9-fbf41d53ed2e", {
      method: "POST",
      body: formData,
    })
      .then(() => setSuccess(true))
      .catch(() => setSuccess(false));
  };

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <h2>Formulaire de réservation</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.fullName && (
            <FormFieldError>Le nom complet est obligatoire</FormFieldError>
          )}
          <div>
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Nom complet"
            />
          </div>
          {errors.phone && (
            <FormFieldError>Le téléphone est obligatoire</FormFieldError>
          )}
          <div>
            <input
              type="tel"
              {...register("phone", { required: true })}
              placeholder="Téléphone"
            />
          </div>
          {errors.email && (
            <FormFieldError>L'email est obligatoire</FormFieldError>
          )}
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
          </div>
          <LocationField
            name="startLocation"
            placeholder="Lieu de prise en charge"
            errorMessage="Le lieu de prise en charge est obligatoire"
          />
          <LocationField
            name="endLocation"
            placeholder="Lieu d'arrivée"
            errorMessage="Le lieu d'arrivée est obligatoire"
          />
          <TripDate />
          <TripTime />
          <NbPeople />
          <NbLuggages />
          <textarea
            {...register("message")}
            placeholder="Autre demande..."
            rows={6}
          ></textarea>
          {success && (
            <p className="success">Votre demande a bien été envoyée, merci</p>
          )}
          {success === false && (
            <p className="error">
              Une erreur est survenue lors de l'envoi de votre demande, veuillez
              réessayer dans quelques minutes, merci
            </p>
          )}
          <button type="submit" aria-label="Envoyer la demande de contact">
            Envoyer
          </button>
        </Form>
      </FormContainer>
    </FormProvider>
  );
};

export default ContactForm;
