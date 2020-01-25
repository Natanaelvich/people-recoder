import connection from '../services/connection'
import People from '../models/People'

export default {
  async index(req, res) {
    const peoples = await People.findall(connection)
    res.render('people/index', { peoples })
  },

  async show(req, res) {
    const { id } = req.params
    const people = await People.findone(connection, id)

    res.render('people/update', { people: people[0] })
  },

  async create(req, res) {
    const { name, jobRole } = req.body
    await People.create(connection, name, jobRole)
    res.redirect('/peoples')
  },

  async destroy(req, res) {
    const { id } = req.params
    await People.delete(connection, id)
    res.redirect('/peoples')
  },

  async update(req, res) {
    const { name, jobRole } = req.body
    const { id } = req.params
    await People.update(connection, id, name, jobRole)
    res.redirect('/peoples')
  },
}
