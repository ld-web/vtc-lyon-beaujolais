import React, { ReactChild, ReactChildren } from "react";
import { useMediaQuery } from "react-responsive";

interface BreakpointProps {
  children: ReactChild | ReactChildren;
}

export const DESKTOP_BREAKPOINT = 992;

export const Desktop = ({ children }: BreakpointProps) => {
  const isDesktop = useMediaQuery({ minWidth: DESKTOP_BREAKPOINT });
  return isDesktop ? <>{children}</> : null;
};

export const Mobile = ({ children }: BreakpointProps) => {
  const isMobile = useMediaQuery({ maxWidth: DESKTOP_BREAKPOINT });
  return isMobile ? <>{children}</> : null;
};
