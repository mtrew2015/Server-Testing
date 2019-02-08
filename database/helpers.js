const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development)

const insertUser = (user) => {
  return db('users').insert(user);
}

const getUsers = (users) => {
  return db('users').select('id','username')
}