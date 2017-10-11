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
  main: {
    border: 'dashed orange',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  formBucket: {
    border: 'solid green'
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
  },
  photo: {
    border: 'solid red',
    display: 'flex',
    width: '35%',
    height: '25%'
  }
}
const enhancer = injectSheet(styles)

const AddDrinkForm = ({classes}) => (
  <div className={classes.main}>
    <h1>Add Drink Form</h1>
    <img className={classes.photo} src='https://burst.shopifycdn.com/photos/grey-coffee-mug_925x.jpg' />
    <div className={classes.formBucket}>
      <form className={classes.input}>
        <Input
          placeholder='Drink Name'
          inputProps={{
            'aria-label': 'Description'
          }}
        />
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
        <TextField label='Flavor #1' />
        <TextField label='Flavor #2' />
        <TextField label='Flavor #3' />
        <Input
          placeholder='Add a Photo URL'
          inputProps={{
            'aria-label': 'Description'
          }}
        />
        <Button raised>Submit</Button>
      </form>
    </div>
  </div>
)
AddDrinkForm.propTypes = {
  classes: PropTypes.object.isRequired
}
export default enhancer(AddDrinkForm)
