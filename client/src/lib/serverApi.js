const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(`/api/${uri}`, options)
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

export const getAllDrinks = () => ajaxRequest('drinks', 'GET')

export const getAllUsers = () => ajaxRequest('users', 'GET')

export const addUser = (newUser) => ajaxRequest('users', 'POST', newUser)

export const updateUser = (user) => ajaxRequest(`users/${user._id}`, 'PUT', user)

export const deleteUser = (userId) => ajaxRequest(`users/${userId}`, 'DELETE')

export const findUserById = (userId) => ajaxRequest(`users/${userId}`, userId)
