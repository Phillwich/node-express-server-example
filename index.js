const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./src/routes')()

app.use(bodyParser.json())
app.use('/api/v1', routes)

app.listen(5000, () => console.log('Server is running on port 5000'))