import {isEven} from "../src"
import {red, blue, green, yellow} from "chalk"

function test(
    name: string,
    recievedValue: any,
    expectedValue: any,
):void{
    console.log(
        "\n",
        blue(name),
        expectedValue === recievedValue ? green("PASS") : red("FAIL")
    )
}

console.log("Running tests...")

test(
    "Test 1 - Return true for number 10",
    isEven(10),
    true
)

test(
    "Test 2 - Return false for number 11",
    isEven(11),
    false
)

test(
    "Test 3 - Return false for number 10.5",
    isEven(10.5),
    false
)


console.log("\n", yellow("...done!"))