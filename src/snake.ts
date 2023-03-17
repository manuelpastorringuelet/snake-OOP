import { Direction } from "./types";
import { coordToId, idToCoord } from "./utils";

export class Snake {
  snake: string[] = ["11-11", "12-11", "13-11"];
  snakeDirection: Direction = {
    v: -1,
    h: 0,
  };

  constructor(__snake: string[], __snakeDirection: Direction) {
    this.snake = __snake;
    this.snakeDirection = __snakeDirection;
  }

  drawSnake() {
    const snakeSquareStyle = "snake-square";

    const allSnakeSquares = document.querySelectorAll(`.${snakeSquareStyle}`);

    allSnakeSquares.forEach((snakeBlock) => {
      snakeBlock.classList.remove(snakeSquareStyle);
    });

    // loop trough snake array
    this.snake.forEach((id) => {
      // querySelector all snake squares
      const snakeSquare = document.getElementById(id) as HTMLDivElement;
      // add class "snake-square" to it
      snakeSquare?.classList.add(snakeSquareStyle);
    });

    // remove style of the tail
    let snakeTailSquare = document.getElementById(
      this.snake[this.snake.length]
    );
    snakeTailSquare?.classList.remove(snakeSquareStyle);
  }

  updateSnake(apple: string) {
    const snakeHead = this.snake[0];

    const snakeHeadV = idToCoord(snakeHead)[0] + this.snakeDirection.v;

    const snakeHeadH = idToCoord(snakeHead)[1] + this.snakeDirection.h;

    const newSnakeHead = coordToId([snakeHeadV, snakeHeadH]);

    if (this.snake.includes(newSnakeHead)) {
      throw new Error("GAME OVER!");
    }

    const slicedSnake =
      newSnakeHead !== apple
        ? this.snake.slice(0, this.snake.length - 1)
        : this.snake;

    const newSnake = [newSnakeHead, ...slicedSnake];

    return newSnake;
  }
}
