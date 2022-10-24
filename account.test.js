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
    })
});