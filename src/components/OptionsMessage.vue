<template>
  <div :class="chatMsg.actor == 'other' ? otherClass : selfClass">
    <a class="q-option btn" @click="choose('A', chatMsg.id)">
      {{chatMsg.options[0].text}}</a>
    <a class="q-option btn" @click="choose('B', chatMsg.id)">
      {{chatMsg.options[1].text}}</a>
    <a class="q-option btn" @click="choose('C', chatMsg.id)">
      {{chatMsg.options[2].text}}</a>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: ['chatMsg'],
  data() {
    return {
      otherClass: 'quiz-grid other',
      selfClass: 'quiz-grid self'
    };
  },
  methods: {
    choose(option, id) {
      console.log('OptionsMessage chose:', option, id);
      eventBus.$emit('optionChosen', option, id);
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

.q-option {
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

</style>
