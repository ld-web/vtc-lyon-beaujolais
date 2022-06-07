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
  }

  .text-content {
    text-align: justify;
  }

  .content, .text-content {
    padding: 0.6rem;
  }

  h1 {
    font-size: 2rem;

    &.main-title {
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
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

  .center {
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .content, .text-content {
      padding: 0rem;
    }

    h1 {
      font-size: 2.4rem;

      &.main-title {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
    }
  }
`;

export default GlobalStyles;
