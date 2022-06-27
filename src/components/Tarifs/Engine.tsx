import { navigate } from "gatsby";
import React, { useCallback, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CONTACT } from "../../data/links";
import { estimate } from "../../services/graphhopper";
import LocationField from "../Form/LocationField";
import NbLuggages from "../Form/NbLuggages";
import NbPeople from "../Form/NbPeople";
import TripDate from "../Form/TripDate";
import TripTime from "../Form/TripTime";
import Location from "./Location";
import {
  EngineContainer,
  EngineEstimate,
  EngineForm,
  ErrorContainer,
} from "./styles/EngineStyles";

export type EngineInputs = {
  startLocation: string;
  endLocation: string;
  tripDate: string;
  tripTime: string;
  nbPeople: string;
  nbLuggage: string;
};

const Engine = () => {
  const [departure, setDeparture] = useState<Location | null>(null);
  const [arrival, setArrival] = useState<Location | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<EngineInputs>();

  const onSubmit: SubmitHandler<EngineInputs> = async () => {
    if (departure === null || arrival === null) {
      setError(
        "Veuillez choisir un départ et une arrivée depuis les listes proposées lors de votre saisie"
      );
      return;
    }

    try {
      const estimation = await estimate(departure, arrival);
      setEstimatedPrice(estimation);
    } catch (e) {
      setError(
        "Une erreur est survenue lors de l'estimation, veuillez nous en excuser"
      );
    }
  };

  useEffect(() => {
    setError(null);
  }, [departure, arrival]);

  const departureSelected = useCallback((location: Location) => {
    methods.setValue("startLocation", location.format());
    setDeparture(location);
  }, []);

  const arrivalSelected = useCallback((location: Location) => {
    methods.setValue("endLocation", location.format());
    setArrival(location);
  }, []);

  const reserver = () => {
    const queryString = new URLSearchParams(methods.getValues()).toString();
    navigate(`${CONTACT.to}?${queryString}`);
  };

  return (
    <EngineContainer>
      <h2>Simulez votre tarif !</h2>

      {error && <ErrorContainer>{error}</ErrorContainer>}

      <FormProvider {...methods}>
        <EngineForm onSubmit={methods.handleSubmit(onSubmit)}>
          <LocationField
            name="startLocation"
            callback={departureSelected}
            placeholder="Adresse de départ"
            errorMessage="L'adresse de départ est obligatoire"
          />
          <LocationField
            name="endLocation"
            callback={arrivalSelected}
            placeholder="Adresse d'arrivée"
            errorMessage="L'adresse d'arrivée est obligatoire"
          />
          <TripDate />
          <TripTime />
          <NbPeople />
          <NbLuggages />
          <button type="submit" aria-label="Calculer le prix du trajet">
            Calculer
          </button>
        </EngineForm>
      </FormProvider>

      {estimatedPrice && (
        <>
          <EngineEstimate>Tarif estimé : {`${estimatedPrice}€`}</EngineEstimate>
          <button
            type="button"
            aria-label="Réserver mon trajet"
            id="reservation"
            onClick={reserver}
          >
            Réserver
          </button>
        </>
      )}
    </EngineContainer>
  );
};

export default Engine;
