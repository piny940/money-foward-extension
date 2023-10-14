import { Banks, CreditCards } from './facilities'

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
