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
  width: 300px;
`

const MoneyApp = (): JSX.Element => {
  const {
    transactions,
    isLoading,
    hasChanged,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  } = useTransactions()
  const balance = useMemo(() => new Balance(transactions), [transactions])
  const prevSave = useMemo(() => balance.getPreviousSave(), [balance])
  const current = useMemo(() => balance.getCurrentBalance(), [balance])
  const currentIncome = useMemo(() => balance.getCurrentIncome(), [balance])

  return (
    <RootDiv className="bg-body root card p-3">
      <h1>収支管理</h1>
      <Transactions
        transactions={transactions}
        addTransaction={addTransaction}
        deleteTransaction={deleteTransaction}
        updateTransaction={updateTransaction}
      />
      {isLoading && <p>ロード中</p>}
      {hasChanged && (
        <p className="text-success small m-0 w-100 text-end">保存しました</p>
      )}
      <div className="mt-2">
        <Balances
          prevSave={prevSave}
          currentBalance={current}
          currentIncome={currentIncome}
          currentSave={prevSave + current}
        />
      </div>
    </RootDiv>
  )
}

export default memo(MoneyApp)
