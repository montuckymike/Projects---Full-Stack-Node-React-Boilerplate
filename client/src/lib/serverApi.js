const ajaxRequest = ({url, method, body, headers = {}}) => {
  const requestHeaders = new Headers({
    'Content-Type': 'application/json',
    ...headers
  })

  const options = {
    headers: requestHeaders,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(url, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  if (!response.ok) {
    return response.json()
      .then(({message, data}) => {
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}
export const getAllDrinks = () => ajaxRequest({url: '/api/drinks', method: 'GET'})

export const getDrinkById = (drinkId) => ajaxRequest({url: `/api/drinks/id/${drinkId}`, method: 'GET'})

export const addDrink = (drink) => ajaxRequest({url: '/api/drinks', method: 'POST', body: drink})

export const updateDrink = (drinkId, drink) => ajaxRequest({url: `/api/drinks/id/${drinkId}`, method: 'PUT', body: drink})

export const deleteDrink = (drinkId) => ajaxRequest({url: `/api/drinks/id/${drinkId}`, method: 'DELETE'})

export const getRandomDrink = () => ajaxRequest({url: '/api/drinks/random', method: 'GET'})

export const getAllUsers = () => ajaxRequest({url: '/api/users', method: 'GET'})

export const getUserById = (userId) => ajaxRequest({url: `/api/users/id/${userId}`, method: 'GET'})

export const addUser = (newUser) => { return ajaxRequest({url: '/api/signup', method: 'POST', body: newUser}) }

export const updateUser = (user) => ajaxRequest({url: `/api/users/${user._id}`, method: 'PUT', body: user})

export const deleteUser = (userId) => ajaxRequest({url: `/api/users/${userId}`, method: 'DELETE'})

export const loginUser = (email, password) => ajaxRequest({url: '/api/login', method: 'POST', body: {email, password}})

export const logoutUser = () => ajaxRequest({url: '/api/logout', method: 'GET'})
