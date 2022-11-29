const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
    id: {},
    first_name: {},
    last_name: {},
    email: {},
    password: {},
    birthday: {}
})



