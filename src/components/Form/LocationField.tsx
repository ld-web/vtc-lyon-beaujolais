import React from "react";
import { useFormContext } from "react-hook-form";
import AutocompleteInput from "../Tarifs/AutocompleteInput";
import Location from "../Tarifs/Location";
import { FormFieldError } from "./styles";

interface LocationProps {
  name: string;
  placeholder: string;
  errorMessage: string;
  callback: (location: Location) => void;
}

const LocationField = ({
  name,
  placeholder,
  errorMessage,
  callback,
}: LocationProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {errors[name] && <FormFieldError>{errorMessage}</FormFieldError>}
      <AutocompleteInput
        name={name}
        placeholder={placeholder}
        callback={callback}
      />
    </>
  );
};

export default LocationField;
