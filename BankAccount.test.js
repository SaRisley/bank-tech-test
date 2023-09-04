const BankAccount = require ('./BankAccount');

describe("BankAccount", () => {
    test('balance should initially be set to 0', () => {
        bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0);
    });

    test('making a deposit of 100 updates the account balance accordingly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit("04/09/2023", 100);
        expect(bankAccount.balance).toBe(100);
    });

    test('making a withdrawl of 100 updates the account balance and credit accordingly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit("04/09/2023", 300);
        bankAccount.makeWithdrawl("04/09/2023", 100);
        expect(bankAccount.balance).toBe(200);
    });

    test('printStatement initially shows empty array if no transactions have been made', () => {
        bankAccount = new BankAccount();
        statement = bankAccount.printStatement();
        expect(statement).toEqual([]);
    });

    test('printStatement will show the transaction once a deposit has been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit("04/09/2023", 300);
        statement = bankAccount.printStatement();
        expect(statement).toEqual([["04/09/2023", 300, 0, 300]]);
    });

    test('printStatement will show the transaction once a withdrawl has been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeWithdrawl("05/09/2023", 100);
        statement = bankAccount.printStatement();
        expect(statement).toEqual([["05/09/2023", 0, 100, -100]]);
    });

    test('printStatement will show multiple deposit have been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit("02/09/2023", 300);
        bankAccount.makeDeposit("03/09/2023", 1000);
        bankAccount.makeDeposit("04/09/2023", 500);
        statement = bankAccount.printStatement();
        expect(statement).toEqual([
            ["02/09/2023", 300, 0, 300],
            ["03/09/2023", 1000, 0, 1300],
            ["04/09/2023", 500, 0, 1800]
        ]);
    });

    test('printStatement will show multiple withdrawls have been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeWithdrawl("02/09/2023", 100);
        bankAccount.makeWithdrawl("03/09/2023", 1000);
        bankAccount.makeWithdrawl("04/09/2023", 200);
        statement = bankAccount.printStatement();
        expect(statement).toEqual([
            ["02/09/2023", 0, 100, -100],
            ["03/09/2023", 0, 1000, -1100],
            ["04/09/2023", 0, 200, -1300]
        ]);
    });

    test('printStatement will list both transactions and update the balance if both a deposit and withdrawl are made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit("04/09/2023", 300);
        bankAccount.makeWithdrawl("05/09/2023", 100);
        statement = bankAccount.printStatement();
        expect(statement).toEqual([
            ["04/09/2023", 300, 0, 300],
            ["05/09/2023", 0, 100, 200]]);
    });

    test('printStatement will list multiple deposits and withdrawls and update the balance correctly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeDeposit("01/09/2023", 300);
        bankAccount.makeWithdrawl("02/09/2023", 100);
        bankAccount.makeDeposit("03/09/2023", 1000);
        bankAccount.makeWithdrawl("03/09/2023", 1000);
        bankAccount.makeWithdrawl("04/09/2023", 200);
        statement = bankAccount.printStatement();
        expect(statement).toEqual([
            ["01/09/2023", 300, 0, 300],
            ["02/09/2023", 0, 100, 200],
            ["03/09/2023", 1000, 0, 1200],
            ["03/09/2023", 0, 1000, 200],
            ["04/09/2023", 0, 200, 0]
        ]);
    });
});