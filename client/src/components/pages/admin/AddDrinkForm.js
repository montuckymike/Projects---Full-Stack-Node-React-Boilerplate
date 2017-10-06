import React from 'react'
import TextField from 'material-ui/TextField'
import Input, {InputLabel} from 'material-ui/Input'
import MenuItem from 'material-ui/Menu/MenuItem'
import Select from 'material-ui/Select'
import {FormControl} from 'material-ui/Form'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  formBucket: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '23%'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',

    margin: 10,
    width: '33.33333333333vw',
    height: '100vw',
    border: 'solid pink'
  },
  inputTag: {
    border: 'solid yellow',
    width: ''
  }
}
const enhancer = injectSheet(styles)

const AddDrinkForm = ({classes}) => (
  <div className={classes.main}>
    <h1>Add Drink Form</h1>
    <img src='https://burst.shopifycdn.com/photos/grey-coffee-mug_925x.jpg'/>
    <div className={classes.formBucket}>
      <form className={classes.input}>
        <FormControl>
          <InputLabel className={classes.inputTag}>Number of Espresso Shots</InputLabel>
          <Select value=''>
            <MenuItem value=''>Select One</MenuItem>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='6'>6</MenuItem>
            <MenuItem value='7'>7</MenuItem>
          </Select>
        </FormControl>
        <Input
          placeholder='Drink Name'
          inputProps={{
            'aria-label': 'Description'
          }}
        />
        <TextField label='Name' />
        <Button raised>Submit</Button>
      </form>
      </div>
  </div>
)
AddDrinkForm.propTypes = {
  classes: PropTypes.object.isRequired
}
export default enhancer(AddDrinkForm)
