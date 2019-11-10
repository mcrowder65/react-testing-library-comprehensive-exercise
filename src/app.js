import React from "react"
import Login from "./pages/login"
import { ThemeProvider } from "@material-ui/core/styles"
import { IntlProvider } from "react-intl"
import theme from "./theme"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ForgotPassword from "./pages/forgot-password"
import translations from "./translations"
const App = () => {
  const locale = "en"
  return (
    <IntlProvider messages={translations[locale]} locale={locale}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
