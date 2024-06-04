import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing["6xl"]};
  margin-top: ${({ theme }) => theme.spacing.ssm};
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1200px) {
    flex: 1 1 calc(33.33% - 20px);
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
    justify-content: space-around;
  }
`;
