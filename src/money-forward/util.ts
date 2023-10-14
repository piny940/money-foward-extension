export const moneyStrToNum = (str: string) => {
  const numStr = str.replace(/[^0-9]/g, '')
  return parseInt(numStr)
}
