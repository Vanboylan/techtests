const Account = require('./Account');

describe('Account', () => {
    it('initially does not display a balance', () => {
        const account = new Account;
        expect(account.getBalance()).toEqual("date || credit || debit || balance")
    });
});