import React, { useMemo } from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import { Balance } from '../lib/balance'
import Balances from '../components/Balances'

const RootDiv = styled.div`
  position: fixed;
  top: 50px;
  right: 30px;
  width: 300px;
`

const MoneyApp = (): JSX.Element => {
  const balance = useMemo(() => new Balance(), [])
  const currentSave = useMemo(() => balance.getCurrentSave(), [balance])
  const currentBalance = useMemo(() => balance.getCurrentBalance(), [balance])
  const currentIncome = useMemo(() => balance.getCurrentIncome(), [balance])

  return (
    <RootDiv className="bg-body root card p-3">
      <h1>収支管理</h1>
      <div className="mt-2">
        <Balances
          prevSave={currentSave - currentBalance}
          currentBalance={currentBalance}
          currentIncome={currentIncome}
          currentSave={currentSave}
        />
      </div>
    </RootDiv>
  )
}

export default memo(MoneyApp)
