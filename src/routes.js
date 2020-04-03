const express = require('express')

const userController = require('./controllers/userController')
const addressController = require('./controllers/addressController')
const techController = require('./controllers/techController')
const reportController = require('./controllers/reportController')

const routes = express.Router()

routes.get('/users', userController.index)
routes.post('/users', userController.store)

routes.get('/users/:user_id/addresses', addressController.index)
routes.post('/users/:user_id/addresses', addressController.store)

routes.get('/users/:user_id/techs', techController.index)
routes.post('/users/:user_id/techs', techController.store)
routes.delete('/users/:user_id/techs', techController.delete)

routes.get('/report', reportController.show)

module.exports = routes