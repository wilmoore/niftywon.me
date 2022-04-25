export const index: { [key: string]: string } = () => ({
  'AMP'  : 1588,
  'ESV'  : 59,
  'NBG'  : 328,
  'NIV'  : 111,
  'NKJV' : 114,
  'NLT'  : 116,
  'TB'   : 306,
})

export const find = (key) => index()[key]
export const keys = () => Object.keys(index())
export const list = () => keys().join('|')
