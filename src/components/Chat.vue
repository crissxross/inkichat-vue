<template>
  <div class="container-grid">
    <small style="background-color: grey">* msg id & chosen option: {{ msgId }} {{ chosenOption }} </small>
    <app-message
      v-for="msg in chatdata"
      :chatMsg="msg"
      :key="msg.id"
      v-on:optionChosen="recordChoice($event, msg.id)">
    </app-message>
  </div>
</template>

<script>
import Message from './Message';
import { dialogChatData } from '../data/inkidialog-short';

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
  methods: {
    recordChoice(option, id) {
      this.chosenOption = option;
      this.msgId = id;
      console.log('Chat component records choice:', this.chosenOption, 'msg.id:', id);
    }
  },
  created() {
    console.log('Chat component created');
  }

};
</script>

<style scoped>
.container-grid {
  display: grid;
  grid-row-gap: 10px;
  /* padding: 20px 5px 10px; */
  padding: 5px;
  color: #F4F4F4;
}
</style>
