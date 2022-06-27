import styled from "styled-components";

export const EngineContainer = styled.div`
  padding: 1.8rem 0.8rem;
  box-shadow: 0 0 20px 7px rgb(0 0 0 / 27%);

  h2 {
    margin-top: 0;
    text-align: center;
  }

  button#reservation {
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.colors.main};
    border: none;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    width: 100%;
    padding: 0.8rem 0.4rem;
    font-size: large;

    &:hover {
      filter: brightness(85%);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 2rem;
  }
`;

export const EngineEstimate = styled.div`
  margin-top: 2rem;
  font-size: xx-large;
  text-align: center;
  font-weight: bold;
`;

export const ErrorContainer = styled.div`
  color: #f00;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
