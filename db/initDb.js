
module.exports = ( () => {

  const Sequelize = require( 'sequelize' );
  const db = new Sequelize( 'blsworkouts', 'blsworkouts', 'abc123', {

    host: 'localhost',
    dialect: 'sqlite',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

    storage: __dirname + '/blsworkouts.sqlite3'
  });

  db.authenticate()

  .then( () => {
    console.log('Connection has been established successfully.');
  })
    
  .catch( err => {
    console.error('Unable to connect to the database:', err);
  });

  return db;

})();

