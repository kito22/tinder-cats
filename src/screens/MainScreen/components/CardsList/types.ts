export type TSwipeDirection = "left" | "right";

export interface ICardWrapperRef {
  swipe: (direction: TSwipeDirection) => void;
}
