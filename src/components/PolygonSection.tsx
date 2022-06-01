import React from "react";
import styled from "styled-components";
import Polygon, { PolygonDirection, PolygonProps } from "./Polygon";

interface PolygonSectionProps extends PolygonProps {
  title: string;
}

interface HeadingProps {
  readonly direction: PolygonDirection;
}

const SectionHeading = styled.h2<HeadingProps>`
  font-size: 1.8rem;
  margin-bottom: 0;
  text-align: ${({ direction }) =>
    direction === PolygonDirection.DOWN ? "right" : "left"};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2rem;
    margin-bottom: -2.5rem;
  }
`;

export default function PolygonSection({
  title,
  direction,
  children,
  ...rest
}: PolygonSectionProps) {
  return (
    <section>
      <SectionHeading direction={direction} className="content">
        {title}
      </SectionHeading>
      <Polygon direction={direction} {...rest}>
        {children}
      </Polygon>
    </section>
  );
}
