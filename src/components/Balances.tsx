import React, { memo } from 'react'
import MoneyDisplay from './MoneyDisplay'
import styled from 'styled-components'

export type BalancesProps = {
  prevSave: number
  currentBalance: number
  currentIncome: number
  currentSave: number
}
const CurrentMinusSpan = styled.span`
  margin-top: -60px;
  margin-bottom: -20px;
`

const Balances = ({
  prevSave,
  currentBalance,
  currentIncome,
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
        <div className="row align-items-center">
          <div className="col-6">
            <MoneyDisplay amount={currentIncome} title="今月の収入" />
            <CurrentMinusSpan className="h5 p-0 w-100 d-inline-block text-center">
              -
            </CurrentMinusSpan>
            <MoneyDisplay
              amount={currentIncome - currentBalance}
              title="今月の支出"
            />
          </div>
          <div className="col-6">
            <MoneyDisplay amount={currentBalance} title="今月の収支" />
          </div>
        </div>
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
