const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Can set school via constructor", () => {
    const testValue = "Monash";
    const e = new Intern("jim", 100, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });
  describe("getRole", () => {
    it('getRole() should return "Intern"', () => {
      const testValue = "Intern";
      const e = new Intern("Jim", 100, "test@test.com", "UCLA");
      expect(e.getRole()).toBe(testValue);
    });
  });
  describe("getSchool", () => {
    it("Can get school via getSchool()", () => {
      const testValue = "Monash";
      const e = new Intern("Jim", 100, "test@test.com", testValue);
      expect(e.getSchool()).toBe(testValue);
    });
  });
});
