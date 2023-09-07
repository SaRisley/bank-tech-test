const Transaction = require ('../Transaction');

describe("Transaction", () => {
    test('transaction constructors should include date, credit, debit and balance', () => {
        testDate = new Date()
        testTransaction = new Transaction(testDate, 1000, null, 1000);
        expect(testTransaction.date).toEqual(testDate);
        expect(testTransaction.credit).toEqual(1000);
        expect(testTransaction.debit).toEqual(null);
        expect(testTransaction.balance).toEqual(1000);
    });
})