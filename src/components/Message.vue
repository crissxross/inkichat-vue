<template>
  <div>
    <!-- SAYS -->
    <div v-if="chatMsg.actionType == 'SAYS'" class="message-grid">
      <app-says-message :chatMsg="chatMsg"></app-says-message>
    </div>

    <!-- OPTIONS -->
    <div v-else-if="chatMsg.actionType == 'OPTIONS' && chatMsg.actor == 'other'" class="quiz-grid other">
      <a class="q-option btn" @click="choose('A')">
        {{chatMsg.options[0].text}}</a>
      <a class="q-option btn" @click="choose('B')">
        {{chatMsg.options[1].text}}</a>
      <a class="q-option btn" @click="choose('C')">
        {{chatMsg.options[2].text}}</a>
    </div>
    <div v-else-if="chatMsg.actionType == 'OPTIONS' && chatMsg.actor == 'girl'" class="quiz-grid self">
      <a class="q-option btn" @click="choose('A')">
        {{chatMsg.options[0].text}}</a>
      <a class="q-option btn" @click="choose('B')">
        {{chatMsg.options[1].text}}</a>
      <a class="q-option btn" @click="choose('C')">
        {{chatMsg.options[2].text}}</a>
    </div>

    <!-- REPLIES -->
    <div v-if="chatMsg.actionType == 'REPLIES'" class="message-grid">
      <app-replies-message :chatMsg="chatMsg"></app-replies-message>
    </div>

  </div>
</template>

<script>
import SaysMessage from './SaysMessage';
import RepliesMessage from './RepliesMessage';

export default {
  components: {
    appSaysMessage: SaysMessage,
    appRepliesMessage: RepliesMessage
  },
  props: ['chatMsg'],
  methods: {
    choose(option) {
      console.log('Message option chosen:', option);
      this.$emit('optionChosen', option);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.message-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-row-gap: 10px;
}

/* ----- for quizzy questions ----- */
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
