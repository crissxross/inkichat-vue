<template>
  <transition name="slideup-fade" mode="out-in">
  <!-- show options -->
  <div v-if="!choiceMade" :class="chatMsg.actor == 'other' ? otherClass : selfClass" key="choose">
    <a class="q-option btn" @click="choose(chatMsg.id, 0)">
      {{chatMsg.options[0].text}}</a>
    <a class="q-option btn" @click="choose(chatMsg.id, 1)">
      {{chatMsg.options[1].text}}</a>
    <a class="q-option btn" @click="choose(chatMsg.id, 2)">
      {{chatMsg.options[2].text}}</a>
  </div>
  <!-- show chosen option if choice made -->
  <div v-else :class="chatMsg.actor == 'other' ? 'other-grid' : 'self-grid'" key="chosen">
    <div class="icon">
      <img v-if="chatMsg.actor == 'other'" src="../assets/acount_circle.svg" class="icon-other" />
      <img v-else src="../assets/face.svg" class="icon-self" />
    </div>
    <div class="msg">{{ chatMsg.options[chosenOptionId].text }}</div>
  </div>
  </transition>
</template>

<script>
import { eventBus } from '../event-bus';

export default {
  props: ['chatMsg'],
  data() {
    return {
      otherClass: 'quiz-grid other',
      selfClass: 'quiz-grid self',
      chosenOptionId: null,
      choiceMade: false // is this necessary?
    };
  },
  methods: {
    choose(msgId, option) {
      console.log('OptionsMessage chose:', msgId, option);
      this.choiceMade = true;
      this.chosenOptionId = option;
      eventBus.$emit('optionChosen', msgId, option);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.quiz-grid {
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  background-color: #fff;
  padding: 10px;
  margin: 0 5px;
  border-radius: 10px;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.4);
/*   box-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.3); */
}

.msg, .q-option {
  padding: 10px;
  border-radius: 10px;
}

.other .q-option {
  background-color: $other-color;
}

.self .q-option {
  background-color: $self-color;
}

.btn {
  cursor: pointer;
  box-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.3);
}

a:hover {
  box-shadow: inset 0 0 1.5em rgba(255, 255, 255, 0.5), 0 0 1em rgba(0, 0, 0, 0.5);
}

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

.icon-other, .icon-self {
  height: 30px;
}

.icon {
  text-align: center;
/*   border: 1px solid #666; */
}

/* ANIMATION - scoped here with faster timings */
.slideup-fade-enter-active, .slideup-fade-leave-active {
  transition: all .3s;
}
.slideup-fade-enter {
  transform: translateY(5px);
  opacity: 0;
}
.slideup-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}

</style>
