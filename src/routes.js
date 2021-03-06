const routes = require('express').Router()
const middleware = require('./middleware/middleware')
const { addUser,
  deleteUser,
  updateUser,
  getUser } = require('./controller/userController')


module.exports = () => {
  // HTTP-Method: GET on localhost:5000/api/v1/user
  routes.get('/user', middleware, getUser)
  // HTTP-Method: POST on localhost:5000/api/v1/user
  routes.post('/user', middleware, addUser)
  // HTTP-Method: PUT on localhost:5000/api/v1/user
  routes.put('/user', middleware, updateUser)
  // HTTP-Method: DELETE on localhost:5000/api/v1/user
  routes.delete('/user', middleware, deleteUser)

  // HTTP-Method: GET on localhost:5000/api/v1/car
  routes.get('/car', /* carControllerFunction */)

  return routes
}



