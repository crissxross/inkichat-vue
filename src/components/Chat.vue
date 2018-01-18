<template>
  <div class="container-grid">
    <!-- p for TESTING only -->
    <p style="color: grey"> <small>Send messages:</small>
      <button @click="startSendingMessages">START</button>
      <button @click="stopSendingMessages">STOP</button>
      <button @click="sendNextMessage">Next one</button>
      <small>(msg. {{ msgId }} ) chosen option: {{ chosenOption }}</small>
    </p>
    <app-message
      v-for="msg in displayedMessages"
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
      currentMsgId: 0,
      currentMessage: [],
      displayedMessages: [],
      start: false,
      sendInterval: null,
      delay: 1000,
      chosenOption: '',
      msgId: ''
    };
  },
  created() {
    console.log('chatdata.length:', this.chatdata.length);
    this.startSendingMessages();
    eventBus.$on('optionChosen', (option, id) => {
      this.chosenOption = option;
      this.msgId = id;
      console.log('Chat component handles event choice:', this.chosenOption, this.msgId);
    });
  },
  methods: {
    startSendingMessages() {
      this.sendInterval = setInterval(this.sendNextMessage, this.delay);
      this.start = true;
      console.log('start:', this.start);
    },
    sendNextMessage() {
      if (this.currentMsgId < this.chatdata.length) {
        const nextMsgId = this.currentMsgId + 1;
        this.currentMessage = this.chatdata.slice(this.currentMsgId, nextMsgId);
        this.currentMsgId++;
        console.log('currentMsgId updated:', this.currentMsgId);
        return this.displayedMessages.push(this.currentMessage[0]);
      } else {
        console.log('No more messages to send!');
        this.stopSendingMessages();
      }
    },
    stopSendingMessages() {
      clearInterval(this.sendInterval);
      this.start = false;
      console.log('start:', this.start);
    }
  }
  // Does anything need to be a computed property?
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
/* TEMPORARY STYLES FOR TESTING PURPOSES */
button {
  cursor: pointer;
  padding: 2px;
  background-color: gainsboro;
}
</style>
