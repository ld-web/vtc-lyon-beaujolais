import { DefaultTheme } from "styled-components";
import { DESKTOP_BREAKPOINT } from "../utils/rwd";

export const defaultTheme: DefaultTheme = {
  colors: {
    main: "#2F2B22",
    secondary: "#00C9A9",
    darkblue: "#044857",
    // bg: "#E3DED2",
    bg: "#FFF",
    footerBg: "#E3DED2",
    headerBg: "white",
  },
  sizes: {
    menuButton: "35px",
  },
  breakpoints: {
    desktop: `${DESKTOP_BREAKPOINT}px`,
  },
};
