import { Banks, CreditCards } from './facilities'
import { moneyStrToNum } from './util'

export const _setRootEl = (): Element => {
  const rootEl = document.createElement('div')
  document.body.appendChild(rootEl)
  return rootEl
}

export const _getBankMoney = (): number => {
  return new Banks().getBankMoney()
}

export const _getCreditCardMoney = (): number => {
  return new CreditCards().getCreditCardMoney()
}

export const _getBalance = () => {
  const tableEl = document.querySelector('table#monthly_total_table_home')
  const row = tableEl?.querySelector('tbody tr:nth-child(3)')
  const cell = row?.querySelector('td')
  return moneyStrToNum(cell?.textContent ?? '0')
}
