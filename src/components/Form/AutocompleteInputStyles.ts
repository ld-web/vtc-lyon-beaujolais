import styled from "styled-components";

export const ItemsContainer = styled.div`
  position: absolute;
  top: 100%;
  z-index: 10;
  background-color: #fff;
  border: 1px solid black;

  & > div {
    cursor: pointer;
    padding: 0.5rem;

    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.darkblue};
    }
  }
`;
