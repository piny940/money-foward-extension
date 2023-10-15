import { _fromStorage as fromChrome, _toStorage as toChrome } from './_chrome'
import {
  _toStorage as toFirebase,
  _fromStorage as fromFirebase,
} from './_firebase'
import { TransactionInput } from './types'

const toStorage = async <T>(key: string, value: T) => {
  await toChrome(key, value)
  await toFirebase(key, value)
}

const fromStorage = async <T>(key: string): Promise<T | undefined> => {
  const firebaseData = await fromFirebase<T>(key)
  if (firebaseData) return firebaseData
  return fromChrome<T>(key)
}

const getTransactionsKey = (year: number, month: number) => {
  const TRANSACTIONS_KEY = 'transactions'
  return `${TRANSACTIONS_KEY}-${year}-${month}`
}
export const saveTransactions = async (
  year: number,
  month: number,
  transactions: TransactionInput[]
) => {
  await toStorage<TransactionInput[]>(
    getTransactionsKey(year, month),
    transactions
  )
}
export const loadTransactions = async (year: number, month: number) => {
  const key = getTransactionsKey(year, month)
  const data = (await fromStorage<TransactionInput[]>(key)) || []
  return data
}
