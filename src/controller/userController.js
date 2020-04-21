const fs = require('fs')
const CustomError = require('../error/CustomError')

const addUser = async (req, res, next) => {
  if (!req.body.user) return next(new CustomError('Missing userdata', 400))
  const { user } = req.body
  const dummyData = JSON.parse(await fs.readFileSync(__dirname + "/dummyData.json", "utf8"))
  dummyData.user.push(user)
  await fs.writeFileSync(__dirname + '/dummyData.json', JSON.stringify(dummyData))
  return res.status(200).send('Successfull added user')
}

const deleteUser = async (req, res, next) => {
  if (!req.query.userId) return next(new CustomError('Missing userId in query parameters', 400))
  const { userId } = req.query
  const dummyData = JSON.parse(await fs.readFileSync(__dirname + "/dummyData.json", "utf8"))
  const index = dummyData.user.findIndex(dummyUser => dummyUser.id === userId)
  dummyData.user.splice(index, 1)
  await fs.writeFileSync(__dirname + '/dummyData.json', JSON.stringify(dummyData))
  return res.status(200).send(dummyData.user)
}

const updateUser = async (req, res, next) => {
  if (!req.body.user) return next(new CustomError('Missing user data', 400))
  const { user } = req.body
  const dummyData = JSON.parse(await fs.readFileSync(__dirname + "/dummyData.json", "utf8"))
  const index = dummyData.user.findIndex(dummyUser => dummyUser.id === user.id)
  dummyData.user[index] = user
  await fs.writeFileSync(__dirname + '/dummyData.json', JSON.stringify(dummyData))
  return res.status(200).send('Successfull updated user')
}

const getUser = async (req, res, next) => {
  // If userId in query parameters return specific user otherwise all users
  const dummyData = JSON.parse(await fs.readFileSync(__dirname + "/dummyData.json", "utf8"))
  let response 
  if (req.query.userId) {
    const { userId } = req.query
    const index = dummyData.user.findIndex(dummyUser => dummyUser.id === userId)
    response = dummyData.user.splice(index, 1)
  }
  return res.status(200).send(response ? response : dummyData.user)
}

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  getUser
}