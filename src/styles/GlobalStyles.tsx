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

  .content {
    max-width: 1200px;
    margin: auto;
    padding: 0.6rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  section {
    p {
      text-align: justify;
      line-height: 1.25rem; 
    }

    h2 {
      text-align: center;
      text-transform: uppercase;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .content {
      padding: 0rem;
    }
  }
`;

export default GlobalStyles;
