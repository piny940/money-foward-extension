import React, { useMemo } from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import { Balance } from '../lib/balance'
import Transactions from '../components/Transactions'
import { useTransactions } from '../lib/hooks'
import Balances from '../components/Balances'

const RootDiv = styled.div`
  position: fixed;
  top: 50px;
  right: 30px;
`

const MoneyApp = (): JSX.Element => {
  const {
    transactions,
    isLoading,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  } = useTransactions()
  const balance = useMemo(() => new Balance(transactions), [transactions])
  const prevSave = useMemo(() => balance.getPreviousSave(), [balance])
  const current = useMemo(() => balance.getCurrentBalance(), [balance])

  return (
    <RootDiv className="bg-body root card p-3">
      <h1>収支管理</h1>
      {isLoading ? (
        <p>ロード中</p>
      ) : (
        <>
          <Transactions
            transactions={transactions}
            addTransaction={addTransaction}
            deleteTransaction={deleteTransaction}
            updateTransaction={updateTransaction}
          />
          <Balances
            prevSave={prevSave}
            currentBalance={current}
            currentSave={prevSave + current}
          />
        </>
      )}
    </RootDiv>
  )
}

export default memo(MoneyApp)
