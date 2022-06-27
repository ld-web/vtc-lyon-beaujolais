import React from "react";
import { useFormContext } from "react-hook-form";

const NbPeople = () => {
  const { register } = useFormContext();

  return (
    <input
      type="number"
      {...register("nbPeople")}
      placeholder="Nombre de personnes"
    />
  );
};

export default NbPeople;
