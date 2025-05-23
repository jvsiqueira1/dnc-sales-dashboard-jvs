import { CardComponent } from '@/components'
import { render } from '@testing-library/react'
import { Theme } from '@/types'
import { ThemeProvider } from 'styled-components'
import { themesList } from '@/resources/themesList'

describe('CardComponent', () => {
  const renderComponents = (theme: Theme, className?: string) =>
    render(
      <ThemeProvider theme={theme}>
        <CardComponent className={className} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('shoul match the snapshot without any class', () => {
        const { asFragment } = renderComponents(theme)
        expect(asFragment()).toMatchSnapshot()
      })

      it('shoul match the snapshot with alert class', () => {
        const { asFragment } = renderComponents(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('shoul match the snapshot with success class', () => {
        const { asFragment } = renderComponents(theme, 'success')
        expect(asFragment()).toMatchSnapshot()
      })

      it('shoul match the snapshot with warning class', () => {
        const { asFragment } = renderComponents(theme, 'warning')
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
