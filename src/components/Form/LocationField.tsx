import React, { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { geocodeLocation } from "../../services/trip";
import AutocompleteInput from "./AutocompleteInput";
import Location from "../Tarifs/Location";
import { FormFieldError } from "./styles";

interface LocationProps {
  name: string;
  placeholder: string;
  errorMessage: string;
  callback?: ((location: Location) => void) | null;
}

const LocationField = ({
  name,
  placeholder,
  errorMessage,
  callback = null,
}: LocationProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selected = useCallback((location: Location) => {
    console.log(location);
    setValue(name, location.format());
    setValue(`${name}Point`, location.getPoint());
    callback && callback(location);
  }, []);

  return (
    <>
      {errors[name] && <FormFieldError>{errorMessage}</FormFieldError>}
      <AutocompleteInput
        name={name}
        placeholder={placeholder}
        itemSelectedCallback={selected}
        getItems={geocodeLocation}
      />
      <input type="hidden" {...register(`${name}Point`)} />
    </>
  );
};

export default LocationField;
