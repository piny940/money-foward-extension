import {
  _getBankMoney,
  _getCreditCardMoney,
  _setRootEl,
} from '../money-forward/site'
import { Balance } from './balance'

export const setRootEl = _setRootEl
export const getBankMoney = _getBankMoney
export const getCreditCardMoney = _getCreditCardMoney
console.log(new Balance().getPreviousSave())
