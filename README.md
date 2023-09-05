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
* I completed the above test using `javascript` and run via `node` with tests using `jest`.
* `Node` can be installed with `npm install -g node` 
* The code can then be ran by inputting `node BankAccount.js` into the terminal.
* Testing using `jest` which can be installed `npm install --save-dev jest`
* Simply input `jest` into the terminal to run the tests.

## Process:
* I diagrammed my intial thoughts and decided to have BankAccount as a class with functions makeDeposit, makeWithdrawal and printStatement. 
* I toyed with the idea of having transactions as its own class but I didn't reach a point when this felt necessary and so was not implemented.
* After lots of TDD and refactoring/reviewing I concluded it could be more concise to merge makeDeposit and makeWithdrawal to one function: makeTransaction.
* I have added further functionaility not in my initial design to account for edge cases; i.e using date objects and ensuring valid input is provided and also amending the format for user friendly statement.

## Assumptions:
* Negative balances/overdrafts are allowed.
* Transactions may not be inputted in chronological order and this is accounted for in my code.

## Other notes:
* For readability purposes I have allowed the statement to include 0s (i.e under the credit field if the transaction is a withdrawal), however this could be amended if needed.