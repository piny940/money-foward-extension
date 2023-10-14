import React, { useEffect } from 'react'
import { memo } from 'react'
import AddBankButton from './AddBankButton'
import TransactionItem from './TransactionItem'
import { TransactionInput } from '../lib/types'
import { loadTransactions, saveTransactions } from '../lib/storage'

const Transactions = (): JSX.Element => {
  const [year, month] = [new Date().getFullYear(), new Date().getMonth() + 1]
  const [transactions, setTransactions] = React.useState<TransactionInput[]>([])

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
  const onValueChange = async (id: number, amount: string) => {
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

  return (
    <div>
      <h2 className="h5">
        銀行の収支
        <span className="ms-2">
          <AddBankButton onClick={addTransaction} />
        </span>
      </h2>
      <ul className="ps-0">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="d-flex align-items-center mb-1">
            <TransactionItem
              deleteTransaction={() => deleteTransaction(transaction.id)}
              onValueChange={(amount) => onValueChange(transaction.id, amount)}
              transaction={transaction}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default memo(Transactions)
