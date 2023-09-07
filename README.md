# Bank tech test

## Specification:

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Tech used: 
* I completed the above test using `javascript` and run via `node`.
> `Node` can be installed with `npm install -g node` 
> The code can then be run by inputting `node <filename>.js` into the terminal after calling the desired functions.
* Testing using `jest`
> `jest` can be installed `npm install --save-dev jest`
> Simply input `jest` into the terminal to run the tests.

## Process:
* Initially I tried to condense all my functionaility into one BankAccount class, however this has since been refactored into 3 different classes with their seperate functionaility: 
* The BankAccount class has the main functionility of making deposits, withdrawals and getting a statement. 
* The makeDeposit and makeWithdrawal functions both make instances of the Transaction class ehich are stored inside a transactionList array.
* The Statement class is responsible for formatting and returning the statement as expected in the acceptence criteria. 
* I have added further functionaility not in my initial design to account for edge cases; i.e using date objects and ensuring users cannot withdraw an amount greater than their balance. 

Evidence below of acceptnace criteria being metand all tests passing:
![Alt text](<Screenshot 2023-09-07 at 15.21.10.png>)
![Alt text](<Screenshot 2023-09-07 at 15.20.39.png>)
![Alt text](<Screenshot 2023-09-07 at 15.21.42.png>)

## On reflection:
* I have genuinely really enjoyed spending time on this test. Although I was able to write code to successfully meet the test spec early on, I was keen to experiment and demonstrate that I could account for edge cases. This however was leading to lots of code and so refactoring and ensuring readability became a challenge. I am sure there is lots I can improve on here but I am happy with what I have learned whilst working on this.