<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'sample',
  data() {
    return {
    };
  },

  computed: {
    ...mapState({
      msg: state => state.msg,
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
