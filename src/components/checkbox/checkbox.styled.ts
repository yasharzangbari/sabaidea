import styled, { css } from "styled-components";
import { getCheckBoxToken } from "./checkbox.consts";

const token = getCheckBoxToken();

export const Wrapper = styled.label`
  min-width: ${token.wrapperSize}px;
  height: ${token.wrapperSize}px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: ${(token.size - token.boxSize) / 2}px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.spacing.md};
  }

  & > input {
    width: ${token.boxSize}px;
    height: ${token.boxSize}px;
    position: relative;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.rounding.sm};
    border: ${token.boxBorderWidth} solid
      ${({ theme }) => theme.colors.lightGray};
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;

    &:checked,
    &:indeterminate {
      ${({ theme }) => css`
        border-color: ${theme.colors.gold};
      `};
    }
    &:checked:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      transform: translate(-50%, -65%) rotate(45deg);
      width: ${token.checkWidth};
      height: ${token.checkHeight};
      border-bottom: ${token.checkStrokeWidth} solid
        ${({ theme }) => theme.colors.gold};
      border-right: ${token.checkStrokeWidth} solid
        ${({ theme }) => theme.colors.gold};
      box-sizing: border-box;
    }
    &:indeterminate:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      display: block;
      width: ${token.indeterminateWidth};
      height: ${token.checkStrokeWidth};
    }
    &:disabled {
      border-color: ${({ theme }) => theme.colors.gold};
      cursor: not-allowed;
      &:checked,
      &:indeterminate {
        ${({ theme }) => css`
          box-shadow: inset 0 0 0 ${token.boxSize / 2}px ${theme.colors.gold};
        `};
      }
      &:checked:before {
        border-color: ${({ theme }) => theme.colors.gold};
      }
    }
    &:after {
      content: "";
      display: block;
      width: ${token.stateWrapperSize};
      height: ${token.stateWrapperSize};
      transform: translate(
        ${token.wrapperSize / 2}px,
        -${token.wrapperSize / 2}px
      );
      border-radius: ${({ theme }) => theme.rounding.full};
    }
  }
`;
