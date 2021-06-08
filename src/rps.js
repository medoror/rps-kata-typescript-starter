// console.log("Typescript is dooooppppeee");

const rps = (p1, p2) => {

    if(p1 === p2){
        return "draw";
    }

    let winner = "";
    if(p1 === "rock"){
        if(p2 === "scissors"){
            winner = "rock";
        }else if(p2 === "paper"){
            winner = "paper";
        }
    }else if(p1 === "scissors"){
        if(p2 === "rock"){
            winner = "rock";
        }else if(p2 === "paper"){
            winner = "scissors";
        }
    }else if(p1 === "paper"){
        if(p2 === "scissors"){
            winner = "scissors";
        }else if (p2 === "rock"){
            winner = "paper";
        }
    }

    return winner;

};

module.exports = rps;