import React from "react"
import { TextField, Button, Card, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import * as api from "../api"

const useStyles = makeStyles(theme => {
  return {
    card: {
      width: theme.forms.width,
      height: theme.forms.height,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around"
    }
  }
})

const Login = () => {
  const onSubmit = async e => {
    e.preventDefault()
    const {
      username: { value: username },
      password: { value: password }
    } = e.target.elements
    await api.login(username, password)
  }
  const classes = useStyles()
  return (
    <form onSubmit={onSubmit}>
      <Card className={classes.card}>
        <Typography variant="h4">
          <FormattedMessage id="login.title" />
        </Typography>
        <TextField
          id="username"
          required
          name="username"
          variant="outlined"
          color="primary"
          label={<FormattedMessage id="login.username" />}
        />
        <TextField
          id="password"
          required
          name="password"
          type="password"
          variant="outlined"
          color="primary"
          label={<FormattedMessage id="login.password" />}
        />
        <Button type="submit" variant="contained" color="primary">
          <FormattedMessage id="common.submit" />
        </Button>
        <Link to="/reset-password">
          <Typography variant="body1">
            <FormattedMessage id="login.forgotPassword" />
          </Typography>
        </Link>
      </Card>
    </form>
  )
}

export default Login
