
<template>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'workoutList',
    computed: mapGetters([ 'getWorkouts' ]),
    created() {
      //this.$store.dispatch( 'fetchWorkouts' );
    }
  }
</script>

<style scoped>
</style>
