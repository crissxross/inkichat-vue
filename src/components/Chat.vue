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
import Message from './Message';
import { dialogChatData } from '../data/inkidialog-short';
import { eventBus } from '../event-bus';

export default {
  components: {
    appMessage: Message
  },
  data() {
    return {
      chatData: dialogChatData,
      currentMsgId: 0,
      currentMessage: [],
      sentMessages: [],
      latestReplyId: null,
      start: false, // only using for logging currently
      maxVisible: 6,
      startIndexVis: 0,
      endIndexVis: 0,
      sendInterval: null,
      delay: 1000
      // TODO: dynamically program delay
      // for timing delay see - https://codepen.io/crissxross/pen/MrxGZY?editors=0010
    };
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
      if (this.currentMsgId < this.chatData.length) {
        const nextMsgId = this.currentMsgId + 1;
        this.currentMessage = this.chatData.slice(this.currentMsgId, nextMsgId);
        this.currentMsgId++;
        console.log('currentMsgId updated:', this.currentMsgId);
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
    handleChosenOptionMsg(msgId, option) {
      console.log('handleChosenOptionMsg msg id:', msgId, ' option:', option);
      if (this.currentMsgId === msgId) {
        this.latestReplyId = option;
      }
      this.startSendingMessages();
      return this.latestReplyId;
    },
    stopSendingMessages() {
      clearInterval(this.sendInterval);
      this.start = false;
      console.log('start:', this.start);
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
