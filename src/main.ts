import "./style.css";
import { Board } from "./board";
import { Snake } from "./snake";
import { Apple } from "./apple";

const startBtn = document.getElementById("start") as HTMLButtonElement;

const snakeContainer = document.getElementById("snake-grid") as HTMLDivElement;

class Init {
  protected static gameLoop() {}
  static startGame() {
    const board = new Board(21, 21);
    const snake = new Snake(["11-11", "12-11", "13-11"], {
      v: -1,
      h: 0,
    });
    const apple = new Apple(21, 21);

    board.createBoard(snakeContainer);
    snake.drawSnake();
    apple.drawApple(apple.getRandomApple());

    snake.updateSnake(apple.updateApple());

    Init.gameLoop();
  }
}

startBtn?.addEventListener("click", Init.startGame);
