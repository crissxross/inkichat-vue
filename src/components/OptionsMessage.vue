<template>
  <transition name="slidey" mode="out-in">
  <!-- show options -->
  <div v-if="!choiceMade" :class="chatMsg.actor == 'other' ? otherClass : selfClass" key="choose">
    <!-- @click="choose(chatMsg.id, 0)" removed because causing errors -->
    <a class="q-option btn"
      @mouseover="gazeTimeChoose(chatMsg.id, 0)"
      @mouseout="cancelGazeTime()"
    >
      {{chatMsg.options[0].text}}</a>
    <a class="q-option btn"
      @mouseover="gazeTimeChoose(chatMsg.id, 1)"
      @mouseout="cancelGazeTime()"
    >
      {{chatMsg.options[1].text}}</a>
    <a class="q-option btn"
      @mouseover="gazeTimeChoose(chatMsg.id, 2)"
      @mouseout="cancelGazeTime()"
    >
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
      choiceMade: false, // is this necessary?
      gazeTimer: null
    };
  },
  created() {
    // emit numOfWordsToRead here to allow time for animation transition so that the msg speech bubble doesn't jump up
    eventBus.$emit('numOfWordsToRead', 3);
  },
  // TODO - FIX if click handler needed:
  // I removed @click="choose(...)" because it was causing errors
  methods: {
    choose(msgId, option) {
      // console.log('OptionsMessage id', msgId, 'chose:', option);
      this.choiceMade = true;
      this.chosenOptionId = option;
      eventBus.$emit('optionChosen', msgId, option);
    },
    gazeTimeChoose(msgId, option) {
      // console.log('MOUSEOVER msgId option', msgId, option);
      this.gazeTimer = setTimeout(() => {
        this.choose(msgId, option);
      }, 1500);
    },
    cancelGazeTime() {
      // console.log('MouseOUT');
      clearTimeout(this.gazeTimer);
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
}

/* ANIMATION */
.slidey-enter-active, .slidey-leave-active {
  transition: all .3s;
}
.slidey-enter {
  transform: translateY(5px);
  opacity: 0;
}
.slidey-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}

</style>
