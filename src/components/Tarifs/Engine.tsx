import React, { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { estimate } from "../../services/graphhopper";
import AutocompleteInput from "./AutocompleteInput";
import Location from "./Location";
import {
  EngineContainer,
  EngineEstimate,
  EngineForm,
  ErrorContainer,
  FormFieldError,
} from "./styles/EngineStyles";

export type EngineInputs = {
  startLocation: string;
  endLocation: string;
  tripDate: string;
  tripTime: string;
  nbPeople: number;
  nbLuggage: number;
};

const Engine = () => {
  const [departure, setDeparture] = useState<Location | null>(null);
  const [arrival, setArrival] = useState<Location | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EngineInputs>();

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
    setValue("startLocation", location.format());
    setDeparture(location);
  }, []);

  const arrivalSelected = useCallback((location: Location) => {
    setValue("endLocation", location.format());
    setArrival(location);
  }, []);

  return (
    <EngineContainer>
      <h2>Simulez votre tarif !</h2>

      {error && <ErrorContainer>{error}</ErrorContainer>}

      <EngineForm onSubmit={handleSubmit(onSubmit)}>
        {errors.startLocation && (
          <FormFieldError>L'adresse de départ est obligatoire</FormFieldError>
        )}
        <AutocompleteInput
          name="startLocation"
          placeholder="Adresse de départ"
          callback={departureSelected}
          registerFn={register}
        />

        {errors.endLocation && (
          <FormFieldError>
            L'adresse de destination est obligatoire
          </FormFieldError>
        )}
        <AutocompleteInput
          name="endLocation"
          placeholder="Adresse d'arrivée"
          callback={arrivalSelected}
          registerFn={register}
        />

        <input type="date" {...register("tripDate")} />
        <input type="time" {...register("tripTime")} />
        <input
          type="number"
          {...register("nbPeople")}
          placeholder="Nombre de personnes"
        />
        <input
          type="number"
          {...register("nbLuggage")}
          placeholder="Nombre de bagages"
        />
        <button type="submit">Calculer</button>
      </EngineForm>
      {estimatedPrice && (
        <EngineEstimate>Tarif estimé : {`${estimatedPrice}€`}</EngineEstimate>
      )}
    </EngineContainer>
  );
};

export default Engine;
