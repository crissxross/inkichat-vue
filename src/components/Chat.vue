<template>
  <transition-group name="slideup" mode="out-in" class="container-grid">
    <!-- <small style="color: grey">Display from indexes {{ startIndexVis }} to {{ endIndexVis }}</small> -->
    <app-message
      v-for="msg in visibleMessages"
      :chatMsg="msg"
      :key="msg.id"
      :replyId="latestReplyId">
    </app-message>
  </transition-group>
</template>

<script>
// TODO: improve dynamically programmed readingTime delay
// for timing delay see - https://codepen.io/crissxross/pen/MrxGZY?editors=0010
import Message from './Message';
import { chatData } from '../data/inkichatdata-short'; // eventBus way
import { eventBus } from '../event-bus';

export default {
  components: {
    appMessage: Message
  },
  data() {
    return {
      chatData: chatData, // eventBus way
      currentMsgId: 0,
      currentMessage: [],
      sentMessages: [],
      latestReplyId: null,
      start: false, // only using for logging currently
      maxVisible: 6,
      startIndexVis: 0,
      endIndexVis: 0,
      sendInterval: null,
      delayOffset: 50,
      readingTime: 0
    };
  },
  computed: {
    // VUEX !!! - chatData is not consumed directly by the view, it needs to be transformed into sentMessages by an action &/or mutation, then transformed into visibleMessages, then consumed by view !!!
    // chatData() {
    //   return this.$store.getters.chatData; // INCORRECT !!!
    // },
    visibleMessages() {
      return this.batch(this.sentMessages);
    }
  },
  // Use VUEX state management instead !!!
  created() {
    // VUEX NOTE: see shopping-cart app in examples
    // so maybe need something like:
    // this.$store.dispatch('getAllChatData');
    console.log('chatData.length:', this.chatData.length);
    // console.log('chatData:', this.chatData);
    this.endIndexVis = this.maxVisible;
    this.startSendingMessages();
    eventBus.$on('optionChosen', (msgId, option) => {
      this.handleChosenOptionMsg(msgId, option);
    });
    eventBus.$on('readingTime', readingTime => {
      this.calculateReadingTime(readingTime);
    });
  },
  methods: {
    startSendingMessages() {
      // if (!this.start) {
      //   console.log(this.start);
      //   this.calculateReadingTime(1);
      // }
      this.start = true;
      // console.log('start:', this.start, 'readingTime:', this.readingTime);
      this.sendInterval = setInterval(
        this.sendNextMessage,
        // this.delay + this.readingTime
        this.readingTime
      );
    },
    sendNextMessage() {
      // console.log('sendNextMessage called with readingTime of', this.readingTime);
      if (this.currentMsgId < this.chatData.length) {
        const nextMsgId = this.currentMsgId + 1;
        this.currentMessage = this.chatData.slice(this.currentMsgId, nextMsgId);
        // this.calculateReadingTime();
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
      } else {
        console.log('No more messages to send!');
        this.stopSendingMessages();
      }
    },
    // Display messages in batches of maxVisible size
    batch(sentMsgs) {
      return sentMsgs.slice(this.startIndexVis, this.endIndexVis);
    },
    // FIX - calculateReadingTime is producing delays which are OUT OF SYNC !!! Should it be a computed property ???
    calculateReadingTime(timing) {
      this.readingTime = timing * this.delayOffset;
      console.log('calculateReadingTime from timing argument is', this.readingTime);
      return this.readingTime;
    },
    handleChosenOptionMsg(msgId, option) {
      // console.log('handleChosenOptionMsg msg id:', msgId, ' option:', option);
      if (this.currentMsgId === msgId) {
        this.latestReplyId = option;
      }
      this.startSendingMessages();
      return this.latestReplyId;
    },
    stopSendingMessages() {
      clearInterval(this.sendInterval);
      this.start = false;
      // console.log('start:', this.start);
    }
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
  /* padding: 5px; */
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
