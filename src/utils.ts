import { Coordinates } from "./types";

export function coordToId([x, y]: Coordinates) {
  return `${x}-${y}`;
}

export function idToCoord(id: string) {
  const [row, col] = id.split("-");
  return [+row, +col];
  // return id.split("-").map((item) => )
}

export function randomNumber(range: number) {
  return Math.floor(Math.random() * range);
}

export function randomCoordinate(xRange: number, yRange: number) {
  return [randomNumber(xRange), randomNumber(yRange)];
}
