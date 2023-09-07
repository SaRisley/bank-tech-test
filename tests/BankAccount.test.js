const BankAccount = require ('../BankAccount');

describe("BankAccount", () => {
    test('balance should initially be set to 0', () => {
        bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0.00);
    });

    test('making a deposit of 100 updates the account balance accordingly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit(100.00);
        expect(bankAccount.balance).toBe(100.00);
    });

    test('cannot make a withdrawal if the amount is greater than balance', () => {
        bankAccount = new BankAccount();
        expect(bankAccount.makeWithdrawal(100.00)).toBe("Cannot withdraw more than current balance.");
    });

    test('making a withdrawl of 100 updates the account balance accordingly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit(300.00);
        bankAccount.makeWithdrawal(100.00);
        expect(bankAccount.balance).toBe(200.00);
    });

    test('monetary amounts will always be represented with two decimal places', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit(300);
        expect(bankAccount.balance).toStrictEqual(300.00);
    });

    test('monetary amounts are always represented with two decimal places and will return an error message if input incorrectly by the user', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit(300.1234);
        expect("Amount must be two decimal places maximum.");
    });

    test('the transactionsList array will be updated with the transactions made', () => {
        bankAccount = new BankAccount();
        mockDate = new Date()
        bankAccount.makeDeposit(300.00);
        bankAccount.makeDeposit(1000.00);
        expect(bankAccount.transactionList).toEqual([
            {
                date: mockDate,
                credit: '300.00',
                debit: null,
                balance: '300.00'
            },
            {
                date: mockDate,
                credit: '1000.00',
                debit: null,
                balance: '1300.00'
            },
        ])
    })

});