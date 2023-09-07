const BankAccount = require ('../BankAccount');
const Transaction = require ('../Transaction');

test('makeDeposit makes a new instance of transaction', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit(100.00);
        expect(bankAccount.transactionList[0]).toBeInstanceOf(Transaction);
});

test('makeWithdrawal makes a new instance of transaction', () => {
    bankAccount = new BankAccount();
    bankAccount.makeDeposit(100.00);
    bankAccount.makeWithdrawal(100.00);
    expect(bankAccount.transactionList[1]).toBeInstanceOf(Transaction);
});

test('getStatement returns a formatted string', () => {
    bankAccount = new BankAccount();
    bankAccount.makeDeposit(300.00);
    bankAccount.makeWithdrawal(100.00);
    expect(typeof bankAccount.getStatement()).toBe("string");
});

test('making deposits will be reflected on the formatted statement', () => {
    mockDate = "07/09/2023"
    bankAccount = new BankAccount();
    bankAccount.makeDeposit(100.00);
    statement = bankAccount.getStatement()
    expect(statement).toBe(
        `date || credit || debit || balance\n${mockDate} || 100.00 || || 100.00`);
});

test('making deposits and withdrawals will be reflected on the formatted statement', () => {
    mockDate = "07/09/2023"
    bankAccount = new BankAccount();
    bankAccount.makeDeposit(1000.00);
    bankAccount.makeWithdrawal(100.00);
    statement = bankAccount.getStatement()
    expect.stringContaining(
        `date || credit || debit || balance
        ${mockDate} || || 100.00 || 900.00
        ${mockDate} || 1000.00 || || 1000.00`);
});
