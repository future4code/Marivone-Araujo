### Exercícios1

```tsx
export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }

  return true;
};
```

### Exercícios2

```tsx
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
```

### Exercícios3

#### a.

```tsx
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```

#### b.

```tsx
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```

#### c. Na letra a, a função performAttack depende da função validateCharacter. Na letra b, a performAttack vai permitir que quem chame a função diga o que é o validator, sem que seja preciso rodar validateCharacter, porque ela está sendo rodada como parâmetro (validator).

### Exercícios4

#### a. Devemos criar o Mock da segunda função (performAttack) porque as funções mock permitem observar o comportamento de uma função que é chamada por outra.

#### b.

```tsx
test("Creating Mocks with sucess output", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });
});
```

#### C.

```tsx
test("Creating Mocks with error/fail output", () => {
  const validatorMock = jest.fn(() => {
    return false;
  });
});
```

### Exercícios5

### a.

```tsx
describe("Testing performAttack", () => {
  it("Should perform attack", () => {
    expect.assertions(4);

    try {
      const validatorMock = jest.fn(() => {
        return true;
      });

      const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: 600,
      };

      const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
      };

      performAttack(attacker, defender, validatorMock as any);

      expect(defender.life).toEqual(1300);
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(2);
      expect(validatorMock).toHaveReturnedTimes(2);
    } catch (error) {
      expect(error.message).toEqual(1300);
      expect(error.message).toHaveBeenCalled();
      expect(error.message).toHaveBeenCalledTimes(2);
      expect(error.message).toHaveReturnedTimes(2);
    }
  });
});
```

### b.

```tsx
it("Should perform attack", () => {
  expect.assertions(4);

  const validatorMock = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttack(attacker, defender, validatorMock as any);
  } catch (error) {
    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  }
});
```

### c.

```tsx
it("Should return invalid character error", () => {
  expect.assertions(4);

  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttack(attacker, defender, validatorMock as any);
  } catch (err) {
    expect(err.message).toBe("Invalid character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});
```
