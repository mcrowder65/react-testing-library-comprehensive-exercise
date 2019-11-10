import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import theme from "../../theme"
import translations from "../../translations"
import ForgotPassword from "../forgot-password"

it("renders", () => {
  render(
    <ThemeProvider theme={theme}>
      <IntlProvider messages={translations["en"]} locale="en">
        <Router>
          <ForgotPassword />
        </Router>
      </IntlProvider>
    </ThemeProvider>
  )
})
