import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {Link} from 'react-router-dom'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'

const propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

const styles = {
  card: {
    maxWidth: 345,
    margin: 20
  },
  media: {
    height: 200,
    width: 325,
    margin: 10
  },
  randomButton: {
    dense: 'primary',
    textDecoration: 'none'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

const Profile = props => {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <div>
          <img className={classes.media} src='https://burst.shopifycdn.com/photos/making-coffee_925x.jpg' />
        </div>
        <CardContent>
          <div>First Name: {props.firstName}</div>
          <div>Last Name: {props.lastName}</div>
          <div>Email: {props.email}</div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button dense color='primary'>
            <Link to='/Randomizer'>Randomizer</Link>
          </Button>
          <Button dense color='primary' >
            <Link to='/TopTen'>Top Ten</Link>
          </Button>
          <Button dense color='primary'>
            <Link to='/'>Home</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

Profile.propTypes = propTypes

export default withStyles(styles)(Profile)
