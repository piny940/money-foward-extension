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
  const onChange = (id: number, amount: string) => {
    const trans: TransactionInput = { id, amount }
    setTransactions([trans])
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
          <li key={transaction.id} className="d-flex align-items-center">
            <TransactionItem
              onValueChange={onChange}
              transaction={transaction}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default memo(Transactions)
