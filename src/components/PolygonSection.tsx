import React from "react";
import styled from "styled-components";
import Polygon, { PolygonProps } from "./Polygon";

interface PolygonSectionProps extends PolygonProps {
  title: string;
}

const SectionHeading = styled.h2`
  margin-bottom: 0;
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
