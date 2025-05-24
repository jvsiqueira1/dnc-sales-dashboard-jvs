import { StyledButton } from '@/components'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('StyledButton', () => {
  const renderComponents = (theme: Theme, className?: string, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledButton className={className} {...props} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('shoul match the snapshot with alert class', () => {
        const { asFragment } = renderComponents(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('shoul match the snapshot with primary class', () => {
        const { asFragment } = renderComponents(theme, 'primary')
        expect(asFragment()).toMatchSnapshot()
      })

      it('shoul match the snapshot with borderless-alert class', () => {
        const { asFragment } = renderComponents(theme, 'borderless-alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('shoul match the snapshot with disabled status', () => {
        const { asFragment } = renderComponents(theme, 'primary', {
          disabled: true,
        })
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
