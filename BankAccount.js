class BankAccount {
    statement = []
    balance = 0

    makeTransaction = (depositOrWithdraw, date, amount) => {
        let formattedDate = this.getFormattedDate(new Date(date));
        if (depositOrWithdraw === "deposit"){
            this.balance += amount;
            this.statement.push(`${formattedDate} || ${amount} || 0 || ${this.balance}`);
        }else if (depositOrWithdraw === "withdraw"){
            this.balance -= amount;
            this.statement.push(`${formattedDate} || 0 || ${amount} || ${this.balance}`);
        }else{
            console.log("please specify `deposit` or `withdraw`")
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
        let reversedStatement = this.statement.reverse();
        return headers + (reversedStatement.join('\r\n'));
    }
};

const bankAccount = new BankAccount;
bankAccount.makeTransaction("deposit", "2023-01-10", 1000)
bankAccount.makeTransaction("deposit", "2023-01-13", 2000)
bankAccount.makeTransaction("withdraw", "2023-01-14", 500)
let statement = bankAccount.printStatement();
console.log(statement);


module.exports = BankAccount; 