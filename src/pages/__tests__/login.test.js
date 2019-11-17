import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import Login from "../login"
import theme from "../../theme"
import translations from "../../translations"
import * as apiMock from "../../api"

jest.mock("../../api", () => {
  return {
    login: jest.fn()
  }
})

it("renders", () => {
  render(
    <ThemeProvider theme={theme}>
      <IntlProvider messages={translations["en"]} locale="en">
        <Router>
          <Login />
        </Router>
      </IntlProvider>
    </ThemeProvider>
  )
})

it("calls login with provided username and password when submitting", () => {
  const { getByLabelText, getByText } = render(
    <ThemeProvider theme={theme}>
      <IntlProvider messages={translations["en"]} locale="en">
        <Router>
          <Login />
        </Router>
      </IntlProvider>
    </ThemeProvider>
  )
  const username = "reactlover65"
  fireEvent.change(getByLabelText(/username */i), {
    target: { value: username }
  })

  const password = "SuspenseRocks!"
  fireEvent.change(getByLabelText(/password */i), {
    target: { value: password }
  })
  fireEvent.click(getByText("Submit"))
  expect(apiMock.login).toHaveBeenCalledWith(username, password)
})

it("opens /reset-password when clicking Forgot Password? link", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <IntlProvider messages={translations["en"]} locale="en">
        <Router>
          <Login />
        </Router>
      </IntlProvider>
    </ThemeProvider>
  )

  fireEvent.click(getByText(/forgot password?/i))
  expect(window.location.pathname).toEqual("/reset-password")
})
