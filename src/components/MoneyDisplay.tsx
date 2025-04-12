import React, { memo } from 'react'

export type MoneyDisplayProps = {
  amount: number
  title: string
}

const MoneyDisplay = ({ amount, title }: MoneyDisplayProps): JSX.Element => {
  return (
    <div className="p-2">
      <h2 className="h5">{title}</h2>
      <p style={{ fontSize: '18px' }} className="d-flex align-items-center">
        <input
          style={{ fontSize: '18px' }}
          type="text"
          name="previous"
          id=""
          className="form-control flex-shrink-1 me-2"
          value={amount}
          disabled
        />
        円
      </p>
    </div>
  )
}

export default memo(MoneyDisplay)
