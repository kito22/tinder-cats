import { TSwipeDirection } from "./types";

export const isLikeAction = (action: TSwipeDirection) => action === "right";

export const getNextIndex = (
  currentIndex: number,
  cardsLength: number
): number | null => {
  return currentIndex + 1 < cardsLength ? currentIndex + 1 : null;
};
