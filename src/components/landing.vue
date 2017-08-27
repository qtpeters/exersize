
<template>
  <div class="app-viewport" id="file-list">
    
    <md-whiteframe md-elevation="3" class="main-toolbar">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
    
          <span style="flex: 1"></span>
    
          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>
    
          <md-button class="md-icon-button">
            <md-icon>view_module</md-icon>
          </md-button>
        </div>
    
        <div class="md-toolbar-container">
    
          <md-button @click="addWorkout" class="md-fab md-mini">
            <md-icon>add</md-icon>
          </md-button>
        </div>
      </md-toolbar>
    </md-whiteframe>
    
    <main class="main-content">
      <workout-form v-if="state.showWoForm"></workout-form>
    </main>
  </div>
</template>

<script>

  import WorkoutList from './workoutList.vue'
  import WorkoutForm from './workoutform.vue'

  import { mapGetters } from 'vuex'

  export default {
    name: 'landing',
    data() {
      return {
        state: {
          showWoForm: false
        }
      }
    },
    components: {
      'workout-list': WorkoutList,
      'workout-form': WorkoutForm
    },
    computed: mapGetters(['getExercises']),
    methods: {
      addWorkout() {
        this.state.showWoForm = true;
      }
    },
    created() {
      //this.$store.dispatch( 'fetchExercises' );
    }
  }

</script>

<style>
 
  body {
    height: 100vh;
    margin: 0px;
  }
 
  html,
  body,
  .app-viewport {
    height: 100%;
    overflow: hidden;
  }

  .app-viewport {
    display: flex;
    flex-flow: column;
  }

  .main-toolbar {
    position: relative;
    z-index: 10;
  }

  .md-fab {
    margin: 0;
    position: absolute;
    bottom: -20px;
    left: 16px;
    z-index: 10;
    
    .md-icon {
      color: #fff;
    }
  }

  .md-title {
    padding-left: 8px;
    color: #fff;
  }

  .main-content {
    position: relative;
    z-index: 1;
    overflow: auto;
  }

  .md-list-action .md-icon {
    color: rgba(#000, .26);
  }

  .md-avatar-icon .md-icon {
    color: #fff !important;
  }

  .md-sidenav .md-list-text-container > :nth-child(2) {
    color: rgba(#fff, .54);
  }

  .md-account-header {
    .md-list-item:hover .md-button:hover {
      background-color: inherit;
    }

    .md-avatar-list .md-list-item-container:hover {
      background: none !important;
    }
  }

</style>
