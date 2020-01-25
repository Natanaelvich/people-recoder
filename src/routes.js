import express from 'express'

import PeopleController from './controllers/PeoplesController'

const route = express.Router()

route.get('/', (req, res) => {
  res.render('home')
})

route.get('/peoples', PeopleController.index)
route.get('/peoples/add', (req, res) => {
  res.render('people/create')
})

route.get('/peoples/:id/delete', PeopleController.destroy)
route.get('/peoples/update/:id', PeopleController.show)
route.post('/peoples/create', PeopleController.create)
route.post('/peoples/:id/update', PeopleController.update)

export default route
