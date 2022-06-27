import React from "react";
import { useFormContext } from "react-hook-form";

const TripDate = () => {
  const { register } = useFormContext();

  return <input type="date" {...register("tripDate")} />;
};

export default TripDate;
