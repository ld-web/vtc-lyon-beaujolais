import React, { ReactChild, ReactChildren } from "react";
import styled from "styled-components";

export enum PolygonDirection {
  UP = "up",
  DOWN = "down",
}

export enum PolygonBackground {
  LIGHT = "light",
  DARK = "dark",
  DARK_BLUE = "darkblue",
  GREEN = "green",
}

export interface PolygonProps {
  children: ReactChild | ReactChildren;
  direction: PolygonDirection;
  bg: PolygonBackground;
}

const PolygonContainer = styled.div`
  padding: 8.5rem 0;

  p {
    font-size: 1.15rem;
    line-height: 1.6rem;
  }

  &.up {
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
  }

  &.down {
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.footerBg};
  }

  &.dark {
    background-color: ${({ theme }) => theme.colors.main};
    color: white;
  }

  &.darkblue {
    background-color: ${({ theme }) => theme.colors.darkblue};
    color: white;
  }

  &.green {
    background-color: ${({ theme }) => theme.colors.green};
    color: white;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &.up {
      clip-path: polygon(0 30%, 100% 0, 100% 70%, 0 100%);
    }

    &.down {
      clip-path: polygon(0 0, 100% 30%, 100% 100%, 0 70%);
    }
  }
`;

export default function Polygon({ direction, bg, children }: PolygonProps) {
  return (
    <PolygonContainer className={`${direction} ${bg}`}>
      <p className="content">{children}</p>
    </PolygonContainer>
  );
}
