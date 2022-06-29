import React from "react";
import styled from "styled-components";
import SVGAmex from "./SVGAmex";
import SVGCard from "./SVGCard";
import SVGCash from "./SVGCash";

const PaymentsContainer = styled.div`
  svg {
    max-width: 70px;
    max-height: 50px;
  }
`;

const SVGPayments = () => (
  <PaymentsContainer>
    <SVGCard />
    <SVGAmex />
    <SVGCash />
  </PaymentsContainer>
);

export default SVGPayments;
