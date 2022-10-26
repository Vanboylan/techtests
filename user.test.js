const User = require('./User');

import Account from ('./Account');
jest.mock('./Account');
beforeEach(() => {
    Account.mockClear();})

describe('user', () => {
    it('creates a user with an empty balance', () => {
        const testUser = new User;
        expect(testUser.getStatement()).toEqual("date || credit || debit || balance\n");
    });
    it('creates a user and allows an account to be added', () => {
        const testUser = new User;
        const mockAccountInstance = Account.mock.instances[0];
        testUser.addAccount(mockAccountInstance)
        console.log(MockAccountInstance)
        expect(testUser.accounts.length).toEqual(1)
    })
    it('allows an account to be added and displays the correct balance', () => {
        const testUser = new User;
        const MockAccount = require('./Account')
        testUser.addAccount(MockAccount)
        expect(testUser.accounts.length).toEqual(1)
        console.log(testUser.getStatement())
        expect(testUser.getStatement()).toEqual()
    })
    // it("initially does not display a balance", () => {
    //     const account = new Account();
    //     expect(account.getBalance()).toEqual(
    //       "date || credit || debit || balance\n"
    //     );
    //   });
})