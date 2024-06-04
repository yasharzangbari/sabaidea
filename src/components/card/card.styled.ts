import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: ${({ theme }) => theme.rounding.md};
  overflow: hidden;
 
  cursor: pointer;
  width: 200px;

  
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  > img {
    width: 100%;
    height: auto;
  }
  &:after {
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.8;
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: auto;
    top: -100px;
    left: 0px;
    content: "";
    -webkit-transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-in-out;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }
  &:hover:after {
    overflow: hidden;
    background: ${({ theme }) => theme.colors.gradient};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  &:hover > div {
    display: block;
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.spacing.md};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 140px;
`;

export const Rate = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.rounding.full};
  > svg {
    width: ${({ theme }) => theme.spacing.lg};
    color: white;
    fill: white;
    margin-left: ${({ theme }) => theme.spacing.ssm};
  }
`;

export const HiddenContent = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 20px;
  display: none;
  > svg {
    color: white;
    fill: white;
  }
  padding: ${({ theme }) => theme.spacing.sm};
  > div {
    display: flex;
    font-size: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.lightGray};
  }

  > span {
    display: block;
    color: ${({ theme }) => theme.colors.lightGray};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.spacing.md};
  }

  .title {
    font-size: ${({ theme }) => theme.spacing.lg};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 142px;
  }
`;
