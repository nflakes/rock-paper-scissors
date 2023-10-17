        function game() {
            let playerScore = 0;
            let computerScore = 0;
        
            function playRound(playerSelection, computerSelection) {
                const playerChoice = playerSelection.toLowerCase();
                const computerChoice = computerSelection.toLowerCase();
        
                if (playerChoice === computerChoice) {
                    return `It's a tie ${playerSelection} equals ${computerSelection}`;
                } else if (
                    (playerChoice === 'rock' && computerChoice === 'scissors') ||
                    (playerChoice === 'paper' && computerChoice === 'rock') ||
                    (playerChoice === 'scissors' && computerChoice === 'paper')
                ) {
                    playerScore++;
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                } else {
                    computerScore++;
                    return `You Lose! ${computerSelection} beats ${playerSelection}`;
                }
            }
        
            for (let i = 0; i < 5; i++) {
                const playerSelection = prompt('Enter your choice: Rock, Paper, Scissors');
                const computerSelection = getComputerChoice();
                const roundResult = playRound(playerSelection, computerSelection);
                console.log(roundResult);
            }
        
            if (playerScore > computerScore) {
                console.log(`You win the game! Final Score: PLAYER ${playerScore} - COMPUTER ${computerScore}`);
            } else if (playerScore < computerScore) {
                console.log(`You lose the game! Final Score: COMPUTER ${computerScore} - PLAYER ${playerScore}`);
            } else {
                console.log(`It's a tie! Final Score: PLAYER ${playerScore} - COMPUTER ${computerScore}`);
            }
        }
        
        function getComputerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const random = Math.floor(Math.random() * 3);
            return choices[random];
        }
        
        game();
        