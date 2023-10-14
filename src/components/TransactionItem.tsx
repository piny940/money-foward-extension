import styled from 'styled-components'
import { TransactionInput } from '../lib/types'
import React, { memo } from 'react'

export type TransactionItemProps = {
  transaction: TransactionInput
  onValueChange: (amount: string) => void
  deleteTransaction: () => void
}
const BankInput = styled.input`
  font-size: 16px;
`

const TransactionItem = ({
  transaction,
  onValueChange,
  deleteTransaction,
}: TransactionItemProps): JSX.Element => {
  return (
    <>
      <button
        onClick={deleteTransaction}
        className="flex-shrink-0 btn btn-danger btn-sm"
      >
        削除
      </button>
      <BankInput
        type="text"
        name="bank1"
        id=""
        className="form-control flex-shrink-1 mx-2"
        value={transaction.amount}
        onChange={(e) => onValueChange(e.target.value)}
      />
      円
    </>
  )
}
export default memo(TransactionItem)
