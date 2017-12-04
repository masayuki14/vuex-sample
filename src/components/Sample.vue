<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
    length: {{ msgLength }}<br>
    <input type="text" v-model="newMsg" />
    <button @click="update">更新</button>
    <button @click="repeat">繰り返す</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import * as types from '@/store/mutation-types';

export default {
  name: 'sample',
  data() {
    return {
      newMsg: null,
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

  methods: {
    update() {
      this.$store.commit(types.UPDATE_MESSAGE, this.newMsg);
    },
    repeat() {
      this.$store.dispatch('repeat');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
