import { postsSelector, postsFocusedItemSelector } from ".";

import { state } from "./__mocks__";

describe("posts selectors", () => {
  describe("postsSelector", () => {
    it("should get the list of posts", () => {
      expect(postsSelector(state)).toEqual(state.posts);
    });
  });
});
