const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./src/routes')()

app.use(bodyParser.json())
app.use('/api/v1', routes)
app.use((error, request, response, next) => {
  if (error.statusCode) return response.status(error.statusCode).send(error.message)
  response.send(error)
})

app.listen(5000, () => console.log('Server is running on port 5000'))