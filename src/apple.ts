import { Board } from "./board";
import { coordToId, randomCoordinate } from "./utils";

const appleStyle = "apple-square";

export class Apple extends Board {
  getRandomApple() {
    const [appleRow, appleColumn] = randomCoordinate(
      this.numRows,
      this.numCols
    );

    return coordToId([appleRow, appleColumn]);
  }

  drawApple(appleCoords: string) {
    const appleBlock = document.getElementById(appleCoords) as HTMLDivElement;

    if (
      !appleBlock?.classList.contains("snake-square") &&
      !appleBlock?.classList.contains(appleStyle)
    ) {
      appleBlock.classList.add(appleStyle);
    }
  }

  updateApple(snake: Array<string>, apple: string) {
    const appleBlock = document.getElementById(apple) as HTMLDivElement;

    // check if snakeHead is equal to apple
    if (snake[0] === apple) {
      // remove the apple and generate a new one
      appleBlock.classList.remove(appleStyle);
      const newApple = this.getRandomApple();
      return newApple;
    }
    // return the apple
    return apple;
  }
}
