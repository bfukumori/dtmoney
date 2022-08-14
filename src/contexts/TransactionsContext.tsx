import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface createNewTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextData {
  transactions: Transaction[]
  fetchTransactions: (query: string) => Promise<void>
  createNewTransaction: (data: createNewTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionContext = createContext({} as TransactionContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)
  }, [])

  const createNewTransaction = useCallback(
    async (data: createNewTransactionInput) => {
      const { description, price, category, type } = data
      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionContext)
