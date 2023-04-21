export enum Move {
  Paper,
  Rock,
  Scissor,
}
export enum Outcome {
  PlayerWins = "PlayerWins",
  PlayerLoses = "PlayerLoses",
  Tie = "Tie",
}

interface IRockPaperScissor {
  play(p1Move: Move, p2Move: Move): Outcome;
}

// Refactor
const outcomes: Outcome[][] = [
  [Outcome.Tie, Outcome.PlayerWins, Outcome.PlayerLoses],
  [Outcome.PlayerLoses, Outcome.Tie, Outcome.PlayerWins],
  [Outcome.PlayerWins, Outcome.PlayerLoses, Outcome.Tie],
];

export const createRockPaperScissor = (): IRockPaperScissor => {
  return {
    play(p1Move: Move, p2Move: Move) {
      return outcomes[p1Move][p2Move];

      // First Version
      // if (p1Move === p2Move) {
      //   return Outcome.Tie;
      // }
      // if (p1Move === Move.Rock && p2Move === Move.Scissor) {
      //   return Outcome.PlayerWins;
      // }
      // if (p1Move === Move.Rock && p2Move === Move.Paper) {
      //   return Outcome.PlayerLoses;
      // }
      // if (p1Move === Move.Scissor && p2Move === Move.Rock) {
      //   return Outcome.PlayerLoses;
      // }
      // if (p2Move === Move.Scissor) {
      //   return Outcome.PlayerLoses;
      // }
      // return Outcome.PlayerWins;
    },
  };
};
