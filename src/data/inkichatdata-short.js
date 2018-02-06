// truncated chat text for development use or testing
// stops where girl is interrupted by mum
export const ChatData = [
  {
    id: 1,
    actor: 'other',
    actionType: 'SAYS',
    text: 'r u going to sam’s party?'
  },
  {
    id: 2,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'no I’m grounded'
  },
  {
    id: 3,
    actor: 'other',
    actionType: 'SAYS',
    text: 'grounded? oh girl, that sucks! Why? What did you do?'
  },
  {
    id: 4,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'I sneaked out wearing Mum’s giant gold hoops and lost one',
        score: 10
      },
      {
        text: 'spent £££s on music clothes & shit, supposed to be saving for uni',
        score: 10
      },
      {
        text: 'broke Jamie’s gamepad accidentally... on purpose',
        score: 10
      }
    ]
  },
  {
    id: 5,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'omg',
      'sad',
      'haha'
    ]
  },
  {
    id: 6,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'Yeah. So mean, they took away my mobile, restricted internet to exam revision. Boring!'
  },
  {
    id: 7,
    actor: 'other',
    actionType: 'SAYS',
    text: 'how you chatting to me then?'
  },
  {
    id: 8,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'I have ways & means ha ha ha'
  },
  {
    id: 9,
    actor: 'other',
    actionType: 'SAYS',
    text: 'like what?'
  },
  {
    id: 10,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'I looked up how to hack around parental controls. Connection bit dodgy but ok'
  },
  {
    id: 11,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Wow! You’re like a real hacker. You’ll be in Anonymous next'
  },
  {
    id: 12,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'you calling me a geek? I\'m soooo insulted!',
        score: 10
      },
      {
        text: 'I just followed a tutorial. No big deal',
        score: 5
      },
      {
        text: 'how do you know I\'m not already?',
        score: 0
      }
    ]
  },
  {
    id: 13,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'ha ha only kidding',
      'False modesty don\'t work on me, babe.',
      'Don\'t get clever, it doesn\'t suit you.'
    ]
  },
  {
    id: 14,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'if you think I\'m showing off, I\'m not',
    pause: 2500
    // pauses come after own id text, i.e. pause before next id msg
  },
  {
    id: 15,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'Beccy?',
    pause: 3000
  },
  {
    id: 16,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'u there?',
    pause: 2500
  },
  {
    id: 17,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'anyway KPC is not that hard',
    pause: 1500
  },
  {
    id: 18,
    actor: 'other',
    actionType: 'SAYS',
    text: 'KPC?'
  },
  {
    id: 19,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'keeping parents clueless'
  },
  {
    id: 20,
    actor: 'other',
    actionType: 'SAYS',
    text: 'lololoool'
  },
  {
    id: 21,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'p999! sec',
    pause: 4000
  }
];
