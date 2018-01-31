<template>
  <div id="app">
    <app-chat></app-chat>
  </div>
</template>

<script>
import Chat from './components/Chat';

export default {
  name: 'App',
  components: {
    appChat: Chat
  },
  created() {
    this.$store.dispatch('initChatData'); // ???
  }
};
</script>

<style>
  /* 'reset for minimalists' by Matt Smith */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Roboto, "Helvetica Neue", sans-serif;
    background-color: #FEFFFE;
  }
</style>
