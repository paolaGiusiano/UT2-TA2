function getTopFiveWorstPlayers(leaderBoard) {
    return leaderBoard.sort((a, b) => a.score - b.score).slice(0, 5);
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

console.log(getTopFiveWorstPlayers(leaderBoard));