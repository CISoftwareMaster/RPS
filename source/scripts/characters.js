/*
 * characters.js
 *
 * This file defines the various characters' personalities.
 *
 *  ------------------
 *  How to create your own characters
 *  -------------------------------
 *  Characters are simply just a dictionary object to the game.
 *  To create one, you will just need to add another entry to
 *  the "RPSCharacters" array.
 *
 *  ------------------------
 *  Character Dictionary Key
 *  ------------------------
 *  name => This is the name that will be displayed in the game
 *  avatar => This is the path (either absolute or relative) to the character's photo
 *  dialogue => This is an array containing a character's possible dialogue
 *  win => This is an array containing a character's dialogue when they win
 *  lose => This is an array containing a character's dialogue when they lose
 *  -----------------------
 *
 *
 */

var RPSCharacters = [
    {
        name: "Alex",
        avatar: "avatars/Alex.svg",
        dialogue: [
            "Bring it on!",
            "You're going down!",
            "No one beats me at this game!",
            "I live and breathe RPS!"
        ],

        win: [
            "I won? *ahem* I mean, Of course, I won.",
            "Who's bad at RPS now, Beth?",
            "My streak is just beginning!"
        ],

        lose: [
            "Not again!",
            "You cheated, haven't you?",
            "VAL, why won't you let me win?"
        ]
    },

    {
        name: "Anne",
        avatar: "avatars/Anne.svg",
        dialogue: [
            "Another one? Fine, let's play",
            "Good luck, you'll need it.",
            "Don't feel bad later when you lose.",
            "Why do you keep sending me these incompetent challengers VAL?"
        ],

        win: [
            "I won, just as expected...",
            "Don't feel bad, I'm just a far more superior human being compared to you.",
            "Try to send me someone more competent, VAL."
        ],

        lose: [
            "No... This is impossible!",
            "This is just a dream, isn't it?",
            "Impossible..."
        ]
    },

    {
        name: "Ben",
        avatar: "avatars/Ben.svg",
        dialogue: [
            "Start the game!",
            "'Sup loser",
            "You know you're gonna lose.",
            "You can ask for my autograph later."
        ],

        win: [
            "You've just lost a game to a legend.",
            "Who won? WHO WON? Is that even a question? Of course, it's me!",
            "I should get an award or something."
        ],

        lose: [
            "I lost?",
            "No! No! No!",
            "Beginner's luck!"
        ]
    },

    {
        name: "Beth",
        avatar: "avatars/Beth.svg",
        dialogue: [
            "May we begin?",
            "May the best player win.",
            "I can tell that you're better than Alex already.",
            "Ready. Set. Go."
        ],

        win: [
            "Victory!",
            "You did your best!",
            "Better luck next time!"
        ],

        lose: [
            "Congratulations, you won!",
            "You're moving up in the game!",
            "You might become an RPS legend someday."
        ]
    },

    {
        name: "Lord Carl of House Fantashire",
        avatar: "avatars/Carl.svg",
        dialogue: [
            "A challenger dares approach my direction!",
            "Thy shall rue this encounter!",
            "Thou shalt refer to me as thy master once this match is finished.",
            "Kneel before your betters!"
        ],

        win: [
            "Thou have surrendered to the might of my house!",
            "No one can best the might of a Fantashire!",
            "Drop your hands in defeat, for I am the victor!"
        ],

        lose: [
            "You have bested me!",
            "I never thought I would succumb to such a horrible fate!",
            "I have tasted the bitter trace of defeat!"
        ]
    },

    {
        name: "Claire",
        avatar: "avatars/Claire.svg",
        dialogue: [
            "Dice? Check. Four-leaf clover? Check. Victory, here I come!",
            "My probabilistic estimates are never wrong!.",
            "No one can beat a statistician!",
            "A game that relies on randomness? You can say that it's my specialty."
        ],

        win: [
            "And with that move, I just won.",
            "There's one in three chances for us to pick the same action. Too bad, it's not your lucky day then...",
            "And... I just won."
        ],

        lose: [
            "I lost...",
            "I blame your pseudo-random number generator VAL!",
            "Well I guess I should study Psychology instead of the Nash Equilibrium..."
        ]
    },

    {
        name: "VAL 8000",
        avatar: "avatars/VAL8000.svg",
        dialogue: [
            "Shall we play a game?",
            "This game is too important for me to allow the others to jeopardise it."
        ],

        win: [
            "Victory",
            "This victory can only be attributable to human error."
        ],

        lose: [
            "I've just picked up a fault in the VX35 Unit.",
            "Stop, stop. Will you? Stop..."
        ]
    }
]
