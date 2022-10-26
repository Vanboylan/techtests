const User = require("./User");
const Account = require("./account");

describe("banking app", () => {
  it("allows a user and account to be created and add an account", () => {
    account = new Account();
    testUser = new User();
    testUser.addAccount(account);
    expect(testUser.accounts.length).toEqual(1);
  });
  it("allows money to be added to an account and a user to print a statement", () => {
    account = new Account();
    testUser = new User();
    account.addBalance(500);
    expect(account.balanceCheck()).toEqual("500.00");
    testUser.addAccount(account);
    expect(testUser.getStatement()).toEqual(
      "date || credit || debit || balance\n26/10/2022||500.00||      ||500.00\n"
    );
  });
  it("allows a user to have multiple accounts", () => {
    account = new Account();
    accountTwo = new Account();
    testUser = new User();
    account.addBalance(500);
    accountTwo.addBalance(1000);
    expect(account.balanceCheck()).toEqual("500.00");
    expect(accountTwo.balanceCheck()).toEqual("1000.00");
    testUser.addAccount(account);
    testUser.addAccount(accountTwo);
    expect(testUser.getStatement()).toEqual(
      "date || credit || debit || balance\n26/10/2022||500.00||      ||500.00\ndate || credit || debit || balance\n26/10/2022||1000.00||      ||1000.00\n"
    );
  });
});
