<template>
  <div :class="chatMsg.actor == 'other' ? 'other-grid' : 'self-grid' ">
    <div class="icon">
      <img v-if="chatMsg.actor == 'other'" src="../assets/acount_circle.svg" class="icon-other" />
      <img v-else src="../assets/face.svg" class="icon-self" />
    </div>
    <div class="msg">
      REPLIES... {{ chatMsg.replies[id_reply] }}</div>
    </div>
</template>

<script>
import { eventBus } from '../event-bus';

export default {
  props: ['chatMsg', 'replyId'],
  data() {
    return {
      id_reply: null
    };
  },
  created() {
    // store the replyId for this specific reply instance
    this.id_reply = this.replyId;
    // console.log('on created chatMsg.id is', this.chatMsg.id, '& id_reply is', this.id_reply);

    // for calculating reading time
    // console.log('on created REPLIES chatMsg.id', this.chatMsg.id, 'length is', this.chatMsg.replies[this.id_reply].length);
    const replyReadingTime = this.chatMsg.replies[this.id_reply].length;
    eventBus.$emit('readingTime', replyReadingTime);
  }
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.other-grid {
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: end;
}

.self-grid {
  grid-column: 2 / span 2;
  display: grid;
  grid-template-columns: 1fr 36px;
  align-items: end;
}

.other-grid > .msg {
  background-color: $other-color;
  grid-column: 2;
  justify-self: start;
}

.other-grid .icon {
  grid-column: 1;
  color: $other-color;
}

.self-grid .msg {
  background-color: $self-color;
  grid-column: 1;
  justify-self: end;
  order: 1;
}

.self-grid .icon {
  grid-column: 2;
  order: 2;
  color: $self-color;
}

.msg {
  padding: 10px;
  border-radius: 10px;
}

.icon-other, .icon-self {
  height: 30px;
}

.icon {
  text-align: center;
/*   border: 1px solid #666; */
}

</style>
