import React from "react";
import { useFormContext } from "react-hook-form";

const TripTime = () => {
  const { register } = useFormContext();

  return <input type="time" {...register("tripTime")} />;
};

export default TripTime;
