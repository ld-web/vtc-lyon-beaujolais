import React from "react";
import styled from "styled-components";
import Polygon, { PolygonProps } from "./Polygon";

interface PolygonSectionProps extends PolygonProps {
  title: string;
}

const SectionHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

export default function PolygonSection({
  title,
  children,
  ...rest
}: PolygonSectionProps) {
  return (
    <section>
      <SectionHeading>{title}</SectionHeading>
      <Polygon {...rest}>{children}</Polygon>
    </section>
  );
}
