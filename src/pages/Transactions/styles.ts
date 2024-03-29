import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme.colors['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;

      @media (max-width: 580px) {
        display: none;
      }
    }

    &:nth-child(3) {
      @media (max-width: 860px) {
        display: none;
      }
    }

    &:nth-child(2) {
      @media (max-width: 580px) {
        text-align: right;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`

interface PriceHightlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHightlight = styled.span<PriceHightlightProps>`
  color: ${({ variant, theme }) =>
    variant === 'income' ? theme.colors['green-300'] : theme.colors['red-300']};
`
