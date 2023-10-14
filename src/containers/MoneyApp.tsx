import React from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import MoneyDisplay from '../components/MoneyDisplay'
import { Balance } from '../lib/balance'

const RootDiv = styled.div`
  position: fixed;
  top: 50px;
  right: 30px;
`

const MoneyApp = (): JSX.Element => {
  const prev = new Balance().getPreviousSave()

  return (
    <RootDiv className="bg-body root card p-3">
      <h1>Money App</h1>
      <ul className="list-unstyled">
        <li>
          <MoneyDisplay amount={prev} title="先月までの貯金" />
        </li>
      </ul>
    </RootDiv>
  )
}

export default memo(MoneyApp)
