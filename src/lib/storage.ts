import { _fromStorage, _toStorage } from './_chrome'
import { TransactionInput } from './types'

const toStorage = _toStorage

const fromStorage = _fromStorage

const getTransactionsKey = (year: number, month: number) => {
  const TRANSACTIONS_KEY = 'transactions'
  return `${TRANSACTIONS_KEY}-${year}-${month}`
}
export const saveTransactions = async (
  year: number,
  month: number,
  transactions: TransactionInput[]
) => {
  await toStorage(getTransactionsKey(year, month), transactions)
}
export const loadTransactions = async (year: number, month: number) => {
  const key = getTransactionsKey(year, month)
  const data = await fromStorage([key])
  return data[key] as TransactionInput[]
}
