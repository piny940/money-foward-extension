import { OnlineShop, Banks, Cash, CreditCards, Prepaid } from './facilities'
import { moneyStrToNum } from './util'

export const _setRootEl = (): Element => {
  const rootEl = document.createElement('div')
  document.body.appendChild(rootEl)
  return rootEl
}

export const _getBankMoney = (): number => {
  return new Banks().getMoneyAmount()
}

export const _getCreditCardMoney = (): number => {
  return new CreditCards().getMoneyAmount()
}

export const _getCashMoney = (): number => {
  return new Cash().getMoneyAmount()
}

export const _getPrepaidMoney = (): number => {
  return new Prepaid().getMoneyAmount()
}

export const _getOnlineShop = (): number => {
  return new OnlineShop().getMoneyAmount()
}

export const _getCurrentIncome = () => {
  const tableEl = document.querySelector('table#monthly_total_table_home')
  const row = tableEl?.querySelector('tbody tr:nth-child(1)')
  const cell = row?.querySelector('td')
  return moneyStrToNum(cell?.textContent ?? '0')
}
export const _getCurrentExpense = () => {
  const tableEl = document.querySelector('table#monthly_total_table_home')
  const row = tableEl?.querySelector('tbody tr:nth-child(2)')
  const cell = row?.querySelector('td')
  return moneyStrToNum(cell?.textContent ?? '0')
}
export const _getBalance = () => {
  const tableEl = document.querySelector('table#monthly_total_table_home')
  const row = tableEl?.querySelector('tbody tr:nth-child(3)')
  const cell = row?.querySelector('td')
  return moneyStrToNum(cell?.textContent ?? '0')
}
