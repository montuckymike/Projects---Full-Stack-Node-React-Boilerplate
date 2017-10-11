import React from 'react'

const AllDrinks = ({drinkData}) => {
  console.log(drinkData)
  return (
    <div>
      {
        drinkData.isLoaded ? <h2>{drinkData.drinks[0].name}</h2> : null
      }
    </div>
  )
}

export default AllDrinks
