import React, { memo } from 'react'

export type MoneyDisplayProps = {
  amount: number
  title: string
}

const MoneyDisplay = ({ amount, title }: MoneyDisplayProps): JSX.Element => {
  return (
    <div className="card p-3">
      <h2 className="h5">{title}</h2>
      <p className="d-flex align-items-center">
        <input
          type="text"
          name="previous"
          id=""
          className="form-control flex-shrink-1 me-2"
          value={amount}
        />
        円
      </p>
    </div>
  )
}

export default memo(MoneyDisplay)
