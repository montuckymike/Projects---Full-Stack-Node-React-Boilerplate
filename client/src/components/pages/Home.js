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
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
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
    marginTop: 100,
    marginRight: 200,
    width: '25%',
    'z-index': '1',
    position: 'relative'
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
            Login Stuff???
          </div>
        </div>
        <img className={props.classes.heroFunPic} src='http://www.pngmart.com/files/4/Coffee-Cup-PNG-Free-Download.png' />
      </div>
      <div>
        <h1> Rest of Page Stuff </h1>
      </div>
    </div>
  )
}

export default enhancer(Home)
