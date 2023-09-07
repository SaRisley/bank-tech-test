const Statement = require("./Statement");
const Transaction = require("./Transaction");

class BankAccount {
    balance = 0.00
    transactionList = []

    makeDeposit = (amount) => {
        if (amount * 100 % 1 === 0){
            this.transactionList.push(new Transaction(new Date(), amount.toFixed(2), null, (this.balance+=amount).toFixed(2)));
        }else {
            return "Amount must be two decimal places maximum.";
        }
    }

    makeWithdrawal = (amount) => {
        if (amount <= this.balance){
            if (amount * 100 % 1 === 0){
                this.transactionList.push(new Transaction(new Date(), null, amount.toFixed(2), (this.balance-=amount).toFixed(2)));
            }else {
                return "Amount must be two decimal places maximum.";
            }
        }else{
            return "Cannot withdraw more than current balance."
        }
    }

    getStatement = () => {
        let statement = new Statement(this.transactionList);
        return statement.formatStatement();
    }
};

module.exports = BankAccount; 