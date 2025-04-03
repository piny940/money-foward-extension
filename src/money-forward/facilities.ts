import { moneyStrToNum } from './util'

class Facilities {
  private facilityEls: Element[]
  private headEls: Element[]
  private headIdxs: number[]
  protected TITLE = ''

  constructor() {
    this.facilityEls = this.getFacilityEls()
    this.headEls = this.facilityEls.filter((el) =>
      el.classList.contains('heading-category-name')
    )
    this.headIdxs = this.headEls.map((el) => this.facilityEls.indexOf(el))
  }

  private getFacilityEls = () =>
    Array.from(document.querySelectorAll('ul.facilities.accounts-list>li'))

  protected getContentEls = (title: string) => {
    const titleEl = this.facilityEls.find((el) => el.textContent === title)
    if (!titleEl) return []
    const titleIdx = this.facilityEls.indexOf(titleEl)
    const titleIdxIdx = this.headIdxs.indexOf(titleIdx)
    if (titleIdxIdx === this.headIdxs.length - 1)
      return this.facilityEls.slice(titleIdx + 1)
    return this.facilityEls.slice(titleIdx + 1, this.headIdxs[titleIdxIdx + 1])
  }

  getMoneyAmount = () => {
    const detailEls = this.getContentEls(this.TITLE)
    const moneys = detailEls.map((el) => {
      const numberEls = el.querySelectorAll(
        'ul>li.balance, ul>li.number, ul>li.point'
      )
      let sum = 0
      for (const el of numberEls) {
        const money = moneyStrToNum(el.textContent ?? '0')
        sum += money
      }
      return sum
    })
    return moneys.reduce((acc, cur) => acc + cur, 0)
  }
}

export class Banks extends Facilities {
  protected override TITLE = '銀行'

  constructor() {
    super()
  }
}

export class CreditCards extends Facilities {
  protected override TITLE = 'カード'

  constructor() {
    super()
  }
}

export class Cash extends Facilities {
  protected override TITLE = '財布（現金管理）'

  constructor() {
    super()
  }
}

export class Prepaid extends Facilities {
  protected override TITLE = '電子マネー・プリペイド'

  constructor() {
    super()
  }
}

export class OnlineShop extends Facilities {
  protected override TITLE = '通販'

  constructor() {
    super()
  }
}
