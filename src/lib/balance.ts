import {
  getCurrentBalance as _getCurrentBalance,
  getCurrentExpense as _getCurrentExpense,
  getCurrentIncome as _getCurrentIncome,
  getOnlineShop,
  getBankMoney,
  getCashMoney,
  getCreditCardMoney,
} from './site'

export class Balance {
  private SENT_MONEY_PER_MONTH = 40000
  private EXCLUDED_BANK = 0
  private EXCLUDED_CASH = 70000

  // 今月の貯金
  getCurrentSave = () => {
    const bankMoney = getBankMoney()
    const creditMoney = getCreditCardMoney()
    const cashMoney = getCashMoney()
    const amazonMoney = getOnlineShop()
    const restSentMoney = this.restSentMoney()
    console.log(`
    今月の貯金:
      銀行: ${bankMoney}
      + クレカ: ${creditMoney}
      + 現金: ${cashMoney}
      + Amazon: ${amazonMoney}
      - 来月~3月の仕送り分差し引き: ${restSentMoney}
      - 除外する銀行預金: ${this.EXCLUDED_BANK}
      - 除外する現金: ${this.EXCLUDED_CASH}
    `)
    const save =
      bankMoney +
      creditMoney +
      amazonMoney +
      cashMoney -
      restSentMoney -
      this.EXCLUDED_BANK -
      this.EXCLUDED_CASH
    return save
  }
  getCurrentBalance = () => _getCurrentBalance() + this.SENT_MONEY_PER_MONTH // 今月の収支
  getCurrentIncome = () => _getCurrentIncome() + this.SENT_MONEY_PER_MONTH // 今月の収入
  getCurrentExpense = () => _getCurrentExpense() // 今月の支出

  private restMonths = () => {
    const month = new Date().getMonth() + 1
    return (15 - month) % 12
  }

  private restSentMoney = () => this.SENT_MONEY_PER_MONTH * this.restMonths()
}
