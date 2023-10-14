import styled from 'styled-components'
import { TransactionInput } from '../lib/types'
import React, { memo } from 'react'

export type TransactionItemProps = {
  transaction: TransactionInput
  onValueChange: (id: number, amount: string) => void
}
const BankInput = styled.input`
  font-size: 16px;
`

const TransactionItem = ({
  transaction,
  onValueChange,
}: TransactionItemProps): JSX.Element => {
  return (
    <>
      <BankInput
        type="text"
        name="bank1"
        id=""
        className="form-control flex-shrink-1 me-2"
        value={transaction.amount}
        onChange={(e) => onValueChange(transaction.id, e.target.value)}
      />
      円
    </>
  )
}
export default memo(TransactionItem)
