<template>
  <transition-group name="slideup" mode="out-in" class="container-grid">
    <app-message
      v-for="msg in visibleMessages"
      :chatMsg="msg"
      :key="msg.id"
      :replyId="latestReplyId">
    </app-message>
  </transition-group>
</template>

<script>
import Message from './Message';
import { ChatData } from '../data/inkichatdata-long';
import { eventBus } from '../event-bus';

export default {
  components: {
    appMessage: Message
  },
  // Note: chatData is CONSTANT, its data never changes
  data() {
    return {
      chatData: ChatData,
      currentMsgId: 0,
      currentMessage: [],
      sentMessages: [],
      latestReplyId: null,
      start: false,
      maxVisible: 8, // max visible messages
      startIndexVis: 0,
      endIndexVis: 0,
      readingTime: 0,
      wordsPerSecond: 3.3 // 200 words per min / 60 secs
    };
    // Note: average reading time is 200 words per minute
  },
  computed: {
    visibleMessages() {
      return this.batch(this.sentMessages);
    }
  },
  created() {
    // console.log('chatData.length:', this.chatData.length);
    this.endIndexVis = this.maxVisible;
    this.startSendingMessages();
    eventBus.$on('optionChosen', (msgId, option) => {
      this.handleChosenOptionMsg(msgId, option);
      // console.log('eventBus.$on receives optionChosen:', msgId, option);
    });
    eventBus.$on('numOfWordsToRead', (numOfWordsToRead, dramaPause = 0) => {
      this.calculateReadingTime(numOfWordsToRead, dramaPause);
      // console.log('eventBus.$on receives', numOfWordsToRead, 'numOfWordsToRead & dramaPause', dramaPause);
    });
  },
  // Now using ASYNC/AWAIT & recursive sendMessages method
  methods: {
    startSendingMessages() {
      this.start = true;
      // console.log('startSendingMessages: start', this.start, 'current readingTime:', this.readingTime);
      this.sendMessages();
    },
    stopSendingMessages() {
      this.start = false;
      // console.log(this.start, 'so stop!');
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async sendMessages() {
      if (this.start) {
        if (this.currentMsgId < this.chatData.length) {
          const nextMsgId = this.currentMsgId + 1;
          await this.sendNextMessage(nextMsgId);
          this.sendMessages();
        } else {
          console.log('NO MORE messages to send!');
          this.stopSendingMessages();
        }
      }
    },
    async sendNextMessage(nextMsgId) {
      // console.log('sendNextMessage called, currentMsgId:', this.currentMsgId);
      // console.log('sendNextMessage, nextMsgId:', nextMsgId, 'after AWAIT delay for readingTime:', this.readingTime);
      await this.delay(this.readingTime);
      this.currentMessage = this.chatData.slice(this.currentMsgId, nextMsgId);
      this.currentMsgId++;
      // console.log('currentMsgId updated:', this.currentMsgId);
      // increment start & end index of visible messages to display in batches
      if (this.sentMessages.length >= this.maxVisible) {
        this.startIndexVis++;
        this.endIndexVis++;
      }
      // Check for OPTIONS message type
      if (this.currentMessage[0].actionType === 'OPTIONS') {
        this.stopSendingMessages();
        return this.sentMessages.push(this.currentMessage[0]);
      }
      return this.sentMessages.push(this.currentMessage[0]);
    },
    // Display messages in batches of maxVisible size
    batch(sentMsgs) {
      return sentMsgs.slice(this.startIndexVis, this.endIndexVis);
    },
    handleChosenOptionMsg(msgId, option) {
      // console.log('handleChosenOptionMsg msg id:', msgId, ' option:', option);
      if (this.currentMsgId === msgId) {
        this.latestReplyId = option;
      }
      this.startSendingMessages();
      return this.latestReplyId;
    },
    // Using number of words to dynamically determine reading time
    calculateReadingTime(numOfWords, dramaPause) {
      // minimum reading time for very short msgs
      let minTime = 800;
      // default time lag between messages
      let msgLag = 200;
      let lagTime = msgLag + dramaPause;
      // calculation to get base milliseconds...
      let baseTime = Math.round((numOfWords / this.wordsPerSecond) * 1000);
      this.readingTime = (baseTime > minTime ? baseTime : minTime) + lagTime;
      // console.log('calculateReadingTime from numOfWords', numOfWords + '/' + this.wordsPerSecond, '* 1000ms =', baseTime, '+ lagTime', lagTime, '= readingTime:', this.readingTime);
      return this.readingTime;
    }
    // NOTE: for an alternative dynamic reading time algorithm delay see - https://codepen.io/crissxross/pen/MrxGZY?editors=0010
  }
};
</script>

<style scoped>
/* NOTE: from VUE docs:
  "Vue is using an animation technique called FLIP to smoothly transition elements from their old position to their new position using transforms."
  But for my grid layout, these FLIP transitions will only work with elements placed in a FLEX context.
*/
.container-grid {
  /* display: grid;
  grid-row-gap: 10px; */
  display: flex;
  flex-direction: column;
  padding: 10px 5px 10px;
  color: #F4F4F4;
}
/* ANIMATIONS */
.slideup-enter {
  transform: translateY(40px);
  opacity: 0;
}
.slideup-enter-active {
  transition: all 1s .2s;
}
.slideup-leave-active {
  transition: all .75s;
  position: absolute;
  /* NOTE: ^ position: absolute makes sure that other elements may move above this element while it's still being animated, i.e. before it's removed from DOM */
}
.slideup-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.slideup-move {
  transition: transform 1s ease-out;
}
</style>
