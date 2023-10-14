import { useEffect, useState } from 'react'
import { TransactionInput } from './types'
import { loadTransactions, saveTransactions } from './storage'

export const useTransactions = () => {
  const [year, month] = [new Date().getFullYear(), new Date().getMonth() + 1]
  const [transactions, setTransactions] = useState<TransactionInput[]>([])

  const addTransaction = async () => {
    const nextId = transactions[transactions.length - 1]?.id + 1 || 0
    const newTransactions = [...transactions, { amount: '0', id: nextId }]
    setTransactions(newTransactions)
    await saveTransactions(year, month, newTransactions)
  }
  const deleteTransaction = async (id: number) => {
    const newTransactions = transactions.filter((trans) => trans.id !== id)
    setTransactions(newTransactions)
    await saveTransactions(year, month, newTransactions)
  }
  const updateTransaction = async (id: number, amount: string) => {
    const newTrans: TransactionInput = { id, amount }
    const newTransactions = transactions.map((trans) =>
      trans.id === id ? newTrans : trans
    )
    setTransactions(newTransactions)
    await saveTransactions(year, month, newTransactions)
  }
  const loadSetTransactions = async () => {
    const loadedTransactions = (await loadTransactions(year, month)) || []
    setTransactions(loadedTransactions)
  }

  useEffect(() => {
    void loadSetTransactions()
  }, [])

  return { transactions, addTransaction, deleteTransaction, updateTransaction }
}
