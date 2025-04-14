import React, { CSSProperties, useMemo, JSX } from 'react'
import { memo } from 'react'
import { Balance } from '../lib/balance'
import Balances from '../components/Balances'

const MoneyApp = (): JSX.Element => {
  const balance = useMemo(() => new Balance(), [])
  const currentSave = useMemo(() => balance.getCurrentSave(), [balance])
  const currentBalance = useMemo(() => balance.getCurrentBalance(), [balance])
  const currentIncome = useMemo(() => balance.getCurrentIncome(), [balance])
  const rootStyle: CSSProperties = useMemo(
    () => ({ position: 'fixed', top: '50px', right: '30px', width: '300px' }),
    []
  )

  return (
    <div style={rootStyle} className="bg-body root card p-3">
      <h1>収支管理</h1>
      <div className="mt-2">
        <Balances
          prevSave={currentSave - currentBalance}
          currentBalance={currentBalance}
          currentIncome={currentIncome}
          currentSave={currentSave}
        />
      </div>
    </div>
  )
}

export default memo(MoneyApp)
