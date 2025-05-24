import { Logo } from '@/components'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { pxToRem } from '@/utils'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('Logo', () => {
  const renderComponents = (theme: Theme, width?: number, height?: number) =>
    render(
      <ThemeProvider theme={theme}>
        <Logo height={height ?? 32} width={width ?? 32} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('shoul apply the correct bg image', () => {
        const { container } = renderComponents(theme)
        expect(container.firstChild).toHaveStyleRule(
          'background-image',
          `url(/${theme.appLogo})`
        )
      })
      it('shoul apply the correct height and width', () => {
        const { container } = renderComponents(theme, 40, 40)
        expect(container.firstChild).toHaveStyleRule('height', pxToRem(40))
        expect(container.firstChild).toHaveStyleRule('width', pxToRem(40))
      })
    })
  })
})
