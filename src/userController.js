let userDummyData = require('./userModel')

const addUser = (req, res, next) => {
  if (!req.body.user) return res.status(400).send('Missing user data')
  const { user } = req.body
  userDummyData.push(user)
  return res.status(200).send('Successfull added user')
}

const deleteUser = (req, res, next) => {
  if (!req.query) return res.status(400).send('Missing userId in query parameters')
  const { userId } = req.query
  const index = userDummyData.findIndex(dummyUser => dummyUser.id === userId)
  userDummyData.splice(index, 1)
  return res.status(200).send(userDummyData)
}

const updateUser = (req, res, next) => {
  if (!req.body.user) return res.status(400).send('Missing user data')
  const { user } = req.body
  const index = userDummyData.findIndex(dummyUser => dummyUser.id === user.id)
  userDummyData[index] = user
  return res.status(200).send('Successfull updated user')
}

const getUser = (req, res, next) => {
  // If userId in query parameters return specific user otherwise all users
  if (req.query) {
    const { userId } = req.query
    const index = userDummyData.findIndex(dummyUser => dummyUser.id === userId)
    userDummyData = userDummyData.splice(index, 1)
  }
  return res.status(200).send(userDummyData)
}

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  getUser
}