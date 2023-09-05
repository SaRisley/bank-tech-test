class BankAccount {
    statement = []
    balance = 0

    makeDeposit = (date, amount) => {
        this.balance += amount;
        this.statement.push(`${date} || ${amount} || 0 || ${this.balance}`);
    }

    makeWithdrawal = (date, amount) => {
        this.balance -= amount;
        this.statement.push(`${date} || 0 || ${amount} || ${this.balance}`);
    }

    printStatement = () => {
        const headers = ["date || credit || debit || balance\n"]
        let reversedStatement = this.statement.reverse();
        return headers + (reversedStatement.join('\r\n'));
    }
};

const bankAccount = new BankAccount;
bankAccount.makeDeposit("10/01/2023", 1000);
bankAccount.makeDeposit("13/01/2023", 2000);
bankAccount.makeWithdrawal("14/01/2023", 500);
let statement = bankAccount.printStatement();
console.log(statement);


module.exports = BankAccount; 