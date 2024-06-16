// const rps = (p1, p2) => {
//   let result = '';
//   if (p1 === p2) result = 'Draw';
//   if ((p1 === "Rock" && p2 === "Papper") || (p2 === "Rock" && p1 === "Papper")) result = "Papper";
//   if ((p1 === "Scissor" && p2 === "Papper") || (p2 === "Papper" && p1 === "Scissor")) result = "Scissor";
//   if ((p1 === "Scissor" && p2 === "Rock") || (p2 === "Rock" && p1 === "Scissor"))result = "Rock";
//   return result;
// };


const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};


console.log(rps('paper', 'rock'));