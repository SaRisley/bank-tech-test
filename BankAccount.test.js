const BankAccount = require ('./BankAccount');

describe("BankAccount", () => {
    test('balance should initially be set to 0', () => {
        bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0);
    });

    test('making a deposit of 100 updates the account balance accordingly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("deposit", "2023-09-04", 100);
        expect(bankAccount.balance).toBe(100);
    });

    test('making a withdrawl of 100 updates the account balance and credit accordingly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("deposit", "2023-09-04", 300);
        bankAccount.makeTransaction("withdraw", "2023-09-04", 100);
        expect(bankAccount.balance).toBe(200);
    });

    test('the statement array will be updated with the transactions made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("deposit", "2023-09-02", 300);
        bankAccount.makeTransaction("deposit", "2023-09-03", 1000);
        bankAccount.makeTransaction("deposit", "2023-09-04", 500)
        expect(bankAccount.statement).toEqual(["02/09/2023 || 300 || 0 || 300","03/09/2023 || 1000 || 0 || 1300","04/09/2023 || 500 || 0 || 1800"])
    });

    test('printStatement initially shows empty array if no transactions have been made', () => {
        bankAccount = new BankAccount();
        statement = bankAccount.printStatement();
        expect(statement).toEqual("date || credit || debit || balance\n");
    });

    test('printStatement will show the transaction once a deposit has been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("deposit", "2023-09-04", 300);
        statement = bankAccount.printStatement();
        expect(statement).toEqual(
        "date || credit || debit || balance\n04/09/2023 || 300 || 0 || 300");
    });

    test('printStatement will show the transaction once a withdrawl has been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("withdraw", "2023-09-05", 100);
        statement = bankAccount.printStatement();
        expect(statement).toEqual("date || credit || debit || balance\n05/09/2023 || 0 || 100 || -100");
    });

    test('printStatement will show multiple deposit have been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("deposit", "2023-09-02", 300);
        bankAccount.makeTransaction("deposit", "2023-09-03", 1000);
        bankAccount.makeTransaction("deposit", "2023-09-04", 500);
        bankAccount.printStatement();
        expect.stringContaining("date || credit || debit || balance\n04/09/2023 || 500 || 0 || 1800\n03/09/2023 || 1000 || 0 || 1300\n02/09/2023 || 300 || 0 || 300");
    });

    test('printStatement will show multiple withdrawls have been made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("withdraw", "2023-09-02", 100);
        bankAccount.makeTransaction("withdraw", "2023-09-03", 1000);
        bankAccount.makeTransaction("withdraw", "2023-09-04", 200);
        bankAccount.printStatement();
        expect.stringContaining("date || credit || debit || balance\n04/09/2023 || 0 || 200 || -1300\n03/09/2023 || 0 || 1000 || -1100\n02/09/2023 || 0 || 100 || -100");
    });

    test('printStatement will list both transactions and update the balance if both a deposit and withdrawl are made', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("deposit", "2023-09-04", 300);
        bankAccount.makeTransaction("withdraw", "2023-09-05", 100);
        bankAccount.printStatement();
        expect.stringContaining("date || credit || debit || balance\n05/09/2023 || 0 || 100 || 200\n04/09/2023 || 300 || 0 || 300");
    });

    test('printStatement will list multiple deposits and withdrawls and update the balance correctly', () => {
        bankAccount = new BankAccount();
        bankAccount.makeTransaction("deposit", "2023-09-01", 300);
        bankAccount.makeTransaction("withdraw", "2023-09-02", 100);
        bankAccount.makeTransaction("deposit", "2023-09-03", 1000);
        bankAccount.makeTransaction("withdraw", "2023-09-03", 1000);
        bankAccount.makeTransaction("withdraw", "2023-09-04", 200);
        bankAccount.printStatement();
        expect.stringContaining("date || credit || debit || balance\n04/09/2023 || 0 || 200 || 0\n03/09/2023 || 0 || 1000 || 200\n03/09/2023 || 1000 || 0 || 1200\n02/09/2023 || 0 || 100 || 200\n01/09/2023 || 300 || 0 || 300");
    });
});