import React from "react";
import { useFormContext } from "react-hook-form";

const NbLuggages = () => {
  const { register } = useFormContext();

  return (
    <input
      type="number"
      {...register("nbLuggage")}
      placeholder="Nombre de bagages"
    />
  );
};

export default NbLuggages;
