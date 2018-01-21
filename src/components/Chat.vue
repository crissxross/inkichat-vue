<template>
  <div class="container-grid">
    <app-message
      v-for="msg in displayedMessages"
      :chatMsg="msg"
      :key="msg.id"
      :replyId="currentReplyId">
    </app-message>
  </div>
</template>

<script>
import Message from './Message';
import { dialogChatData } from '../data/inkidialog-short';
import { eventBus } from '../event-bus';

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
      currentReplyId: null,
      start: false,
      sendInterval: null,
      delay: 500
    };
  },
  created() {
    console.log('chatdata.length:', this.chatdata.length);
    this.startSendingMessages();
    eventBus.$on('optionChosen', (msgId, option) => {
      this.handleChosenOptionMsg(msgId, option);
      // this.startSendingMessages();
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
        if (this.currentMessage[0].actionType === 'OPTIONS') {
          console.log('OPTIONS msg!');
          this.stopSendingMessages();
          return this.displayedMessages.push(this.currentMessage[0]);
        }
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
    },
    handleChosenOptionMsg(msgId, option) {
      console.log('handleChosenOptionMsg msg id:', msgId, ' option:', option);
      if (this.currentMsgId === msgId) {
        this.currentReplyId = option;
      }
      this.startSendingMessages();
      return this.currentReplyId;
    }
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
