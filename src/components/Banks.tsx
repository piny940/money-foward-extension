import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { memo } from 'react'
import styled from 'styled-components'

const BankInput = styled.input`
  font-size: 16px;
`

const Banks = (): JSX.Element => {
  const [transactions, setTransactions] = React.useState<string[]>([])

  const onChange = (amount: string) => {
    setTransactions([amount])
  }

  return (
    <div>
      <h2 className="h5">銀行の収支</h2>
      <ul className="ps-0">
        <li className="d-flex align-items-center">
          <BankInput
            type="text"
            name="bank1"
            id=""
            className="form-control flex-shrink-1 me-2"
            value={transactions[0]}
            onChange={(e) => onChange(e.target.value)}
          />
          円
        </li>
      </ul>
    </div>
  )
}
export default memo(Banks)
