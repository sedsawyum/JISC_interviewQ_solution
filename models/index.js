const Sequelize = require("sequelize");
const config = require("../config/db.config")


const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("../models/user.model")(sequelize, Sequelize)
db.question = require("../models/question.model")(sequelize, Sequelize)
db.test = require("../models/test.model")(sequelize, Sequelize)



module.exports = db