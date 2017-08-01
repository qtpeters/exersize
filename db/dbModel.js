
module.exports = ( ( config ) => {

  const Sequelize = require( 'sequelize' );

  const db = config.db;
  const force = config.force;

  const _id = {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }

  // Table of exercises
  const _ExerciseSelection = db.define( 'ExerciseSelection', {
    id: _id,
    name: Sequelize.STRING,
    type: Sequelize.ENUM( 
      'arms', 
      'back', 
      'chest', 
      'core', 
      'legs', 
      'sholders' 
    )
  });

  _ExerciseSelection.sync({
    force: force
  });

  const _Workout = db.define( 'Workout', {
    id: _id,
    date: Sequelize.DATE
  });

  _Workout.sync({
    force: force
  });

  const _Exercise = db.define( 'Exercise', {
    id: _id,
    notes: Sequelize.TEXT,
    workout_id: {
      type: Sequelize.INTEGER,
      refrences: {
        model: _Workout,
        key: 'id'
      }
    },
    exercises_id: {
      type: Sequelize.INTEGER,
      refrences: {
        model: _ExerciseSelection,
        key: 'id'
      }
    }
  });

  _Exercise.sync({
    force: force
  });

  const _Set = db.define( 'Set', {
    id: _id,
    exercise_id: {
      type: Sequelize.INTEGER,
      refrences: {
        model: _Exercise,
        key: 'id'
      }
    }
  });

  _Set.sync({
    force: force
  });

  const _Rep = db.define( 'Rep', {
    weight: Sequelize.FLOAT,
    set_id: {
      type: Sequelize.INTEGER,
      refrences: {
        model: _Set,
        key: 'id'
      }
    }
  });

  _Rep.sync({
    force: force
  });

  return {
    ExerciseSelection: _ExerciseSelection,
    Workout: _Workout,
    Exercise: _Exercise,
    Set: _Set,
    Rep: _Rep
  }
});

