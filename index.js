const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use((req, res, next) => console.log(req))

app.listen(5000, () => console.log('Server is running on port 5000'))