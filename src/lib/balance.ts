import {
  _getCurrentBalance,
  getBankMoney,
  getCashMoney,
  getCreditCardMoney,
} from './site'
import { Transaction, TransactionInput } from './types'

export class Balance {
  private SENT_MONEY_PER_MONTH = 40000
  private EXCLUDE_BANK = 200000
  private EXCLUDE_CASH = 100000
  private transactions: Transaction[]

  constructor(transactions: TransactionInput[]) {
    this.transactions = this.toTransactions(transactions)
  }

  getPreviousSave = () => {
    const save =
      getBankMoney() +
      getCreditCardMoney() +
      getCashMoney() -
      this.previousRestSentMoney()
    return save - this.EXCLUDE_BANK - this.EXCLUDE_CASH
  }

  getCurrentBalance = _getCurrentBalance

  private restMonths = () => {
    const month = new Date().getMonth() + 1
    return (15 - month) % 12
  }

  private previousRestSentMoney = () =>
    this.SENT_MONEY_PER_MONTH * (this.restMonths() + 1)

  private toTransactions = (transactions: TransactionInput[]) => {
    return transactions.map((trans) => ({
      id: trans.id,
      amount: parseInt(trans.amount) || 0,
    }))
  }
}
