import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
// import ButtonBase from 'material-ui/ButtonBase'
// import Typography from 'material-ui/Typography'
import DrinkCard from '../admin/drink/DrinkCard'

const styles = {
  mainDiv: {
    height: 600,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/espresso-cinemagraph.gif")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '4em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroButton: {
    width: '25%'
  },
  heroSubTitle: {
    fontSize: '2em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  randomizerCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  randomizerBtnCont: {
    background: 'rgba(255, 255, 255, 0.49)',
    width: '75%',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '25px',
    border: 'solid white'
  },
  btnBack: {
    backgroundImage: 'url("https://ak8.picdn.net/shutterstock/videos/28040038/thumb/11.jpg")',
    width: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '25px',
    paddingTop: '25px',
    borderRadius: '50px 50px 0 0'
  },
  btnBackBottom: {
    backgroundImage: 'url("https://ak8.picdn.net/shutterstock/videos/28040038/thumb/11.jpg")',
    width: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '25px',
    paddingTop: '25px',
    borderRadius: '0 0 50px 50px'
  },
  randomDrinkCont: {
    width: '33.333%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0 0 50px 50px'
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '20px'
  },
  loadingImg: {
    width: '100%'
  },
  randoBtn: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'solid white 3px',
    padding: '20px',
    fontSize: '20px',
    fontFamily: 'Merriweather',
    color: 'white'
  },
  downArrow: {
    width: '25%'
  },
  downArrowContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}
const enhancer = injectSheet(styles)

const images = [
  {
    url: 'https://burst.shopifycdn.com/photos/coffee-beans-from-above_925x.jpg',
    title: 'Breakfast',
    width: '40%'
  }
]

const Randomizer = (props) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <h1 className={props.classes.heroTitle}> Randomizer 2000 </h1>
        <h3 className={props.classes.heroSubTitle}>Start Randomizing Now!</h3>
        <div className={props.classes.downArrowContainer}>
          <img className={props.classes.downArrow} src='https://media1.giphy.com/media/NLllWlDQJzipO/giphy.gif' />
        </div>
      </div>

      <div className={props.classes.randomizerCont}>
        {
          props.drinkData && props.drinkData.randomDrink
            ? <div className={props.classes.btnBack}>
              <button type='button' className={props.classes.randoBtn} onClick={props.drinkData.getRandomDrink}>Randomizer 2000</button>
            </div>
            :
            null
        }
        <div className={props.classes.randomDrinkCont}>
          {
            props.drinkData && props.drinkData.randomDrink
              ? <DrinkCard
                key={props.drinkData.randomDrink._id}
                drink={props.drinkData.randomDrink}
              />
              :
              <div className={props.classes.loading}>
                <img src='https://media1.giphy.com/media/yggg5drtlCO64/giphy.gif'
                  className={props.classes.loadingImg}
                  onClick={props.drinkData.getRandomDrink}
                />
                <h1> Step Into the Randomizer 2000! </h1>
                <p> Click Picture to Start Your Journey</p>
              </div>
          }
        </div>
        {
          props.drinkData && props.drinkData.randomDrink
            ? <div className={props.classes.btnBackBottom}>
              <button type='button' className={props.classes.randoBtn} onClick={props.drinkData.getRandomDrink}>Randomizer 2000</button>
            </div>
            :
            null
        }
      </div>
    </div>
  )
}
Randomizer.propTypes = {
  classes: PropTypes.object.isRequired,
  randomDrink: PropTypes.func.isRequired,
  drinkData: PropTypes.object.isRequired
}
export default enhancer(Randomizer)
