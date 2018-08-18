 /*
 * actions.js
 *
 * This file defines our various actions
 *
 *  ------------------
 *  How to create your own actions
 *  -------------------------------
 *  Similar to the characters dictionary array, you can create your own
 *  actions by providing values to the keys listed below.
 *
 *  ------------------------
 *  Character Dictionary Key
 *  ------------------------
 *  name => This is the action identifier (it will not be shown in the game)
 *  icon => This is the path (absolute or relative) to the action's icon image
 *  defeats => This is an array containing the identifiers of actions it can defeat
 *  -----------------------
 *
 */

var RPSActions = [
    {
        name: "rock",
        icon: "actions/Rock.svg",
        defeats: [
            "scissors"
        ]
    },

    {
        name: "paper",
        icon: "actions/Paper.svg",
        defeats: [
            "rock"
        ]
    },

    {
        name: "scissors",
        icon: "actions/Scissors.svg",
        defeats: [
            "paper"
        ]
    }
]

// return a pointer to the action based on a string name
function RPSMatchAction(name) {
    for (var action of RPSActions) {
        if (action.name == name) {
            return action
        }
    }
}

// check if a can defeat b
function RPSCanDefeat(a, b) {
    for (var i of a.defeats) {
        if (i == b.name) {
            return true
        }
    }
    return false
}
