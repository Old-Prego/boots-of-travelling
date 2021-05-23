const roomID  = document.querySelector('input');

//get chosen stat to use against enemy from player
function getPlayerchoice(user){

}

//check if player has wepon to boost
function checkPlayerInventory(user){

}

//gets enemy stats and skill advantage
function getEnemyStats(enemy){


}

//gets player stat choice, adds item boost and compares it enemy skill,
function combat(playerStat, itemBoost, enemyStat){
  let playerStrength  = playerStat + itemBoost;
  if (playerStrength >  enemyStat){
    return true
  }else{
    return false
  }
}

function playerVictory(){
  const playerStrength = getPlayerchoice(roomID.playerID);
  const playerWepon = checkPlayerInventory(roomID.playerID);
  const enemyStrength  = getEnemyStats(roomID.enemyID);

  const playerWins  = combat(playerStrength, playerWepon, enemyStrength);

  return playerWins;
}

module.exports  = playerVictory,
