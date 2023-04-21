import {
  Move,
  Outcome,
  createRockPaperScissor,
} from "./createRockPaperScissors";

describe("rock-paper-scissor", () => {
  describe("player move paper", () => {
    test("should return player wins if opponent move rock", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Paper, Move.Rock);
      // Assert
      expect(actual).toBe(Outcome.PlayerWins);
    });

    test("should return player loses if opponent move scissor", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Paper, Move.Scissor);
      // Assert
      expect(actual).toBe(Outcome.PlayerLoses);
    });

    test("should return tie if opponent move paper", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Paper, Move.Paper);
      // Assert
      expect(actual).toBe(Outcome.Tie);
    });
  });

  describe("player move rock", () => {
    test("should return player wins if opponent move scissor", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Rock, Move.Scissor);
      // Assert
      expect(actual).toBe(Outcome.PlayerWins);
    });
    test("should return player loses if opponent move paper", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Rock, Move.Paper);
      // Assert
      expect(actual).toBe(Outcome.PlayerLoses);
    });

    test("should return tie if opponent move rock", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Rock, Move.Rock);
      // Assert
      expect(actual).toBe(Outcome.Tie);
    });
  });

  describe("player move scissor", () => {
    test("should return player wins if opponent move paper", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Scissor, Move.Paper);
      // Assert
      expect(actual).toBe(Outcome.PlayerWins);
    });

    test("should return player loses if opponent move rock", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Scissor, Move.Rock);
      // Assert
      expect(actual).toBe(Outcome.PlayerLoses);
    });

    test("should return tie if opponent move scissor", () => {
      // Arrange
      const sut = createRockPaperScissor();
      // Act
      const actual = sut.play(Move.Scissor, Move.Scissor);
      // Assert
      expect(actual).toBe(Outcome.Tie);
    });
  });
});
