import { PageProps } from "gatsby";
import React from "react";

const ContactReservation = ({ location }: PageProps) => {
  const query = new URLSearchParams(location.search);
  console.log(query.get("tripDate"));

  return <h1>CONTACT & RESERVATION</h1>;
};

export default ContactReservation;
