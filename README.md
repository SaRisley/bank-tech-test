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
* I completed the above test using `javascript` which can be run via `node` and testing using `jest`.

## Assumptions:
* Negative balances/overdrafts are allowed.
* Transactions may not be inputted in chronological order and this is accounted for in my code.

## Other notes:
* For readability purposes I have allowed the statement to include 0s (i.e under the credit field if the transaction is a withdrawal), however this could be amended if needed.