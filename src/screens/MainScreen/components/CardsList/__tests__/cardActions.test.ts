import { isLikeAction } from "../utils";

describe("cardActions utils", () => {
  describe("isLikeAction", () => {
    it("returns true for right direction", () => {
      expect(isLikeAction("right")).toBe(true);
    });

    it("returns false for left direction", () => {
      expect(isLikeAction("left")).toBe(false);
    });
  });
});
