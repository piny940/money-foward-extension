import {
  _getBalance,
  _getBankMoney,
  _getCashMoney,
  _getCreditCardMoney,
  _setRootEl,
  _getCurrentExpense,
  _getCurrentIncome,
} from '../money-forward/site'

export const setRootEl = _setRootEl
export const getBankMoney = _getBankMoney
export const getCreditCardMoney = _getCreditCardMoney
export const getCashMoney = _getCashMoney
export const getCurrentBalance = _getBalance
export const getCurrentIncome = _getCurrentIncome
export const getCurrentExpense = _getCurrentExpense
