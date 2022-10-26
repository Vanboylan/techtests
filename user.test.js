const User = require('./User');
const Account = require('./Account');

jest.mock("./account");

beforeEach(() => {
    mockAccount = new Account();
    testUser = new User;
})

describe('user', () => {
    it('creates a user with an empty balance', () => {
        expect(testUser.getStatement()).toEqual("date || credit || debit || balance\n");
    });
    it('creates a user and allows an account to be added', () => {
        testUser.addAccount(mockAccount);
        expect(testUser.accounts.length).toEqual(1)
    })
})