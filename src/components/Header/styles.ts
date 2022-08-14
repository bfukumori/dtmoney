import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['green-500']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['green-700']};
    transition: background-color 0.2s;
  }
`
