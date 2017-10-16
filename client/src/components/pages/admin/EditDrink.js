import React from 'react'
import Input, {InputLabel} from 'material-ui/Input'
import { FormControlLabel} from 'material-ui/Form'
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
    margin: 25
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

const EditDrink = props => {
  const { classes } = props
  return (
    <div>
      <h1 className={classes.header}>Edit A Drink</h1>
      <div className={props.classes.formAndPhotoBucket} >
        <img className={props.classes.photo} src='https://burst.shopifycdn.com/photos/grey-coffee-mug_925x.jpg' />
        <div className={props.classes.formBucket}>
          <form className={props.classes.input}>
            <Input
              placeholder='Edit Drink Name'
              onChange={props.onNameChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Edit Photo URL'
              onChange={props.onImageChanged}
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <Input
              placeholder='Insert Drink ID here'
              inputProps={{
                'aria-label': 'Description'
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  onClick={() => props.onDairyChanged()}
                  checked={props.isDairy}
                />
              }
              label='Dairy'
            />
            <FormControlLabel
              control={
                <Switch
                  onClick={() => props.onSweetnessChanged()}
                  checked={props.isSweet}
                />
              }
              label='Sweet'
            />
            <Button raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
EditDrink.propTypes = propTypes

export default enhancer(EditDrink)
