
<template>
  <div>
    <h3>Hello Vue.js</h3>
    <hr />
    <p v-for="e in getExercises">{{e.name}}</p>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'landing',
    components: {},
    computed: mapGetters(['getExercises']),
    created() {
      this.$store.dispatch( 'fetchExercises' );
    }
  }

</script>

<style>

</style>
