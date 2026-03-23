const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let history = []; // empty array to store history of calculations

function calculate(num1, operator, num2) {
    let result = 0;
//defining arthmetic operators provided by the user
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        result = num1 / num2;
    } else {
        return "Wrong operator";
    }
// recording history of calculatins
    history.push(num1 + " " + operator + " " + num2 + " = " + result);

    return result;
}

function menu() {
    console.log("\nCalculator");
    console.log("1. Calculate");
    console.log("2. History");
    console.log("3. Close");

    rl.question("Choose: ", function(choice) {

        if (choice == "1") {
            rl.question("num1: ", function(a) {
                rl.question("Operator (+ - * /): ", function(op) {
                    rl.question("num2: ", function(b) {

                        let answer = calculate(Number(a), op, Number(b));
                        console.log("Answer:", answer);

                        menu();
                    });
                });
            });

        } else if (choice == "2") {

            console.log("History:");
            for (let i = 0; i < history.length; i++) {
                console.log(history[i]);
            }

            menu();

        } else {
            console.log("Close");
            rl.close();
        }
    });
}

menu();