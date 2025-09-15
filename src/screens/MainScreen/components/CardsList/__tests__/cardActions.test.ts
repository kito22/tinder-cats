import { getNextIndex, isLikeAction } from "../utils";

describe("cardActions utils", () => {
  describe("getNextIndex", () => {
    it("returns the next index when available", () => {
      expect(getNextIndex(0, 3)).toBe(1);
      expect(getNextIndex(1, 3)).toBe(2);
    });

    it("returns null when there are no more cards", () => {
      expect(getNextIndex(2, 3)).toBeNull();
      expect(getNextIndex(5, 3)).toBeNull();
    });
  });

  describe("shouldLike", () => {
    it("returns true for right direction", () => {
      expect(isLikeAction("right")).toBe(true);
    });

    it("returns false for left direction", () => {
      expect(isLikeAction("left")).toBe(false);
    });
  });
});
