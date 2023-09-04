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
        return headers + (this.statement.join('\r\n'));
    }
};



module.exports = BankAccount; 