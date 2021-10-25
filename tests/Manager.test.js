const Manager = require("../lib/Manager");
describe("Manager", () => {
  it("Can set office number via constructor argument", () => {
    const testValue = 130;
    const e = new Manager("Jim", 100, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  describe("getRole", () => {
    it('getRole() should return "Manager"', () => {
      const testValue = "Manager";
      const e = new Manager("Jim", 100, "test@test.com", 130);
      expect(e.getRole()).toBe(testValue);
    });
  });
  describe("getOffice", () => {
    it("Can get office number via getOffice()", () => {
      const testValue = 130;
      const e = new Manager("Jim", 100, "test@test.com", testValue);
      expect(e.getOffice()).toBe(testValue);
    });
  });
});
