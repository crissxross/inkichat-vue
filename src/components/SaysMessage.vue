<template>
  <div v-if="chatMsg.actor == 'other'" class="other-grid">
    <div class="icon"><i class="material-icons">account_circle</i></div>
    <div class="msg">{{ chatMsg.text }}</div>
  </div>
  <div v-else-if="chatMsg.actor == 'girl'" class="self-grid">
    <div class="icon"><i class="material-icons">face</i></div>
    <div class="msg">{{ chatMsg.text }}</div>
  </div>
</template>

<script>
export default {
  props: ['chatMsg']
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

.icon {
  text-align: center;
/*   border: 1px solid #666; */
}

.material-icons {
  font-size: 30px;
}

</style>
