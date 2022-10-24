const Account = require("./Account");

describe("Account", () => {
    /* Add balance tests */
  it("initially does not display a balance", () => {
    const account = new Account();
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n"
    );
  });
  it("allows a balance to be added", () => {
    const account = new Account();
    account.addBalance(500);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n24/10/2022||500||        ||500/n"
    );
  });
  it("allows a balance to be added", () => {
    const account = new Account();
    account.addBalance(10);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n24/10/2022||10||        ||10/n"
    );
  });
  it("rejects a balance that is not an integer", () => {
    const account = new Account();
    account.addBalance("potato");
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n"
    );
  });
  it("rejects a balance that is technically an integer but not fully numeric", () => {
    const account = new Account();
    account.addBalance(1 - 4);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n"
    );
  });
  it("rejects a negative credit amount", () => {
    const account = new Account();
    account.addBalance(-100);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n"
    );
  });
  it("does not allow 0 to be added as credit", () => {
    const account = new Account();
    account.addBalance(0);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n"
    );
  });
  it("allows two balances to be added", () => {
    const account = new Account;
    account.addBalance(50);
    expect(account.getBalance()).toEqual(
        "date || credit || debit || balance/n24/10/2022||50||        ||50/n"
    );
    account.addBalance(30);
    expect(account.getBalance()).toEqual(
        "date || credit || debit || balance/n24/10/2022||50||        ||50/n24/10/2022||30||        ||80/n"
    );
  });
  it("allows five balances to be added", () => {
    const account = new Account;
    account.addBalance(50);
    account.addBalance(100);
    account.addBalance(70);
    account.addBalance(40);
    account.addBalance(30);
    expect(account.getBalance()).toEqual(
        "date || credit || debit || balance/n24/10/2022||50||        ||50/n24/10/2022||100||        ||150/n24/10/2022||70||        ||220/n24/10/2022||40||        ||260/n24/10/2022||30||        ||290/n"
    );
  });
  // it('adds a current date to the balance statement', () => {
  //     const account = new Account;
  //     account.addBalance(10)
  //     expect(account.getBalance()).toEqual("date || credit || debit || balance/n       ||10||       ||10/n")
  // });
});
