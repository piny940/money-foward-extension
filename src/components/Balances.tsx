import React, { memo } from 'react'
import MoneyDisplay from './MoneyDisplay'

export type BalancesProps = {
  prevSave: number
  currentBalance: number
  currentSave: number
}

const Balances = ({
  prevSave,
  currentBalance,
  currentSave,
}: BalancesProps): JSX.Element => {
  return (
    <ul className="list-unstyled">
      <li>
        <MoneyDisplay amount={prevSave} title="先月までの貯金" />
      </li>
      <li>
        <span className="h5 w-100 d-inline-block text-center">+</span>
      </li>
      <li>
        <MoneyDisplay amount={currentBalance} title="今月の収支" />
      </li>
      <li>
        <span className="h5 w-100 d-inline-block text-center">=</span>
      </li>
      <li>
        <MoneyDisplay amount={currentSave} title="今月の貯金" />
      </li>
    </ul>
  )
}
export default memo(Balances)
