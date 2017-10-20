import React from 'react'
import injectSheet from 'react-jss'
import NestedList from './nestedList'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const styles = {
  mainDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/hot-coffee-cinemagraph.gif")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative',
    justifyContent: 'center'
  },
  comingSoon: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://blog.proto.io/wp-content/uploads/2016/10/best_mobile_app_UI_2016_Guides.gif")',
    position: 'relative',
    justifyContent: 'center'
  },
  comingSoonTitle: {
    fontSize: '3em',
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
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
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '100px'
  },
  iconImg: {
    textAlign: 'center'
  },
  futureTitle: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px',
    background: '#F5F5F5'
  },
  futureBucket: {
    display: 'flex',
    flexDirection: 'row',
    background: '#F5F5F5',
    paddingBottom: '100px'
  },
  futureContent: {
    width: '50%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  futurePic: {
    width: '50%'
  },
  futurePicImg: {
    width: '100%'
  },
  parallaxDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/pouring-an-espresso_925x@2x.jpg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative',
    justifyContent: 'center'
  },
  futureTitle2: {
    textAlign: 'center',
    paddingBottom: '50px',
    paddingTop: '50px'
  },
  futureBucket2: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '100px'
  },
  futureContent2: {
    width: '50%',
    textAlign: 'Left',
    paddingLeft: '10px'
  },
  cta: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '15%',
    paddingRight: '15%',
    background: '#8e44ad',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  EditButton: {
    backgroundColor: '#494949',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginBottom: 10,
    justifyContent: 'space-around',
    background: '#ecf0f1'
  },
  EditButton2: {
    backgroundColor: '#494949',
    color: 'white',
    padding: 10,
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    textDecoration: 'none'
  },
  buttonContainer2: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    justifyContent: 'space-around'
  },
  heroTitleContainer: {
    width: '66.67%',
    paddingLeft: '3%'
  },
  heroGraphicContainer: {
    width: '33.33%'
  },
  heroGraphic: {
    width: '100%'
  },
  futureContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    justifyContent: 'center'
  },
  futureTitle: {
    textAlign: 'center',
    marginTop: '50px'
  },
  futureDivider: {
    width: '50%',
    background: '#bdc3c7',
    height: '2px'
  },
  futureDividerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  futureSubTitle: {
    textAlign: 'center',
    width: '35%',
    fontFamily: 'Quicksand,sans-serif',
    color: '#7f8c8d'
  },
  futureSubTitleContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  futureIconBucket: {
    display: 'flex',
    flexDirection: 'row'
  },
  futureIconBucketLeft: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '25px'
  },
  futureIconBucketCenter: {
    width: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  futureIconBucketRight: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '25px'
  },
  leftBucket: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '50px'
  },
  leftBucketText: {
    display: 'flex',
    alignItems: 'center',
    width: '75%',
    paddingLeft: '5px',
    color: '#7f8c8d',
    paddingRight: '4px'
  },
  leftBucketIcon: {
    width: '25%'
  },
  leftImg: {
    width: '100%'
  },
  futureButton: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
    marginTop: '25px'
  },
  steps: {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '100px'
  }
}

const propTypes = {
  classes: PropTypes.object.isRequired
}

const enhancer = injectSheet(styles)

const Home = (props) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <div className={props.classes.heroTitleContainer}>
          <h1 className={props.classes.heroTitle}> Drink Randomizer 2000 </h1>
          <h3 className={props.classes.heroSubTitle}>A Coffee App for Coffee People</h3>
        </div>
        <div className={props.classes.heroGraphicContainer}>
          <img className={props.classes.heroGraphic} src='http://www.starbucks.com.sg/img/mobile-app/iphone_android-rev.png?20160827' />
        </div>
      </div>
      <div className={props.classes.steps}>
        <h1> Three Easy Steps to Get Your Coffee </h1>
      </div>
      <div className={props.classes.iconDiv}>
        <div className={props.classes.iconImg}>
          <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
          <h1>Open App</h1>
        </div>
        <div className={props.classes.iconImg}>
          <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
          <Link to={'/Randomizer'}>
            <h1>Click Randomizer</h1>
          </Link>

        </div>
        <div className={props.classes.iconImg}>
          <img src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
          <h1>Get Drink</h1>
        </div>
      </div>
      <div className={props.classes.comingSoon}>
        <h1 className={props.classes.comingSoonTitle}> Coming Soon to A Mobile Device Near You</h1>
      </div>

      <div className={props.classes.futureContainer}>
        <div className={props.classes.futureTitle}>
          <h1> Welcome </h1>
        </div>
        <div className={props.classes.futureDividerContainer}>
          <div className={props.classes.futureDivider} />
        </div>
        <div className={props.classes.futureSubTitleContainer}>
          <div className={props.classes.futureSubTitle}>
            <p>Tired of Deciding What Delicious Coffee Drink to Get? Worry no more because the Drink Randomizer 2000 is here to save the day!</p>
          </div>
        </div>
      </div>
      <div className={props.classes.futureIconBucket}>

        <div className={props.classes.futureIconBucketLeft}>
          <div className={props.classes.leftBucket}>
            <div className={props.classes.leftBucketText}>
              With the click of a button you can put all of your worries aside and let our Randomizer 2000 do the heavy lifting
            </div>
            <div className={props.classes.leftBucketIcon}>
              <img className={props.classes.leftImg} src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
            </div>
          </div>

          <div className={props.classes.leftBucket}>
            <div className={props.classes.leftBucketText}>
              Take advantage of our currated list of delicious beverages with the click of a button.
            </div>
            <div className={props.classes.leftBucketIcon}>
              <img className={props.classes.leftImg} src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
            </div>
          </div>

        </div>
        <div className={props.classes.futureIconBucketCenter}>
          <img src='https://cdn4.iconfinder.com/data/icons/Starbucks_coffee/PNG/512x512/starbucks_coffee_3.png' />
        </div>
        <div className={props.classes.futureIconBucketRight}>
          <div className={props.classes.leftBucket}>
            <div className={props.classes.leftBucketIcon}>
              <img className={props.classes.leftImg} src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
            </div>
            <div className={props.classes.leftBucketText}>
              If you are not finding a drink to your liking you can add drinks to our database.  Then simply Randomize away!
            </div>
          </div>
          <div className={props.classes.leftBucket}>
            <div className={props.classes.leftBucketIcon}>
              <img className={props.classes.leftImg} src='http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Coffee-cup-icon.png' />
            </div>
            <div className={props.classes.leftBucketText}>
              All of your favorite drinks that normally are too difficult to pick from.  Our Randomizer 2000 makes your life easier.
            </div>
          </div>
        </div>
      </div>
      <div className={props.classes.futureButton}>
        <div className={props.classes.buttonContainer}>
          <Link className={props.classes.EditButton} to={'/Randomizer'}>
            Randomizer 2000
          </Link>
        </div>
      </div>
      <div className={props.classes.parallaxDiv}>
        <div className={props.classes.heroText}>
          <h1 className={props.classes.heroTitle}> Friends with Benefits ;) </h1>
          <h3 className={props.classes.heroSubTitle}>Become a Premium Member to Unlock All The Features</h3>
          <div className={props.classes.buttonContainer2}>
            <Link className={props.classes.EditButton2} to={'/Randomizer'}>
              Randomizer 2000
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className={props.classes.futureTitle2}>
          <h1> Premium Membership...100% Free! </h1>
        </div>
        <div className={props.classes.futureBucket2}>
          <div className={props.classes.futurePic}>
            <img className={props.classes.futurePicImg} src='https://burst.shopifycdn.com/photos/pretty-woman-sipping-coffee_925x@2x.jpg' />
          </div>
          <div className={props.classes.futureContent2}>
            <NestedList />
          </div>
        </div>
        <div className={props.classes.cta}>
          <div>
            <h1>What are you waiting for?</h1>
          </div>
          <div className={props.classes.buttonContainer2}>
            <Link className={props.classes.EditButton2} to={'/Randomizer'}>
              Randomizer 2000
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = propTypes

export default enhancer(Home)
