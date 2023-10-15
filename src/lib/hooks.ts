import { useEffect, useState } from 'react'
import { TransactionInput } from './types'
import { loadTransactions, saveTransactions } from './storage'

export const useTransactions = () => {
  const [year, month] = [new Date().getFullYear(), new Date().getMonth() + 1]
  const [transactions, setTransactions] = useState<TransactionInput[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasChanged, setHasChanged] = useState(false)

  const addTransaction = async () => {
    const nextId = transactions[transactions.length - 1]?.id + 1 || 0
    const newTransactions = [...transactions, { amount: '0', id: nextId }]
    setTransactions(newTransactions)
    await saveTransactions(year, month, newTransactions)
    setHasChanged(true)
  }
  const deleteTransaction = async (id: number) => {
    const newTransactions = transactions.filter((trans) => trans.id !== id)
    setTransactions(newTransactions)
    await saveTransactions(year, month, newTransactions)
    setHasChanged(true)
  }
  const updateTransaction = async (id: number, amount: string) => {
    const newTrans: TransactionInput = { id, amount }
    const newTransactions = transactions.map((trans) =>
      trans.id === id ? newTrans : trans
    )
    setTransactions(newTransactions)
    await saveTransactions(year, month, newTransactions)
    setHasChanged(true)
  }
  const loadSetTransactions = async () => {
    const loadedTransactions = (await loadTransactions(year, month)) || []
    setTransactions(loadedTransactions)
    setIsLoading(false)
  }

  useEffect(() => {
    void loadSetTransactions()
  }, [])

  return {
    transactions,
    isLoading,
    hasChanged,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  }
}
