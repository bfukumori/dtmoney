import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 860px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme }) => theme.colors['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant, theme }) =>
    variant === 'green' &&
    css`
      background-color: ${theme.colors['green-700']};

      @media (max-width: 860px) {
        grid-column: 1/3;
      }

      @media (max-width: 580px) {
        grid-column: initial;
      }
    `}
`
