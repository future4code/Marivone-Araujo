import { validateCharacter } from "../src/validateCharacter";

describe("Testing validateCharacter", () => {
  it("Should return false for empty name", () => {
    expect.assertions(1);

    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  
  it("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  it("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  it("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 500,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  it("Should return false for negative defense value", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 500,
      defense: -12,
    });

    expect(result).toBe(false);
  });

  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
  
});

