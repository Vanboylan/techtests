const Account = require('./Account');

describe('Account', () => {
    it('initially does not display a balance', () => {
        const account = new Account;
        expect(account.getBalance()).toEqual("date || credit || debit || balance/n")
    });
    it('allows a balance to be added', () => {
        const account = new Account;
        account.addBalance(500)
        expect(account.getBalance()).toEqual("date || credit || debit || balance/n       ||500||       ||500/n")
    });
    it('allows a balance to be added', () => {
        const account = new Account;
        account.addBalance(10)
        expect(account.getBalance()).toEqual("date || credit || debit || balance/n       ||10||       ||10/n")
    });
    it('rejects a balance that is not an integer', () => {
        const account = new Account;
        account.addBalance('potato')
        expect(account.getBalance()).toEqual("date || credit || debit || balance/n")
    });
    it('rejects a balance that is technically an integer but not fully numeric', () => {
        const account = new Account;
        account.addBalance(1-4)
        expect(account.getBalance()).toEqual("date || credit || debit || balance/n")
    });
    it('rejects a negative credit amount', () => {
        const account = new Account;
        account.addBalance(-100)
        expect(account.getBalance()).toEqual("date || credit || debit || balance/n")
    });
    // it('adds a current date to the balance statement', () => {
    //     const account = new Account;
    //     account.addBalance(10)
    //     expect(account.getBalance()).toEqual("date || credit || debit || balance/n       ||10||       ||10/n")
    // });
});