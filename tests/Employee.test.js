const Employee = require("./lib/Employee.js");

describe("Employee", () => {
  it("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
  });

  it("Can set name via constructor arguments", () => {
    const name = "Jim";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  it("Can set id via constructor arguments", () => {
    const testValue = 100;
    const e = new Employee("pam", testValue);
    expect(e.id).toBe(testValue);
  });
  it("Can set email via constructor arguments", () => {
    const testEmail = "test@test.com";
    const e = new Employee("mike", 245, testEmail);
    expect(e.email).toBe(testEmail);
  });
  describe("getName", () => {
    it("can get name via a getName()", () => {
      const testName = "Jim";
      const e = new Employee(testName);
      expect(e.getName()).toBe(testName);
    });
  });
  describe("getId", () => {
    it("can get id via a getId()", () => {
      const testValue = 100;
      const e = new Employee("Jim", testValue);
      expect(e.getId()).toBe(testValue);
    });
  });
  describe("getEmail", () => {
    it("Can get a email via a getEmail()", () => {
      const testEmail = "test@test.com";
      const e = new Employee("Jim", 100, testEmail);
      expect(e.getEmail()).toBe(testEmail);
    });
  });
  describe("getRole", () => {
    it('getRole() should return "Employee"', () => {
      const testEmployee = "Employee";
      const e = new Employee("Jim", 100, "test@test.com");
      expect(e.getRole()).toBe(testEmployee);
    });
  });

})
