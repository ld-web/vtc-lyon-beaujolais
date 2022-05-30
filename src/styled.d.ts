import "styled-components";

interface IPalette {
  main: string;
  bg: string;
}

interface ISizes {
  menuButton: string;
}

interface IBreakpoints {
  desktop: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IPalette;
    sizes: ISizes;
    breakpoints: IBreakpoints;
  }
}
