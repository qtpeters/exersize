import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex );

export default new Vuex.Store({

  state: {
    exercises: []
  },

  actions: {
    
    fetchExercises( context ) {
      axios.get( '/exercises' ).then( ( rsp ) => {
        context.commit( 'setExercises', rsp.data );
      });
    } 
  },

  mutations: {

    dataLoaded( state ) {
      state.loaded = true;
    }, 

    setExercises( state, exercises ) {
      state.exercises = exercises;
    }

  },

  getters: {
   
    getExercises({ exercises }) {
      return exercises;
    }

  }
});

