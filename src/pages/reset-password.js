import React from "react"
import { TextField, Button, Card, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import * as api from "../api"
import { FormattedMessage, useIntl } from "react-intl"

const useStyles = makeStyles(theme => {
  return {
    card: {
      width: theme.forms.width,
      height: theme.forms.height,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    }
  }
})

const ResetPassword = () => {
  const onSubmit = async e => {
    e.preventDefault()
    const {
      email: { value: email }
    } = e.target.elements
    await api.resetPassword(email)
  }

  const { formatMessage } = useIntl()
  const classes = useStyles()
  return (
    <form onSubmit={onSubmit}>
      <Card className={classes.card}>
        <Typography variant="h4">
          <FormattedMessage id="resetPassword.title" />
        </Typography>
        <TextField
          inputProps={{
            "aria-label": formatMessage({ id: "resetPassword.emailAriaLabel" })
          }}
          required
          name="email"
          variant="outlined"
          color="primary"
          label={<FormattedMessage id="resetPassword.email" />}
        />
        <Button type="submit" variant="contained" color="primary">
          <FormattedMessage id="common.submit" />
        </Button>
      </Card>
    </form>
  )
}

export default ResetPassword
