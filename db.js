const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.error('Database connection error:', err));

module.exports = sequelize;
