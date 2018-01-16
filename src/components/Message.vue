<template>
  <div class="message-grid">
    <!-- SAYS -->
    <div v-if="chatMsg.actionType == 'SAYS' && chatMsg.actor == 'other'" class="other-grid">
      <div class="icon"><i class="material-icons">account_circle</i></div>
      <div class="msg">{{ chatMsg.text }}</div>
    </div>
    <div v-else-if="chatMsg.actionType == 'SAYS' && chatMsg.actor == 'girl'" class="self-grid">
      <div class="icon"><i class="material-icons">face</i></div>
      <div class="msg">{{ chatMsg.text }}</div>
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
    <div v-if="chatMsg.actionType == 'REPLIES' && chatMsg.actor == 'other'" class="other-grid">
      <div class="icon"><i class="material-icons">account_circle</i></div>
      <div class="msg">other REPLIES...{{chatMsg.replies[0]}}</div>
    </div>
    <div v-else-if="chatMsg.actionType == 'REPLIES' && chatMsg.actor == 'girl'" class="self-grid">
      <div class="icon"><i class="material-icons">face</i></div>
      <div class="msg">girl REPLIES...{{chatMsg.replies[0]}}</div>
    </div>

  </div>
</template>

<script>
export default {
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
$self-color: #0077e6;
$other-color: #9e0012;

.message-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-row-gap: 10px;
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

.msg, .q-option {
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
