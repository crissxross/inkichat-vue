<template>
  <div :class="chatMsg.actor == 'other' ? 'other-grid' : 'self-grid' ">
    <div class="icon">
      <img v-if="chatMsg.actor == 'other'" src="../assets/acount_circle.svg" class="icon-other" />
      <img v-else src="../assets/face.svg" class="icon-self" />
    </div>
    <div class="msg">{{ chatMsg.text }}</div>
  </div>
</template>

<script>
import { eventBus } from '../event-bus';

export default {
  props: ['chatMsg'],
  created() {
    // for calculating reading time
    console.log('on created SAYS chatMsg.id', this.chatMsg.id, 'length is', this.chatMsg.text.length);
    const saysReadingTime = this.chatMsg.text.length;
    eventBus.$emit('readingTime', saysReadingTime);
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
  fill: green;
}

.icon {
  text-align: center;
/*   border: 1px solid #666; */
}

</style>
