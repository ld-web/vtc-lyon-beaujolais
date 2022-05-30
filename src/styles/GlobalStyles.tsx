import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }) => theme.colors.bg};
    font-size: 20px;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.main};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  section, .content {
    max-width: 1200px;
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    section, .content {
      padding: 0.6rem;
    }
  }
`;

export default GlobalStyles;
