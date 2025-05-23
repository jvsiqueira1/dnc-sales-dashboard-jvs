import { highlightTextConverter } from '@/utils'

describe('highlightTextConverter', () => {
  it('should return the correct test for "alert"', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta longe de ser batida.')
  })

  it('should return the correct test for "success"', () => {
    expect(highlightTextConverter('success')).toBe(
      '* A meta do mês foi batida! Parabéns!'
    )
  })

  it('should return the correct test for "warning"', () => {
    expect(highlightTextConverter('warning')).toBe('* Falta pouco, vamos lá!')
  })

  it('should return the default for unknown input ', () => {
    expect(highlightTextConverter('un')).toBe('* Sem dados no momento.')
  })
})
