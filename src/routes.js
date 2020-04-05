const routes = require('express').Router()
const middleware = require('./middleware')
const { addUser, deleteUser, updateUser, getUser } = require('./userController')

module.exports = () => {
  routes.get('/user', middleware, getUser)
  routes.post('/user', middleware, addUser)
  routes.put('/user', middleware, updateUser)
  routes.delete('/user', middleware, deleteUser)
  return routes
}