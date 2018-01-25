<template>
  <div class="container">
    <!-- SAYS -->
    <div v-if="chatMsg.actionType == 'SAYS'" class="message-grid">
      <app-says-message :chatMsg="chatMsg"></app-says-message>
    </div>
    <!-- OPTIONS -->
    <div v-else-if="chatMsg.actionType == 'OPTIONS'" class="message-grid">
      <app-options-message :chatMsg="chatMsg"></app-options-message>
    </div>
    <!-- REPLIES -->
    <div v-else-if="chatMsg.actionType == 'REPLIES'" class="message-grid">
      <app-replies-message
        :chatMsg="chatMsg"
        :replyId="replyId">
      </app-replies-message>
    </div>
  </div>
</template>

<script>
import SaysMessage from './SaysMessage';
import RepliesMessage from './RepliesMessage';
import OptionsMessage from './OptionsMessage';

export default {
  components: {
    appSaysMessage: SaysMessage,
    appRepliesMessage: RepliesMessage,
    appOptionsMessage: OptionsMessage
  },
  props: ['chatMsg', 'replyId']
};
</script>

<style lang="scss" scoped>
/* container needed for FLEX context - see NOTE in Chat.vue */
.container {
  margin: 5px 0;
}
.message-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-row-gap: 10px;
}
</style>
