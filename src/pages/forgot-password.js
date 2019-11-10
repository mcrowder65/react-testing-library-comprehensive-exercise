import React from "react"
import { TextField, Button, Card, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
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

const ForgotPassword = () => {
  const onSubmit = e => {
    e.preventDefault()
    const {
      email: { value: email }
    } = e.target.elements
    console.log({ email })
  }
  const classes = useStyles()
  return (
    <form onSubmit={onSubmit}>
      <Card className={classes.card}>
        <Typography variant="h4">Forgot Password</Typography>
        <TextField
          required
          name="email"
          variant="outlined"
          color="primary"
          label="Email"
        />
        <Button type="submit" variant="contained" color="primary">
          SUBMIT
        </Button>
      </Card>
    </form>
  )
}

export default ForgotPassword
