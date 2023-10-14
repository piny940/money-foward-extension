import { getBankMoney, getCreditCardMoney } from './site'

export class Balance {
  private SENT_MONEY_PER_MONTH = 40000
  private EXCLUDE_BANK = 200000
  private EXCLUDE_CASH = 100000

  getPreviousSave = () => {
    const save =
      getBankMoney() + getCreditCardMoney() - this.previousRestSentMoney()
    return save - this.EXCLUDE_BANK
  }

  private restMonths = () => {
    const month = new Date().getMonth() + 1
    return (15 - month) % 12
  }

  private previousRestSentMoney = () =>
    this.SENT_MONEY_PER_MONTH * (this.restMonths() + 1)
}
