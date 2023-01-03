import styled from "styled-components";

interface ButtonProps {
  hover?: boolean;
  hoverColor?: string;
}

export const ButtonContainer = styled.div<ButtonProps>`
  .btn {
    padding: ${({ theme }) => `${theme.spaces.xs} ${theme.spaces.s}`};
    background: ${({ theme }) => theme.colors.grey1};
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    outline: none;
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    display: flex;
    cursor: pointer;
    align-items: center;
    text-align: center;
    justify-content: center;

    &:hover {
      background-color: ${(props) => props.hover && props.hoverColor};
    }
  }

  .disabled {
    background: ${({ theme }) => theme.colors.grey1};;
    color: ${({ theme }) => theme.colors.grey2} !important;
    pointer-events: none;
  }
  .default-btn {
    border: none;
    color: ${({ theme }) => theme.colors.black3};
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    background-color: ${({ theme }) => theme.colors.grey1};;
  }

  .outline-btn {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .text-btn {
    border: transparent;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .disabled-shadow {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
  }

  .left {
    margin-right: ${({ theme }) => theme.spaces.xxs};
    width: 14px;
  }

  .right {
    margin-left: ${({ theme }) => theme.spaces.xxs};
    width: 14px;
  }

  .primary-btn {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
    color: ${({ theme }) => theme.colors.white};
  }

  .sm-btn {
    width: 73px;
    height: 32px;
  }

  .md-btn {
    width: 81px;
    height: 36px;
  }

  .lg-btn {
    width: 93px;
    height: 42px;
  }
  .secondary-btn {
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
    color: ${({ theme }) => theme.colors.white};
  }

  .danger-btn {
    background: ${({ theme }) => theme.colors.danger};
    box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
    color: ${({ theme }) => theme.colors.white};
  }
`;
