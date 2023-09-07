const Statement = require('../Statement');

describe("Statement", () => {
    test('statement is inisitlly constructed with list of transactions', () => {
        mockDate = new Date();
        const testTransactionList = [
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
            }
        ]
        statement = new Statement(testTransactionList);
        expect(statement.transactionList).toEqual([
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
            }
        ]);
    });

    test('formatDate will return the date object into a user friendly date formatted DD/MM/YYYY', () => {
        statement = new Statement();
        exampleDateObj = new Date("2023-09-07")
        expect(statement.formatDate(exampleDateObj)).toEqual("07/09/2023");
    });

    test('formatStatement will show the transactions in the specified format', () => {
        const testTransactionList = [
            {
                date: new Date("2023-09-07"),
                credit: '1000.00',
                debit: null,
                balance: '1000.00'
            }
        ]
        statement = new Statement(testTransactionList);
        expect(statement.formatStatement()).toBe(
        "date || credit || debit || balance\n07/09/2023 || 1000.00 || || 1000.00");
    });
    
});