import styled from "styled-components";

export const EngineContainer = styled.div`
  padding: 1.8rem 0.8rem;
  box-shadow: 0 0 20px 7px rgb(0 0 0 / 27%);

  h2 {
    margin-top: 0;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 2rem;
  }
`;

export const EngineForm = styled.form`
  & > div {
    position: relative;
  }

  input {
    margin-bottom: 0.6rem;
  }

  input,
  button {
    font-family: "Poppins", sans-serif;
    display: block;
    width: 100%;
    padding: 0.8rem 0.4rem;
    font-size: large;
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.colors.green};
    border: none;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      filter: brightness(85%);
    }
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

export const FormFieldError = styled.div`
  color: #f00;
  font-size: small;
`;
