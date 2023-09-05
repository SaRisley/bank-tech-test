class BankAccount {
    statement = []
    balance = 0

    makeTransaction = (depositOrWithdraw, date, amount) => {
        let formattedDate = this.getFormattedDate(new Date(date));
        switch(depositOrWithdraw) {
            case "deposit":
                this.balance += amount;
                this.statement.push({date: formattedDate, credit: amount, debit: 0, balance: this.balance});
                break;
            case "withdraw":
                this.balance -= amount;
                this.statement.push({date: formattedDate, credit: 0, debit: amount, balance: this.balance});
                break;
            default:
                console.log("please specify `deposit` or `withdraw`");
        }
    }

    getFormattedDate = (date) => {
            const padTo2Digits = (num) => {
                return num.toString().padStart(2, '0');
            }
            const dateWithNoTime = (date) => {
                return [
                    padTo2Digits(date.getDate()),
                    padTo2Digits(date.getMonth() + 1),
                    date.getFullYear()
                ].join('/');
            }
            return dateWithNoTime(date);
    }

    printStatement = () => {
        const headers = ["date || credit || debit || balance\n"]
        let formattedStatement = []
        this.statement.map((item) => {
            formattedStatement.push(`${item.date} || ${item.credit} || ${item.debit} || ${item.balance}`)
        })
        let userFriendlyStatement = formattedStatement.reverse();
        return headers + (userFriendlyStatement.join('\r\n'));
    }
};

const bankAccount = new BankAccount;
bankAccount.makeTransaction("deposit", "2023-01-10", 1000)
bankAccount.makeTransaction("deposit", "2023-01-13", 2000)
bankAccount.makeTransaction("withdraw", "2023-01-14", 500)
let statement = bankAccount.printStatement();
console.log(statement);


module.exports = BankAccount; 