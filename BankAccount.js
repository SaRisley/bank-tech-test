class BankAccount {
    statement = []
    balance = 0


    makeDeposit = (date, amount) => {
        this.balance += amount;
        this.statement.push([date,amount,0,this.balance]);
    }

    makeWithdrawl = (date, amount) => {
        this.balance -= amount;
        this.statement.push([date,0,amount,this.balance]);
    }

    printStatement = () => {
        return this.statement;
    }
}



module.exports = BankAccount; 