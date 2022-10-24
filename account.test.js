const Account = require("./Account");

describe("Account", () => {
    /* Add balance tests */
  it("initially does not display a balance", () => {
    const account = new Account();
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n"
    );
  });
  it("allows a balance to be added, displaying today's date", () => {
    const account = new Account();
    account.addBalance(500);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n24/10/2022||500.00||        ||500.00/n"
    );
  });
  it("allows a balance to be added, displaying today's date", () => {
    const account = new Account();
    account.addBalance(10);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n24/10/2022||10.00||        ||10.00/n"
    );
  });
  it("allows a balance to be added with pence, displaying today's date", () => {
    const account = new Account();
    account.addBalance(10.32);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n24/10/2022||10.32||        ||10.32/n"
    );
  });
  it("allows a balance to be added with pence, displaying today's date", () => {
    const account = new Account();
    account.addBalance(10.30);
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n24/10/2022||10.30||        ||10.30/n"
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
  it("rejects a string input number", () => {
    const account = new Account();
    account.addBalance("10.01");
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
        "date || credit || debit || balance/n24/10/2022||50.00||        ||50.00/n"
    );
    account.addBalance(30);
    expect(account.getBalance()).toEqual(
        "date || credit || debit || balance/n24/10/2022||50.00||        ||50.00/n24/10/2022||30.00||        ||80.00/n"
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
        "date || credit || debit || balance/n24/10/2022||50.00||        ||50.00/n24/10/2022||100.00||        ||150.00/n24/10/2022||70.00||        ||220.00/n24/10/2022||40.00||        ||260.00/n24/10/2022||30.00||        ||290.00/n"
    );
  });
  it("allows a withdrawal to be made", () => {
    const account = new Account;
    account.addBalance(50);
    account.withdrawBalance(40);
    expect(account.getBalance()).toEqual(
        "date || credit || debit || balance/n24/10/2022||50.00||        ||50.00/n24/10/2022||       ||40.00||10.00/n");
  });
  it("allows a mix of withdrawals and additions to be made", () => {
    const account = new Account;
    account.addBalance(50);
    account.addBalance(50);
    account.withdrawBalance(40);
    account.addBalance(10);
    account.withdrawBalance(20);
    account.withdrawBalance(40);
    expect(account.getBalance()).toEqual(
        "date || credit || debit || balance/n24/10/2022||50.00||        ||50.00/n24/10/2022||50.00||        ||100.00/n24/10/2022||       ||40.00||60.00/n24/10/2022||10.00||        ||70.00/n24/10/2022||       ||20.00||50.00/n24/10/2022||       ||40.00||10.00/n");
  });
  it("does not allow 0 to be  as withdrawn", () => {
    const account = new Account();
    account.addBalance(50);
    account.withdrawBalance(0)
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n24/10/2022||50.00||        ||50.00/n"
    );
  });
  it("does not allow you to withdraw below zero", () => {
    const account = new Account();
    account.withdrawBalance(100)
    expect(account.getBalance()).toEqual(
      "date || credit || debit || balance/n")
  })
});
