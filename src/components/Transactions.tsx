import React from 'react'
import { memo } from 'react'
import AddBankButton from './AddBankButton'
import TransactionItem from './TransactionItem'
import { TransactionInput } from '../lib/types'

const Transactions = (): JSX.Element => {
  const [transactions, setTransactions] = React.useState<TransactionInput[]>([])

  const addTransaction = () => {
    const nextId = transactions[transactions.length - 1]?.id + 1 || 0
    setTransactions([...transactions, { amount: '0', id: nextId }])
  }
  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((trans) => trans.id !== id))
  }
  const onValueChange = (id: number, amount: string) => {
    const newTrans: TransactionInput = { id, amount }
    setTransactions(
      transactions.map((trans) => (trans.id === id ? newTrans : trans))
    )
  }

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
