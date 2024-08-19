function sortLeaderBoardByScoreDesc(leaderBoard){
    //[11,2,22,1].sort((a, b) => a - b)
   return leaderBoard.sort((a, b) => b.score - a.score);
}


const leaderBoard = [
       { player: "John", score: 80 },
       { player: "Charlie", score: 20 },
       { player: "Julio", score: 50 },
       { player: "Bob", score: 80 },
       { player: "Bobby", score: 11 },
       { player: "Tommy", score: 43 },
       { player: "Eric", score: 99 },
       { player: "Alice", score: 100 },
       { player: "Alfred", score: 30 },
     ];

console.log(sortLeaderBoardByScoreDesc(leaderBoard));