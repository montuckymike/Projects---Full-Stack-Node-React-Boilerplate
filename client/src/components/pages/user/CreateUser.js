import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    width: 200
  },
  button: {
    margin: 20,
    width: 20
  }
}

const preference = [
  {
    value: 'preference',
    label: 'Non Diary'
  },
  {
    value: 'preference',
    label: 'Diary'
  }
]

class TextFields extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    preferences: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render () {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete='off'>
        <TextField
          id='firstName'
          label='First Name'
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin='normal'
        />
        <TextField
          required
          id='lastName'
          label='Last Name'
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          className={classes.textField}
          margin='normal'
        />

        <TextField
          id='email'
          label='Email'
          email
          rowsMax='4'
          value={this.state.email}
          onChange={this.handleChange('email')}
          className={classes.textField}
          margin='normal'
        />

        <TextField
          id='password'
          label='Password'
          value={this.state.password}
          className={classes.textField}
          type='password'
          onChange={this.handleChange('password')}
          margin='normal'
        />

        <TextField
          id='select-preference'
          select label='Select'
          className={classes.textField}
          value={this.state.preference}
          onChange={this.handleChange('select')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText='Please select your diary preferences'
        />
        <Button className={classes.button}raised>Submit</Button>
      </form>
    )
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(TextFields)
