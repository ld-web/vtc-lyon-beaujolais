import { DefaultTheme } from "styled-components";
import { DESKTOP_BREAKPOINT } from "../utils/rwd";

export const defaultTheme: DefaultTheme = {
  colors: {
    main: "#2F2B22",
    // bg: "#E3DED2",
    bg: "#FFF",
  },
  sizes: {
    menuButton: "35px",
  },
  breakpoints: {
    desktop: `${DESKTOP_BREAKPOINT}px`,
  },
};
