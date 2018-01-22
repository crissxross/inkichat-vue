<template>
  <div class="container-grid">
    <app-message
      v-for="msg in sentMessages"
      :chatMsg="msg"
      :key="msg.id"
      :replyId="latestReplyId">
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
      sentMessages: [],
      latestReplyId: null,
      messagesOnDisplay: [], // like filtered messages so computed?
      maxMsgsInView: 6,
      start: false,
      sendInterval: null,
      delay: 1000
      // TODO: dynamically program delay
      // for timing delay see - https://codepen.io/crissxross/pen/MrxGZY?editors=0010
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
        // If MAX NUMBER OF MESSAGES IN VIEW...
        // maybe simply animate the list upwards so that
        // the excess earlier messages slide out of view
        // TRY PAGINATION: see - https://codepen.io/crissxross/pen/NXJaWZ
        if (this.sentMessages.length === this.maxMsgsInView) {
          console.log('MAX', this.maxMsgsInView, 'messages in view reached! Sent messages =', this.sentMessages.length);
        }
        this.currentMsgId++;
        console.log('currentMsgId updated:', this.currentMsgId);
        if (this.currentMessage[0].actionType === 'OPTIONS') {
          // console.log('OPTIONS msg!');
          this.stopSendingMessages();
          return this.sentMessages.push(this.currentMessage[0]);
        }
        return this.sentMessages.push(this.currentMessage[0]);
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
        this.latestReplyId = option;
      }
      this.startSendingMessages();
      return this.latestReplyId;
    }
    // TODO: PAGINATE sentMessages
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
