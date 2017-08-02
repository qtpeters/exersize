
<template>
  <div class="container">
    <md-layout md-gutter md-column>
      
      <md-layout md-row md-gutter class="header topcolor">
      </md-layout>

      <md-layout md-row md-gutter class="controls">

        <md-layout md-column md-flex="5">

          <md-layout md-row class="topcolor">
          </md-layout>

          <md-layout md-row class="bottomcolor">
            <md-button class="md-icon-button md-raised button md-primary">
              <md-icon>+</md-icon>
            </md-button>
          </md-layout>

        </md-layout>

        <!-- md-layout class="button" md-flex="10">
        </md-layout -->
        
        <md-layout md-column>

          <md-layout md-row class="topcolor">
          </md-layout>

          <md-layout md-row class="bottomcolor">
          </md-layout>

        </md-layout>
        

      </md-layout>

      <md-layout md-row md-gutter class="workout-list bottomcolor">
        
      </md-layout>

    </md-layout>
  </div>
</template>

<script>

  import WorkoutList from './workoutList.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'landing',
    components: {
      workoutList: WorkoutList
    },
    computed: mapGetters(['getExercises']),
    created() {
      //this.$store.dispatch( 'fetchExercises' );
    }
  }

</script>

<style scoped>
 
  body {
    height: 100vh;
    margin: 0px;
  }
 
  div.container {
    height: 100vh;
    margin: 0px;
  }

  .topcolor {
    background-color: #A2A2A7;
  }
 
  .bottomcolor {
    background-color: #B9BCEE;
  }

  .button {
    position: relative;
    top: -21px;
    left: 25px;
  }

  .header {
    height: 30vh;
  }

  .controls {
    height: 10vh;
  }

  .workout-list {
    height: 60vh;
  }

</style>
