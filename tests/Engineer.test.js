const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Can set github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jim", 100, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  describe("getRole", () => {
    it('getRole() should return "Engineer"', () => {
      const testValue = "Engineer";
      const e = new Engineer("Jim", 100, "test@test.com");
      expect(e.getRole()).toBe(testValue);
    });
  });
  describe("getGithub", () => {
    it("Can get GitHub username via getGithub()", () => {
      const testValue = "GitHubUser";
      const e = new Engineer("Jim", 1, "test@test.com", testValue);
      expect(e.getGithub()).toBe(testValue);
    });
  });
});
