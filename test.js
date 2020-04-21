const CustomError = require('./src/error/CustomError')

function controllerFunction (request, response, next) {
if (!request.body.name) return next(new CustomError('Name is in Request Body missing', 400))
}