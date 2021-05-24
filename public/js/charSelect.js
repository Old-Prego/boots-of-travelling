const startGame = async function() {

    document.location.replace('/gameplay/1');
      
}

const startButton = document.querySelector('#btn1');
startButton.addEventListener('submit',startGame);