import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  mainDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://burst.shopifycdn.com/photos/friends-drinking-coffee_925x.jpg")',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    position: 'relative'
  },
  heroText: {
    color: 'white',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black',
    width: '66.67%',
    paddingLeft: '15%'
  },
  heroTitle: {
    fontSize: 36
  },
  heroSubTitle: {
    fontSize: 34
  },
  heroFun: {
    width: '100%',
    float: 'right'
  },
  heroFunPic: {
    width: '25%',
    'z-index': '1',
    position: 'absolute',
    top: 0,
    right: 0
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  link: {
    padding: 20,
    width: '33%'
  }
}

const enhancer = injectSheet(styles)

const Home = (props) => {
  return (
    <div>
      <div className={props.classes.mainDiv}>
        <div className={props.classes.heroBucket}>
          <div className={props.classes.heroText}>
            <h1 className={props.classes.heroTitle}> Start Randomizing Now! </h1>
          </div>
          <div className={props.classes.buttonDiv}>
            <button> Randomize </button>
          </div>
        </div>
        <img className={props.classes.heroFunPic} src='http://www.pngmart.com/files/4/Coffee-Cup-PNG-Free-Download.png' />
      </div>
      <div>
        <h1> Rest of Page Stuff </h1>
        <h1> Rest of Page Stuff </h1>
        <h1> Rest of Page Stuff </h1>
        <h1> Change  Stuff </h1>
        <h1> Another trivial change </h1>
        <h1> Trivial Change to Home  </h1>
        <h1> Test of Page Stuff </h1>
      </div>
    </div>
  )
}

export default enhancer(Home)
