const db = require('../database/helpers');
const bcrypt = require('bcryptjs');

function register(req, res) {
  const user = req.body;
  const hashedPass = bcrypt.hashSync(user.password, 12);
  user.password = hashedPass;
  db.register(user)
    .then(ids => {
      const id = ids[0];
      res.json(id)
    })
    .catch(err => res.json(err))
}

function getUsers(req, res) {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => res.json(err))
}

module.exports = server => {
  server.post('/api/register', register);
  server.post('api/users', getUsers)
}