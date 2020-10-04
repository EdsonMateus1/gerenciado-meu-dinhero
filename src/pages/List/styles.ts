import styled from "styled-components";

export const DivContainer = styled.div`
  height: 100%;
`;

export const DivCardContainer = styled.div``;

export const DivFilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .tag-filter {
    font-size: 1rem;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0px 20px;
    transition: opacity 0.3s;

    &::after {
      content: "";
      display: block;
      width: 60px;
      border-bottom: 10px solid ${({ theme }) => theme.colors.info};
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
