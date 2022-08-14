import { useMemo } from 'react'
import { useTransactions } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useTransactions()

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
        } else {
          acc.outcome += transaction.price
        }
        acc.total = acc.income - acc.outcome

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
