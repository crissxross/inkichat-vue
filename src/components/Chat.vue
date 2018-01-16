<template>
  <div class="container-grid">
    <!-- <small style="background-color: grey">(msg. {{ msgId }} ) chosen option: {{ chosenOption }} </small> -->
    <app-message
      v-for="msg in chatdata"
      :chatMsg="msg"
      :key="msg.id">
    </app-message>
  </div>
</template>

<script>
import Message from './Message';
import { dialogChatData } from '../data/inkidialog-short';
import { eventBus } from '../main';

export default {
  components: {
    appMessage: Message
  },
  data() {
    return {
      chatdata: dialogChatData,
      chosenOption: '',
      msgId: ''
    };
  },
  created() {
    console.log('Chat component created');
    eventBus.$on('optionChosen', (option, id) => {
      this.chosenOption = option;
      this.msgId = id;
      console.log('Chat component handles event choice:', this.chosenOption, this.msgId);
    });
  }

};
</script>

<style scoped>
.container-grid {
  display: grid;
  grid-row-gap: 10px;
  padding: 10px 5px 10px;
  /* padding: 5px; */
  color: #F4F4F4;
}
</style>
