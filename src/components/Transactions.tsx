import React from 'react'
import { memo } from 'react'
import AddBankButton from './AddBankButton'
import TransactionItem from './TransactionItem'
import { TransactionInput } from '../lib/types'

export type TransactionsProps = {
  transactions: TransactionInput[]
  addTransaction: () => void
  deleteTransaction: (id: number) => void
  updateTransaction: (id: number, amount: string) => void
}

const Transactions = ({
  transactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
}: TransactionsProps): JSX.Element => {
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
              onValueChange={(amount) =>
                updateTransaction(transaction.id, amount)
              }
              transaction={transaction}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default memo(Transactions)
