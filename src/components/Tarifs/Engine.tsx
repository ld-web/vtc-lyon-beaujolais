import { Link } from "gatsby";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CONTACT } from "../../data/links";
import { estimate } from "../../services/trip";
import LocationField from "../Form/LocationField";
import NbLuggages from "../Form/NbLuggages";
import NbPeople from "../Form/NbPeople";
import { Form } from "../Form/styles";
import TripDate from "../Form/TripDate";
import TripTime from "../Form/TripTime";
import {
  EngineContainer,
  EngineEstimate,
  ErrorContainer,
} from "./EngineStyles";

export type EngineInputs = {
  startLocation: string;
  startLocationPoint: string;
  endLocation: string;
  endLocationPoint: string;
  tripDate: string;
  tripTime: string;
  nbPeople: string;
  nbLuggage: string;
};

const Engine = () => {
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<EngineInputs>();
  const { getValues, handleSubmit } = methods;

  const locationSelected = () => setError(null);

  const onSubmit: SubmitHandler<EngineInputs> = async (data) => {
    if (data.startLocationPoint === "" || data.endLocationPoint === "") {
      setError(
        "Veuillez choisir un départ et une arrivée depuis les listes proposées lors de votre saisie"
      );
      return;
    }

    try {
      const estimation = await estimate(
        data.startLocationPoint,
        data.endLocationPoint
      );
      setEstimatedPrice(estimation);
    } catch (e) {
      setError(
        "Une erreur est survenue lors de l'estimation, veuillez nous en excuser"
      );
    }
  };

  return (
    <EngineContainer>
      <h2>Simulez votre tarif !</h2>

      {error && <ErrorContainer>{error}</ErrorContainer>}

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LocationField
            name="startLocation"
            placeholder="Adresse de départ"
            errorMessage="L'adresse de départ est obligatoire"
            callback={locationSelected}
          />
          <LocationField
            name="endLocation"
            placeholder="Adresse d'arrivée"
            errorMessage="L'adresse d'arrivée est obligatoire"
            callback={locationSelected}
          />
          <TripDate />
          <TripTime />
          <NbPeople />
          <NbLuggages />
          <button type="submit" aria-label="Calculer le prix du trajet">
            Calculer
          </button>
        </Form>
      </FormProvider>

      {estimatedPrice && (
        <>
          <EngineEstimate>Tarif estimé : {`${estimatedPrice}€`}</EngineEstimate>
          <Link
            id="reservation"
            to={`${CONTACT.to}?${new URLSearchParams(getValues()).toString()}`}
          >
            Réserver
          </Link>
        </>
      )}
    </EngineContainer>
  );
};

export default Engine;
