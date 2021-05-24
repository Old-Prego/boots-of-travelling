const beginFight = require('./fight')
const userChoice = document.querySelector('chosen_path')
const roomID = document.querySelector('input')

//basic skeleton to handle diffrent results based on user choice....
function choiceResults(choice){

    if ( choice === roomID.nextRoom){
      goToNextroom()
    }else if (choice === roomID.initFight) {
      startFight()
    }else if (choice === roomID.itemChoice) {
      pickupItem()
    }else{
      displayResult()
    }

}

//if the user chioce triggers an itemChoice
function pickupItem(){
  displayResult(userChoice)
  displayItemStats(roomID.itemID)
  disableitemPickup()
}

//if the user choice leads to the next room
function goToNextroom(){
  displayResult(userChoice)
}

//if the user choice begins a fight
function startFight(){
  displayResult(userChoice)
  if (beginFight.playerWins){
    //function to display choices...
  }else{
    //gameover...
  }
}

//generates the messages for the user...
function displayResult(choice){
    switch (choice){
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

//displays item stats for the user
displayItemStats(){

}

//disbles item pickup choice so that user is unable to duplicate item in inventory...
disableitemPickup(){

}
