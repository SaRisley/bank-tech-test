class Statement{
    constructor(transactionList) {
        this.transactionList = transactionList
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

    formatStatement = () => {
        const headers = ["date || credit || debit || balance\n"]
        let formattedStatement = []
        this.transactionList.map((item) => {
            if (item.credit === null){
                formattedStatement.push(`${this.formatDate(item.date)} || || ${item.debit} || ${item.balance}`)
            }else if (item.debit === null){
                formattedStatement.push(`${this.formatDate(item.date)} || ${item.credit} || || ${item.balance}`)
            }else{
                formattedStatement.push(`${this.formatDate(item.date)} || ${item.credit} || ${item.debit} || ${item.balance}`)
            }
        })
        return headers + (formattedStatement.reverse().join('\r\n'));
    }

};

module.exports = Statement;