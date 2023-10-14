import React, { memo } from 'react'
import styled from 'styled-components'

export type MoneyDisplayProps = {
  amount: number
  title: string
}
const MoneyP = styled.p`
  font-size: 18px;

  input {
    font-size: 18px;
  }
`

const MoneyDisplay = ({ amount, title }: MoneyDisplayProps): JSX.Element => {
  return (
    <div className="card p-3">
      <h2 className="h5">{title}</h2>
      <MoneyP className="d-flex align-items-center">
        <input
          type="text"
          name="previous"
          id=""
          className="form-control flex-shrink-1 me-2"
          value={amount}
        />
        円
      </MoneyP>
    </div>
  )
}

export default memo(MoneyDisplay)
