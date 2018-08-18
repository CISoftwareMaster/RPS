/*
 * engine.js
 *
 * This file handles:
 *
 * -> most of the interface logic
 * -> core game functionality
 *
 */

// opponent character index tracker
var opponentIndex = NaN

// scores
var scorePlayer = 0
var scoreOpponent = 0

// what is the winning threshold?
var threshold = 3

// this function can be called to randomly pick a character
function RPSPickCharacter() {
    var index = Math.floor(Math.random() * RPSCharacters.length)

    // check our constraints
    if (index >= 0 && index < RPSCharacters.length) {
        // update our opponent index
        opponentIndex = index

        return RPSCharacters[index]
    }
}

// this function can be called to randomly pick an action
function RPSPickAction() {
    var index = Math.floor(Math.random() * RPSActions.length)

    // check our constraints
    if (index >= 0 && index < RPSActions.length) {
        return RPSActions[index]
    }
}

function updateScoreboards() {
   document.getElementById("score-player").innerText = scorePlayer
   document.getElementById("score-opp").innerText = scoreOpponent
}

// this function is called when the opponent needs to pick an action
function RPSOpponentPickAction(playerSelection) {
     var characterAction = document.getElementById("character-action")
     var actions = document.getElementById("actions")

     // get the player's action
     var playerAction = RPSMatchAction(playerSelection)

     // pick an action
    var action = RPSPickAction()

    // update user interface
    characterAction.src = action.icon

    // show the opponent's selection
    characterAction.style.width = "10em"

    // hide actions (temporarily)
    actions.style.opacity = "0.2"
    actions.style.pointerEvents = "none"

    // decide which entity won
    if (RPSCanDefeat(playerAction, action)) {
        // player won the round
        scorePlayer += 1
    }

    else if (RPSCanDefeat(action, playerAction)) {
        // player lost the round
        scoreOpponent += 1
    }

    // update our scoreboards
    updateScoreboards()

    // "reset" our interface if the game is still active
    if (scorePlayer < threshold && scoreOpponent < threshold) {
        setTimeout("RPSHideOpponentAction()", 2000)
    }
    else {
        // get the opponent's character profile
        var opponentCharacter = RPSCharacters[opponentIndex]

        // activate the appropriate message
        if (scorePlayer < scoreOpponent) {
            // player lost
            var index = Math.floor(Math.random() * opponentCharacter.win.length)
            document.getElementById("character-dialogue").innerText = opponentCharacter.win[index]
            document.getElementById("message").innerText = opponentCharacter.name + " Won!"
        }
        else {
            // player won
            var index = Math.floor(Math.random() * opponentCharacter.lose.length)
            document.getElementById("character-dialogue").innerText = opponentCharacter.lose[index]
            document.getElementById("message").innerText = "You Won!"
      }
    }
}

function RPSHideOpponentAction() {
    var actions = document.getElementById("actions")

    // restore default UI state
    document.getElementById("character-action").style.width = "0"
    actions.style.opacity = "1"
    actions.style.pointerEvents = "all"
}

// start executing this block once the page finishes loading
window.onload = function(e) {
    // get pointers to our most-used user-interface elements
    var actionPicker = document.getElementById("actions")
    var characterName = document.getElementById("character-name")
    var characterDialogue = document.getElementById("character-dialogue")
    var characterAvatar = document.getElementById("character-avatar")

    var opponentScoreboardLabel = document.getElementById("score-opp-label")

    // this function is called when the user clicks on an action
    function RPSActionSelected(e) {
        if (e.target.getAttribute("rps-name")) {
            var selectedAction = e.target.getAttribute("rps-name")

            // it's the opponent's turn to pick their action
            setTimeout(`RPSOpponentPickAction(\"${selectedAction}\")`, 500)
        }
    }

    // this function is called whenever a new character is needed to appear
    function RPSPickOpponent() {
        // pick a character
        var character = RPSPickCharacter()

        // pick their dialogue
        var index = Math.floor(Math.random() * character.dialogue.length)
        var dialogue = (index >= 0 && index < character.dialogue.length ? character.dialogue[index] : "Match")

        // update our user interface
        characterName.innerText = character.name
        opponentScoreboardLabel.innerText = character.name
        characterDialogue.innerText = dialogue
        characterAvatar.src = character.avatar

        // update scoreboards
        updateScoreboards()
    }

    // load and insert actions into our actions picker
    if (actionPicker) {
        for (var action of RPSActions) {
            var actionBtn = document.createElement("button")

            // assign the cell class to our button
            actionBtn.classList.add("cell")
            // assign the action name to our button
            actionBtn.setAttribute("rps-name", action.name)
            // assign our event handler to our button
            actionBtn.onclick = RPSActionSelected

            // create then assign our action icon
            var actionIcon = document.createElement("img")
            actionIcon.src = action.icon
            actionBtn.appendChild(actionIcon)

            // insert action
            actionPicker.appendChild(actionBtn)
        }
    }

    // pick an opponent character
    RPSPickOpponent()
}
