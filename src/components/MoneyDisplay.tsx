import React, { memo } from 'react'

export type MoneyDisplayProps = {
  amount: number
  title: string
}

const MoneyDisplay = ({ amount, title }: MoneyDisplayProps): JSX.Element => {
  return (
    <div className="card p-3">
      <h2>{title}</h2>
      <p>{amount}円</p>
    </div>
  )
}

export default memo(MoneyDisplay)
