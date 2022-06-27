import styled from "styled-components";

export const FormFieldError = styled.div`
  color: #f00;
  font-size: small;
`;

export const Form = styled.form`
  & > div {
    position: relative;
  }

  input {
    margin-bottom: 0.6rem;
  }

  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    display: block;
    width: 100%;
    padding: 0.8rem 0.4rem;
    font-size: large;
  }

  textarea {
    resize: vertical;
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
