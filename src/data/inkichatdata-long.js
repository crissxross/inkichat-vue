// complete chat text
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
  },
  {
    id: 22,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'bak'
  },
  {
    id: 23,
    actor: 'other',
    actionType: 'SAYS',
    text: '?'
  },
  {
    id: 24,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'mum wants me to get some beauty sleep',
        score: 10
      },
      {
        text: 'mum no trust checking up on me ha ha ha',
        score: 5
      },
      {
        text: 'nearly got caught must to do some revision 4 real',
        score: 0
      }
    ]
  },
  {
    id: 25,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'Nothing more important but later, yeah?',
      'Someone needs to keep watch on you',
      'Don\'t be such a bore bag loser!'
    ]
  },
  {
    id: 26,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'no way am i shutting down just yet'
  },
  {
    id: 27,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Stuff parental control! How do you take punishment?'
  },
  {
    id: 28,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'hate it! soooo not fair!',
        score: 5
      },
      {
        text: 'hate it but to be fair i did mess up',
        score: 0
      },
      {
        text: 'makes me so mad I could kill',
        score: 10
      }
    ]
  },
  {
    id: 29,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'You said it, girlfirend!',
      'Wimp!',
      'Go for it!'
    ]
  },
  {
    id: 30,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Are you watching the way you behave?'
  },
  {
    id: 31,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'I\'m watching out so I don\'t get caught',
        score: 10
      },
      {
        text: 'don\'t think about it we all make mistakes',
        score: 5
      },
      {
        text: 'I don\'t get you what kind of question is that?',
        score: 0
      }
    ]
  },
  {
    id: 32,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'eyes are on you, girl, 24/7',
      'We don\'t all forgive and forget mistakes.',
      'got something to hide?'
    ]
  },
  {
    id: 33,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'whatevs'
  },
  {
    id: 34,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Do you think everybody likes you?'
  },
  {
    id: 35,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'nobody hates me do they?',
        score: 10
      },
      {
        text: 'my friends like me',
        score: 5
      },
      {
        text: 'you can\'t please everyone',
        score: 0
      }
    ]
  },
  {
    id: 36,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'if you stay sweet, baby, they won\'t',
      'You\'d like to think so, wouldn\'t you?',
      'that\'s loser talk! Luser!'
    ]
  },
  {
    id: 37,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'i got lotsa friends'
  },
  {
    id: 38,
    actor: 'other',
    actionType: 'SAYS',
    text: 'But do you think your BFF really likes you best?'
  },
  {
    id: 39,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'I\'ll hate her forever if I find out she doesn\'t',
        score: 10
      },
      {
        text: 'why you asking? what she been saying about me?',
        score: 5
      },
      {
        text: 'yes!!!!!!',
        score: 0
      }
    ]
  },
  {
    id: 40,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'She\'s more B-word than BFF. Lots more pretty fish in the sea',
      'She\'s envious of you bigtime and you know where that can lead',
      'So smug! How can you be so sure?'
    ]
  },
  {
    id: 41,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'I\'m best BF'
  },
  {
    id: 42,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Are you the best looking out of all your friends?'
  },
  {
    id: 43,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'I don\'t like to brag but...',
        score: 10
      },
      {
        text: 'TBH prob not but I\'m not bad looking',
        score: 5
      },
      {
        text: 'wat!? we\'re not in a beauty competition',
        score: 0
      }
    ]
  },
  {
    id: 44,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'If you\'ve got it flaunt it! But make sure you keep it in shape, girl',
      'Must try harder! That\'s your beauty school report that is',
      'girlfriend, you’re soooo out of the competition, you didn’t even make the heats!'
    ]
  },
  {
    id: 45,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'I\'ve got a question for you'
  },
  {
    id: 46,
    actor: 'other',
    actionType: 'SAYS',
    text: 'shoot'
  },
  {
    id: 47,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'Would you rather be rich and ugly or pretty but poor?',
        score: 10
      },
      {
        text: 'If I told you to jump in a lake would you?',
        score: 5
      },
      {
        text: 'do I know you?',
        score: 0
      }
    ]
  },
  {
    id: 48,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'Good question',
      'I wouldn\'t ask that if I were you',
      'You know me, don\'t pretend you don\'t'
    ]
  },
  {
    id: 49,
    actor: 'other',
    actionType: 'SAYS',
    text: 'The question is will more people like you if'
  },
  {
    id: 50,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'why do you keep saying people don\'t like me?'
  },
  {
    id: 51,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Answer the question! Will more people like you if'
  },
  {
    id: 52,
    actor: 'other',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'you look pretty as a doll?',
        score: 10
      },
      {
        text: 'you look like you\'re not very clever?',
        score: 5
      },
      {
        text: 'you make them laugh?',
        score: 0
      }
    ]
  },
  {
    id: 53,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'Cute! Everyone likes a pretty face',
      'No one likes a know-all',
      'TTTT your jokes are embarrassing, seriously'
    ]
  },
  {
    id: 54,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'g2g p999'
  },
  {
    id: 55,
    actor: 'other',
    actionType: 'SAYS',
    text: 'girly, there’s no parent alert. You don’t have to go',
    pause: 1000
  },
  {
    id: 56,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'I\'m bored of this game'
  },
  {
    id: 57,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Don\'t you want to find out who you really are?'
  },
  {
    id: 58,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'what do you mean?'
  },
  {
    id: 59,
    actor: 'other',
    actionType: 'SAYS',
    text: 'If you change how you look, do you change who you are?'
  },
  {
    id: 60,
    actor: 'other',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'If you look like a princess, you’ll be treated like a princess',
        score: 10
      },
      {
        text: 'I feel more confident when I’m looking good',
        score: 5
      },
      {
        text: 'clothes & stuff won’t change who I am',
        score: 0
      }
    ]
  },
  {
    id: 61,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'Look a million dollars and you\'ll be a million dollars',
      'Dress to impress',
      'You wanna be a nonentity all your life?'
    ]
  },
  {
    id: 62,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Tell me, do you act the way you want to be?'
  },
  {
    id: 63,
    actor: 'other',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'I want to be liked',
        score: 10
      },
      {
        text: 'I am who I am',
        score: 5
      },
      {
        text: 'I act the way I please',
        score: 0
      }
    ]
  },
  {
    id: 64,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'It feels good to be liked, doesn\'t it?',
      'You\'re not who you think you are',
      'Don\'t act tough, it doesn\'t suit you. Act to please.'
    ]
  },
  {
    id: 65,
    actor: 'girl',
    actionType: 'SAYS',
    text: 'do you know me?'
  },
  {
    id: 66,
    actor: 'other',
    actionType: 'SAYS',
    text: 'I know your popularity (better than you)'
  },
  {
    id: 67,
    actor: 'other',
    actionType: 'SAYS',
    text: 'What do you think makes a person popular?'
  },
  {
    id: 68,
    actor: 'other',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'Pretty girls are always popular',
        score: 10
      },
      {
        text: 'If you\'re willing to please it helps',
        score: 5
      },
      {
        text: 'being interested in other people',
        score: 0
      }
    ]
  },
  {
    id: 69,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'You got that right, dollface',
      'Good girl',
      'Are you trying to make me feel ill?'
    ]
  },
  {
    id: 70,
    actor: 'other',
    actionType: 'SAYS',
    text: 'How likeable is a doll?'
  },
  {
    id: 71,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'depends how cute she is',
        score: 10
      },
      {
        text: 'depends how real she is',
        score: 5
      },
      {
        text: 'what\'s a doll got to do with anything?',
        score: 0
      }
    ]
  },
  {
    id: 72,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'Like, like, like! As cute as cute can be',
      'What\'s real really? Likeability is everything',
      'Everything, you warty meathead!'
    ]
  },
  {
    id: 73,
    actor: 'other',
    actionType: 'SAYS',
    text: 'Is a doll cool, helpless or trapped?'
  },
  {
    id: 74,
    actor: 'girl',
    actionType: 'OPTIONS',
    options: [
      {
        text: 'cool',
        score: 10
      },
      {
        text: 'helpless',
        score: 5
      },
      {
        text: 'trapped',
        score: 0
      }
    ]
  },
  {
    id: 75,
    actor: 'other',
    actionType: 'REPLIES',
    replies: [
      'You got it! Cool, calm and collectible',
      'A doll shouldn\'t have to do a thing for herself',
      'Are you some ugly agitator? You sound like a traitor'
    ]
  }
];
