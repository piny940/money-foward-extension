import { _fromStorage as fromChrome, _toStorage as toChrome } from './_chrome'
import {
  _toStorage as toFirebase,
  _fromStorage as fromFirebase,
} from './_firebase'
import { TransactionInput } from './types'

const toStorage = (key: string, value: any) => {
  toChrome(key, value)
  toFirebase(key, value)
}

const fromStorage = (key: string) => {
  const firebaseData = fromFirebase(key)
  if (firebaseData) return firebaseData
  return fromChrome([key])
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
  await toStorage(getTransactionsKey(year, month), transactions)
}
export const loadTransactions = async (year: number, month: number) => {
  const key = getTransactionsKey(year, month)
  const data = await fromStorage(key)
  return data[key] as TransactionInput[]
}
