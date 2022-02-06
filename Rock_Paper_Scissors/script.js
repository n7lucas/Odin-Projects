function computerPlay () {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}

function round( playerSelection , computeSelection) {
    if (playerSelection === "ROCK" && computeSelection === "ROCK") {
        return 0 }
        else if ( playerSelection === "SCISSORS" && computeSelection === "ROCK") {
            return 0 }
        else if (playerSelection == "PAPER" && computeSelection == "PAPER") {
                return 0;
            }
    if (playerSelection == "ROCK" && computeSelection == "SCISSORS") {
        return 1;
    }
    if (playerSelection == "PAPER" && computeSelection == "ROCK") {
        return 1;
    }
    if (playerSelection == "SCISSORS" && computeSelection == "PAPER") {
        return 1;
    }
    if (playerSelection == "SCISSORS" && computeSelection == "ROCK") {
        return 2;
    }
    if (playerSelection == "ROCK" && computeSelection == "PAPER") {
        return 2;
    }
    if (playerSelection == "PAPER" && computeSelection == "SCISSORS") {
        return 2;
    }
    }

    function game () {
        let human = 0
        let roboto = 0;
        let draw = 0;
        for (i =0; i <= 5; i ++) {
            let userchoice = prompt("Please enter you Choice (Rock, Paper or Scissors");
            const computechoice = computerPlay();
            result = round(userchoice.toUpperCase(), computechoice.toUpperCase());
            if (result === 1) {
                 human += 1;
                 console.log("You Won that one")
            }else if ( result === 2) {
                roboto += 1;
                console.log("You Lose that one")
            } else if (result === 0) {
                draw += 1;
                console.log("Draw")
            }
            //if ()
            //result.push(round(userchoice.toUpperCase(), computechoice.toUpperCase()));
        } if (human > roboto) {
            return console.log("You Won a Best of 5");
        } else if (human < roboto) {
            return console.log("You sucks, you lose for a robot");
        } else if ( draw > human && draw > roboto ) {
            return consolelog("Its a Draw")
        }
    }
//onst playerchoice = "roCK"
//const computechoice = computerPlay()

//round( playerchoice.toUpperCase(), computechoice.toUpperCase())
game()

console.log("teste")
