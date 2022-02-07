export const index: { [key: string]: string } = () => ({
  'AMP'  : 1588,
  'NBG'  : 328,
  'NKJV' : 114,
  'NLT'  : 116,
  'NIV'  : 111,
  'TB'   : 306,
})

export const lookup = (key) => index()[key]

export const translations = () => Object.keys(index())

export default translations
