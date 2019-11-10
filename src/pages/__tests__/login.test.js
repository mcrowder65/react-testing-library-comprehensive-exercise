import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import Login from "../login"
import theme from "../../theme"
import translations from "../../translations"
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
