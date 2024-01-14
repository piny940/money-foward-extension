import {
  getCurrentBalance as _getCurrentBalance,
  getCurrentExpense as _getCurrentExpense,
  getCurrentIncome as _getCurrentIncome,
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
    const bankMoney = getBankMoney()
    const creditMoney = getCreditCardMoney()
    const cashMoney = getCashMoney()
    const transactionMoney = this.getTransactionsMoney()
    const previousRestSentMoney = this.previousRestSentMoney()
    console.log(`
    先月までの貯金:
      銀行: ${bankMoney} +
      クレカ: ${creditMoney} +
      現金: ${cashMoney} -
      今月の銀行収支: ${transactionMoney} -
      今月~3月の仕送り分差し引き: ${previousRestSentMoney}
    `)
    const save =
      getBankMoney() +
      getCreditCardMoney() +
      getCashMoney() -
      this.getTransactionsMoney() -
      this.previousRestSentMoney()
    return save - this.EXCLUDED_BANK - this.EXCLUDED_CASH
  }

  getCurrentBalance = () => _getCurrentBalance() + this.SENT_MONEY_PER_MONTH
  getCurrentIncome = () => _getCurrentIncome() + this.SENT_MONEY_PER_MONTH
  getCurrentExpense = () => _getCurrentExpense()

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
