import {
  _getCurrentBalance,
  getBankMoney,
  getCashMoney,
  getCreditCardMoney,
} from './site'
import { Transaction, TransactionInput } from './types'

export class Balance {
  private SENT_MONEY_PER_MONTH = 40000
  private EXCLUDED_BANK = 200000
  private EXCLUDED_CASH = 70000
  private transactions: Transaction[]

  constructor(transactions: TransactionInput[]) {
    this.transactions = this.toTransactions(transactions)
  }

  getPreviousSave = () => {
    const save =
      getBankMoney() +
      getCreditCardMoney() +
      getCashMoney() -
      this.getTransactionsMoney() -
      this.previousRestSentMoney()
    return save - this.EXCLUDED_BANK - this.EXCLUDED_CASH
  }

  getCurrentBalance = () => _getCurrentBalance() + this.SENT_MONEY_PER_MONTH

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
  private getTransactionsMoney = () => {
    return this.transactions.reduce((acc, cur) => acc + cur.amount, 0)
  }
}
