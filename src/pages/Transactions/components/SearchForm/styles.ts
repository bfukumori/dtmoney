import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme.colors['gray-900']};
    color: ${({ theme }) => theme.colors['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors['green-300']};
    color: ${({ theme }) => theme.colors['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors['green-500']};
      border: 1px solid ${({ theme }) => theme.colors['green-500']};
      color: ${({ theme }) => theme.colors.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    span {
      @media (max-width: 390px) {
        display: none;
      }
    }
  }
`
