<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
    length: {{ msgLength }}
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
    msgLength() {
      return this.msg.length;
    },
    ...mapState({
      msg: state => state.msg,
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
