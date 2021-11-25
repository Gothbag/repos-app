import { reposSelector, reposFocusedItemSelector } from ".";

import { state } from "./__mocks__";

describe("repos selectors", () => {
  describe("reposSelector", () => {
    it("should get the list of repos", () => {
      expect(reposSelector(state)).toEqual(state.repos);
    });
  });
});
