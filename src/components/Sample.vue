<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'sample',
  data() {
    return {
      msg: 'Welcome to My Vuex Sample.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
