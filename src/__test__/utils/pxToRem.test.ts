import { pxToRem } from '@/utils'

describe('pxToRem', () => {
  it('should correcly convert pixels to rem for positive values.', () => {
    expect(pxToRem(16)).toBe('1rem')
    expect(pxToRem(32)).toBe('2rem')
    expect(pxToRem(8)).toBe('0.5rem')
  })

  it('should correcly convert to zero.', () => {
    expect(pxToRem(0)).toBe('0rem')
  })

  it('should correcly convert pixels to rem for nevative values.', () => {
    expect(pxToRem(-16)).toBe('-1rem')
    expect(pxToRem(-32)).toBe('-2rem')
    expect(pxToRem(-8)).toBe('-0.5rem')
  })
})
