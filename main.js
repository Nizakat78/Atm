#!/usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let Pin = 1234;
let atm = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please Enter your pin",
    },
]);
if (atm.pin == Pin) {
    console.log("Please Select the Option");
    let accountInfo = await inquirer.prompt([
        {
            name: "account",
            type: "list",
            choices: ["Checking Balance", "Withdrawal"]
        }
    ]);
    if (accountInfo.account == "Checking Balance") {
        console.log(balance);
    }
    else if (accountInfo.account == "Withdrawal") {
        let withdraw = await inquirer.prompt({
            name: "FastCash",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "other"],
        });
        if (withdraw.FastCash == "500") {
            console.log(`Remaining Balance:${balance -= 500}`);
        }
        else if (withdraw.FastCash == "1000") {
            console.log(`Your Remaining Balance: ${balance -= 1000}`);
        }
        else if (withdraw.FastCash == "2000") {
            console.log(`Your Remaining Balance: ${balance -= 2000}`);
        }
        else if (withdraw.FastCash == "5000") {
            console.log(`Your Remaining Balance: ${balance -= 5000}`);
        }
        else if (withdraw.FastCash == "other") {
            let othercash = await inquirer.prompt({
                name: "otherAmount",
                type: "input",
                message: "Please Put the Amount"
            });
            const amount = parseInt(othercash.otherAmount);
            if (!isNaN(amount) && amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Your remaining Balance:${balance}`);
            }
            else {
                console.log(`Invalid Amount. Please enter a valid amount within your account balance.`);
            }
        }
    }
}
else {
    console.log("Invalid PIN");
}
