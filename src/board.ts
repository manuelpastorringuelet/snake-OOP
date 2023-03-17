import { Direction } from "./types";
import { coordToId } from "./utils";

export class Board {
  numRows: number = 21;
  numCols: number = 21;

  constructor(__numRows: number, __numCols: number) {
    this.numRows = __numRows;
    this.numCols = __numCols;
  }

  createBoard(container: HTMLDivElement) {
    container?.classList.add("grid");
    container.style.gridTemplateRows = `repeat(${this.numRows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${this.numCols}, 1fr)`;

    for (let i = 0; i < this.numRows * this.numCols; i++) {
      const containerCell = document.createElement("div");
      containerCell.classList.add("grid-square");
      containerCell.id = coordToId([
        Math.floor(i / this.numCols),
        i % this.numCols,
      ]);
      container?.appendChild(containerCell);
    }
  }

  boardControls(e: KeyboardEvent, snakeDirection: Direction) {
    switch (e.key) {
      case "ArrowLeft":
        if (snakeDirection.v === 0 && snakeDirection.h === 1) {
          break;
        } else {
          snakeDirection.v = 0;
          snakeDirection.h = -1;
          break;
        }

      case "ArrowUp":
        if (snakeDirection.v === 1 && snakeDirection.h === 0) {
          break;
        } else {
          snakeDirection.v = -1;
          snakeDirection.h = 0;
          break;
        }

      case "ArrowRight":
        if (snakeDirection.v === 0 && snakeDirection.h === -1) {
          break;
        } else {
          snakeDirection.v = 0;
          snakeDirection.h = 1;
          break;
        }

      case "ArrowDown":
        if (snakeDirection.v === -1 && snakeDirection.h === 0) {
          break;
        } else {
          snakeDirection.v = 1;
          snakeDirection.h = 0;
          break;
        }
    }
  }
}
