import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EngineInputs>();
  const onSubmit: SubmitHandler<EngineInputs> = () => {
    if (departure === null || arrival === null) {
      setSelectionError(true);
      return;
    }

    fetch(
      `https://graphhopper.com/api/1/route?point=${departure?.coordinates.lat},${departure?.coordinates.lng}&point=${arrival?.coordinates.lat},${arrival?.coordinates.lng}&profile=car&instructions=false&locale=fr&calc_points=false&key=${process.env.GRAPHHOPPER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        let distance: number = data.paths[0].distance / 1000;
        let coeff = 2;

        if (distance > 50) {
          coeff = 1.8;
        }

        let estimate: number = distance * coeff;
        if (estimate < 25) {
          estimate = 25;
        }

        setEstimatedPrice(parseFloat(estimate.toFixed(2)));
      });
  };

  const [departure, setDeparture] = useState<Location | null>(null);
  const [arrival, setArrival] = useState<Location | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [selectionError, setSelectionError] = useState(false);

  useEffect(() => {
    setSelectionError(false);
  }, [departure, arrival]);

  const departureSelected = (location: Location) => {
    console.log("selected departure : ", location);
    setValue("startLocation", location.format());
    setDeparture(location);
  };

  const arrivalSelected = (location: Location) => {
    console.log("selected arrival : ", location);
    setValue("endLocation", location.format());
    setArrival(location);
  };

  return (
    <EngineContainer>
      <h2>Simulez votre tarif !</h2>

      {selectionError && (
        <ErrorContainer>
          Veuillez choisir un départ et une arrivée depuis les listes proposées
          lors de votre saisie
        </ErrorContainer>
      )}

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
