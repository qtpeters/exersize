
module.exports = ( () => {

  const db = require( './db/initDb' );
  const DbModelFunc = require( './db/dbModel' );
  const dbModel = DbModelFunc({
    db: db,
    force: false
  });

  const api = {
    getExercises: () => {
      return dbModel.ExerciseSelection.findAll();
    } 
  };  
 
  return api;

})();

