import styled from "styled-components";

export const AppContainer = styled.div`
  width: 800px;
  margin: auto;
  font-family: "Poppins";

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.black1};
    margin-bottom: ${({ theme }) => theme.spaces.m};
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spaces.s};
  }

  .title {
    font-family: "Ubuntu Mono";
    font-style: normal;
    font-size: 16px;
    line-height: 12px;
    color: ${({ theme }) => theme.colors.black2};
  }
`;
