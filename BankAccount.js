class BankAccount {
    statement = []
    balance = 0

    makeTransaction = (depositOrWithdraw, date, amount) => {
        let dateObj= new Date(date)
        if (dateObj instanceof Date && !isNaN(dateObj)){
            switch(depositOrWithdraw) {
                case "deposit":
                    this.statement.push({date: dateObj, credit: amount, debit: 0});
                    break;
                case "withdraw":
                    this.statement.push({date: dateObj, credit: 0, debit: amount});
                    break;
                default:
                    return "Please specify `deposit` or `withdraw`";
            }
        }else{
            return "Please input the date using the format YYYY-MM-DD";
        }
    }

    formatDate = (date) => {
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

    calculateBalances = () => {
        this.statement.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
        });
        this.statement.map((item) => {
            this.balance += item.credit;
            this.balance -= item.debit;
            item.balance = this.balance;
        })
    }

    printStatement = () => {
        this.calculateBalances();
        const headers = ["date || credit || debit || balance\n"]
        let formattedStatement = []
        this.statement.map((item) => {
            formattedStatement.push(`${this.formatDate(item.date)} || ${item.credit} || ${item.debit} || ${item.balance}`)
        })
        return headers + (formattedStatement.reverse().join('\r\n'));
    }
};

const bankAccount = new BankAccount;
bankAccount.makeTransaction("deposit", "2023-01-10", 1000)
bankAccount.makeTransaction("deposit", "2023-01-13", 2000)
bankAccount.makeTransaction("withdraw", "2023-01-14", 500)
let statement = bankAccount.printStatement();
console.log(statement);


module.exports = BankAccount; 