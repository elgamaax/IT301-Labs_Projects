let bill;
let message = "Enter the bill amount:";

do {
    bill = Number(prompt(message));

    if (bill == 0){
        message = "Please enter a valid bill amount:";
    }
    else if(bill < 0) {
        message = "Please enter a positive bill amount:";
    }
    else if(isNaN(bill)) {
        message = "Please enter a valid number:";
    }
} while (bill <= 0 || isNaN(bill));

let tip = bill * 0.10;

console.log(`For a bill of $${bill}, the tip should be $${tip}.`);
document.write(`For a bill of $${bill}, the tip should be $${tip}.`);
