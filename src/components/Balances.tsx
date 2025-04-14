import React, { CSSProperties, memo, useMemo, JSX } from 'react'
import MoneyDisplay from './MoneyDisplay'

export type BalancesProps = {
  prevSave: number
  currentBalance: number
  currentIncome: number
  currentSave: number
}

const Balances = ({
  prevSave,
  currentBalance,
  currentIncome,
  currentSave,
}: BalancesProps): JSX.Element => {
  const minusSpanStyle: CSSProperties = useMemo(
    () => ({ marginTop: '-60px', marginBottom: '-20px' }),
    []
  )
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
            <span
              style={minusSpanStyle}
              className="h5 p-0 w-100 d-inline-block text-center"
            >
              -
            </span>
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
