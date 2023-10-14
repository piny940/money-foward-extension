import React from 'react'
import { memo } from 'react'
import styled from 'styled-components'

const RootDiv = styled.div`
  position: fixed;
  top: 50px;
  right: 30px;
`

const MoneyApp = (): JSX.Element => {
  return (
    <RootDiv className="bg-body card p-3">
      <h1>Money App</h1>
    </RootDiv>
  )
}

export default memo(MoneyApp)
