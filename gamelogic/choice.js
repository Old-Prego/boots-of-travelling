const beginFight = require('./fight')
const userChoice = document.querySelector('chosen_path')
const roomID = document.querySelector('input')

//basic skeleton to handle diffrent results based on user choice....
function choiceResults(userChoice){

    if ( userChoice === roomID.nextRoom){
      goToNextroom()
    }else if (userChoice === roomID.initFight) {
      startFight()
    }else if (userChoice === roomID.itemChoice) {
      pickupItem()
    }else{
      displayResult()
    }

}

//if the user chioce triggers an itemChoice
function pickupItem(){
  displayResult(userChoice)
  displayItemStats()
  disableitemPickup()
}

//if the user choice leads to the next room
function goToNextroom(){
  displayResult(userChoice)
}

//if the user choice begins a fight
function startFight(){
  displayResult(userChoice)
}

//generates the messages for the user...
function displayResult(userChoice){
    switch (userChoice){
      case roomID.choice1:
        return roomID.result1;
      case roomID.choice2:
        return roomID.result2;
      case roomID.choice3:
        return roomID.result3;
      case roomID.choice4:
        return roomID.result4;

    }
}

displayItemStats(){

}

disableitemPickup(){

}
