<template>
  <div id="workout-form">
    <form novalidate>

      <md-input-container>
        <label>Date</label>
        <md-input type="date"></md-input>
      </md-input-container>

      <md-input-container>
        <label for="exerciseType">Exercise Type</label>
        <md-select
            v-model="exerciseType"
            name="exerciseType" 
            id="exerciseType">
          <md-option 
            v-for="et in exerciseTypes"
            :value="et">{{ et }}</md-option>
        </md-select>
      </md-input-container>

      <md-input-container v-if="exerciseType !== null">
        <label for="exercise">Exercise</label>
        
        <md-select 
          name="exercise"
          v-model="exercise"
          id="exercise">

          <md-option 
            v-for="e in exercises"
            :value="e">{{ e }}</md-option>
        </md-select>
       
      </md-input-container>

    </form>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
 
  export default {
    name: "workout-form",

    data() {
      return {
        exerciseType: null,
        exercise: null
      }
    },

    computed: {
      exerciseTypes() {
        return Array.from( 
          new Set( 
            this.getExercises().map( 
              exercise => exercise.type 
            ) 
          ) 
        );
      },

      exercises() {
        return this.getExercises()

        .filter( 
          exercise => exercise.type === this.exerciseType
        )

        .map( 
          exercise => exercise.name
        );
      }
    },

    methods: {
      getExercises() {
        return this.$store.getters.getExercises;
      }
    },

    created() {
      this.$store.dispatch( 'fetchExercises' );
    }
  }
</script>

<style scoped>

</style>
