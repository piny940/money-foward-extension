import React from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import MoneyDisplay from '../components/MoneyDisplay'

const RootDiv = styled.div`
  position: fixed;
  top: 50px;
  right: 30px;
`

const MoneyApp = (): JSX.Element => {
  return (
    <RootDiv className="bg-body root card p-3">
      <h1>Money App</h1>
      <ul className="list-unstyled">
        <li>
          <MoneyDisplay amount={1000} title="所持金" />
        </li>
      </ul>
    </RootDiv>
  )
}

export default memo(MoneyApp)
