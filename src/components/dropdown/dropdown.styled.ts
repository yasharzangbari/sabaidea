import styled, { css } from "styled-components";
import { getDropDownToken } from "./dropdown.consts";

const token = getDropDownToken();

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${token.wrapperSize}px;
  border: ${token.boxBorderWidth} solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.rounding.lg};
  font-size: ${({ theme }) => theme.spacing.md};
`;

export const DropDownLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DropDownText = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const DropDownContent = styled.div`
  background: ${({ theme }) => theme.colors.darkBlack};
  border-radius: ${({ theme }) => theme.rounding.lg};
  margin-top: ${({ theme }) => theme.spacing.ssm};
  border: ${token.boxBorderWidth} solid ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.spacing.lg};
`;
