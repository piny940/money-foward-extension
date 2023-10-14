import React, { useMemo } from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import MoneyDisplay from '../components/MoneyDisplay'
import { Balance } from '../lib/balance'
import Transactions from '../components/Transactions'
import { useTransactions } from '../lib/hooks'

const RootDiv = styled.div`
  position: fixed;
  top: 50px;
  right: 30px;
`

const MoneyApp = (): JSX.Element => {
  const balance = useMemo(() => new Balance(), [])
  const prevSave = useMemo(() => balance.getPreviousSave(), [balance])
  const current = useMemo(() => balance.getCurrentBalance(), [balance])
  const { transactions, addTransaction, deleteTransaction, updateTransaction } =
    useTransactions()

  return (
    <RootDiv className="bg-body root card p-3">
      <h1>Money App</h1>
      <Transactions
        transactions={transactions}
        addTransaction={addTransaction}
        deleteTransaction={deleteTransaction}
        updateTransaction={updateTransaction}
      />
      <ul className="list-unstyled">
        <li>
          <MoneyDisplay amount={prevSave} title="先月までの貯金" />
        </li>
        <li>
          <span className="h5 w-100 d-inline-block text-center">+</span>
        </li>
        <li>
          <MoneyDisplay amount={current} title="今月の収支" />
        </li>
        <li>
          <span className="h5 w-100 d-inline-block text-center">=</span>
        </li>
        <li>
          <MoneyDisplay amount={prevSave + current} title="今月の貯金" />
        </li>
      </ul>
    </RootDiv>
  )
}

export default memo(MoneyApp)
