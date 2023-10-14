class Facilities {
  private facilityEls: Element[]
  private headEls: Element[]
  private headIdxs: number[]

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
    const titleEl = this.facilityEls.find((el) =>
      el.textContent?.includes(title)
    )
    if (!titleEl) return []
    const titleIdx = this.facilityEls.indexOf(titleEl)
    const titleIdxIdx = this.headIdxs.indexOf(titleIdx)
    if (titleIdxIdx === this.headIdxs.length - 1)
      return this.facilityEls.slice(titleIdx + 1)
    return this.facilityEls.slice(titleIdx + 1, this.headIdxs[titleIdxIdx + 1])
  }
}

class Banks extends Facilities {
  private TITLE = '銀行'

  constructor() {
    super()
  }

  getBankMoney = () => {
    const bankEls = this.getContentEls(this.TITLE)
    const moneyEls = bankEls.map((el) =>
      el.querySelector('ul.amount>li.number')
    )
    const moneyNums = moneyEls.map((el) =>
      moneyStrToNum(el?.textContent ?? '0')
    )
    return moneyNums.reduce((acc, cur) => acc + cur, 0)
  }
}

const moneyStrToNum = (str: string) => {
  const numStr = str.replace(/[^0-9]/g, '')
  return parseInt(numStr)
}

export const _setRootEl = (): Element => {
  const rootEl = document.createElement('div')
  document.body.appendChild(rootEl)
  return rootEl
}

export const _getBankMoney = (): number => {
  return new Banks().getBankMoney()
}
console.log(_getBankMoney())
