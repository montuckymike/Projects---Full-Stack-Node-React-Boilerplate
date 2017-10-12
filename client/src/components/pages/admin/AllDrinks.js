import React from 'react'
import injectSheet from 'react-jss'
import SimpleMediaCard from '../../drinkCard'

const styles = {
  drinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  drinkCard: {
    marginBottom: '20px'
  },
  mainDiv: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/pouring-hot-coffee_925x.jpg")',
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
  }
}

const enhancer = injectSheet(styles)

const AllDrinks = (props) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <h1 className={props.classes.heroTitle}> All the Drinks </h1>
        <h3 className={props.classes.heroSubTitle}>Here is the list of all the drinks</h3>
      </div>
      <div className={props.classes.drinkContainer}>
        <div className={props.classes.drinkCard} >
          <SimpleMediaCard />
        </div>
        <div className={props.classes.drinkCard} >
          <SimpleMediaCard />
        </div>
        <div className={props.classes.drinkCard} >
          <SimpleMediaCard />
        </div>
        <div className={props.classes.drinkCard} >
          <SimpleMediaCard />
        </div>
        <div className={props.classes.drinkCard} >
          <SimpleMediaCard />
        </div>
        <div className={props.classes.drinkCard} >
          <SimpleMediaCard />
        </div>
        <div className={props.classes.drinkCard} >
          <SimpleMediaCard />
        </div>
      </div>
    </div>
  )
}

export default enhancer(AllDrinks)
