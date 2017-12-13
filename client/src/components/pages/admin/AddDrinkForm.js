import React from 'react'
import Input from 'material-ui/Input'
import {FormControlLabel} from 'material-ui/Form'
import Switch from 'material-ui/Switch'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  formAndPhotoBucket: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    width: '33.33333333333vw',
    height: '30vw',
    border: 'solid black'
  },
  inputTag: {
    border: 'solid yellow',
    width: ''
  },
  photo: {
    display: 'flex',
    width: 700,
    height: 500
  },
  button: {
    margin: 20,
    width: 20
  },
  header: {
    fontFamily: 'Merriweather',
    margin: 10,
    paddingLeft: '70%'
  },
  spacer: {
    marginTop: '120px'
  }
}

const propTypes = {
  classes: PropTypes.object.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  onDairyChanged: PropTypes.func.isRequired,
  isDairy: PropTypes.bool.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onSweetnessChanged: PropTypes.func.isRequired,
  isSweet: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const enhancer = injectSheet(styles)

const AddDrinkForm = props => {
  const { classes } = props
  return (
    <div className={classes.spacer}>
      <h1 className={classes.header}>Add A Drink</h1>
      <div className={classes.formAndPhotoBucket} >
        <img className={classes.photo} src='https://images.unsplash.com/photo-1492158244976-29b84ba93025?dpr=1&auto=format&fit=crop&w=667&h=&q=60&cs=tinysrgb&crop=' />
        <div className={classes.formBucket}>
          <form className={classes.input}>
            <Input
              placeholder='Drink Name'
              onChange={props.onNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Add a Photo URL'
              onChange={props.onImageChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  onClick={() => props.onDairyChanged()}
                  checked={props.isDairy ? props.isDairy : false}
                />
              }
              label='Dairy'
            />
            <FormControlLabel
              control={
                <Switch
                  onClick={() => props.onSweetnessChanged()}
                  checked={props.isSweet ? props.isSweet : false}
                />
              }
              label='Sweet'
            />
            <Button className={classes.button} raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
AddDrinkForm.propTypes = propTypes

export default enhancer(AddDrinkForm)
