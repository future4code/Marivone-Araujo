// import connection,  {isEven} from "../src"
// import {performPurchase} from "../src/index"
// import {User} from "../src/entities/User"
import {
  User,
  Casino,
  Result,
  ResultItem,
  LOCATION,
  NACIONALITY,
} from "../src/entities/Client";
import { verifyAge } from "../src/index";

// describe("performPurchase", ()=>{

//     test ("Balance greater than value", ()=>{

//         const user: User = {
//             name: "Astrodev",
//             balance: 100
//         }

//         const result = performPurchase(user, 40)

//         expect(result).toEqual({
//             name: "Astrodev",
//             balance: 60
//         })
//     })

//     test ("Balance equal to value", ()=>{

//         const user: User = {
//             name: "Astrodev",
//             balance: 50
//         }

//         const result = performPurchase(user, 50)

//         expect(result).toEqual({
//             name: "Astrodev",
//             balance: 0
//         })
//     })
//     test ("Balance minor than value", ()=>{

//         const user: User = {
//             name: "Astrodev",
//             balance: 30
//         }

//         const result = performPurchase(user, 50)

//         // expect(result).toEqual({
//         //     name: "Astrodev",
//         //     balance: -20
//         // })

//         expect(result).not.toBeDefined()

//     })
// })

describe("verifyAge", () => {
  test("brazilian allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Astrodev"]);
  });

  test("2 american allowed", () => {
    const brazilian: User = {
      name: "Astrodev",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.americans.allowed).toEqual(["Astrodev"]);
  });

  test("No one allowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toEqual([
      "Astrodev EUA",
      "Astrodev EUA",
    ]);
  });
  test("2 american allowed and 2 brazilians unallowed", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
  });
});

// describe("isEven", ()=>{
//     test ("Return true for number 10", ()=>{

//         const result = isEven(10)
//         expect(result).toBe(true)
//     })
//     test ("Return false for number 11", ()=>{})
//     test ("Return false for number 10.9", ()=>{})
//     test ("Return false for number -1", ()=>{})
//     test ("Return false for number -2", ()=>{})
// })

// describe("Random tests...", ()=>{

//     test("...to learn some keywords",()=>{
//         expect(2+3).toBe(5)
//         // expect([]).toBe([])
//         expect([]).not.toBe([])
//         expect([]).toEqual([])

//         const emptyList: Array<any> = []
//         // const anotherEmptyList: Array<any> = []
//         const anotherEmptyList: Array<any> = emptyList
//         // expect (emptyList).toBe(emptyList)
//         expect (emptyList).toBe(anotherEmptyList)
//         expect (emptyList.length).toBe(0)

//         expect([]).toEqual([])

//         expect(2+3).toBeGreaterThan(4)
//         expect(2+3).toBeLessThan(444000)
//         expect([1,2,3]).toContain(2)
//         expect([[1],[2],[3]]).not.toContain([2])

//     })
// })

// describe("async & error handling", ()=>{

//     test("Sould connect to MySql", async()=>{
//         const [tables] = await connection
//         .raw("SHOW TABLES")

//         console.table(tables)

//         expect(tables.length).toBeGreaterThan(0)
//     })

//     test ("Error when table does not exist", async()=>{

//         expect.assertions(1)

//         try {
//             const users = await connection("usuarioss")
//             expect(users).toBeDefined()

//         } catch (error) {
//             expect(error.code).toBe("ER_NO_SUCH_TABLE")
//         }
//     })

//     afterAll(()=>{connection.destroy()})

// })
