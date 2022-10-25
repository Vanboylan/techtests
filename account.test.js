const Account = require("./Account");
let date = "2022-10-24"
jest.useFakeTimers().setSystemTime(new Date(date));
const consoleSpy = jest.spyOn(console, 'log');

describe("Account", () => {
  // Add balance tests 
  it("allows a balance to be added, displaying today's date", () => {
    const account = new Account();
    account.addBalance(500);
    expect(account.history[0].date).toEqual('24/10/2022')
    expect(account.history[0].amount).toEqual(500)
    expect(account.history[0].type).toEqual('add')
    expect(account.history.length).toEqual(1)
  });
  it("allows a balance to be added and totals correctly", () => {
    const account = new Account();
    account.addBalance(10);
    expect(consoleSpy).toHaveBeenCalledWith('10.00 added to your account');
    expect(account.balanceCheck()).toEqual("10.00")
  });
  it("allows a balance to be added with pence, displaying today's date", () => {
    const account = new Account();
    account.addBalance(10.32);
    expect(consoleSpy).toHaveBeenCalledWith('10.32 added to your account');
    expect(account.history[0].date).toEqual('24/10/2022')
    expect(account.history[0].amount).toEqual(10.32)
    expect(account.history[0].type).toEqual('add')
    expect(account.history.length).toEqual(1)
    expect(account.balanceCheck()).toEqual("10.32")
  });
  it("allows a balance to be added with pence, displaying today's date", () => {
    const account = new Account();
    account.addBalance(10.3);
    expect(consoleSpy).toHaveBeenCalledWith('10.30 added to your account');
    expect(account.balanceCheck()).toEqual("10.30")
  });
  it("rejects a balance that is not an integer", () => {
    const account = new Account();
    account.addBalance("potato");
    expect(consoleSpy).toHaveBeenCalledWith('Incorrect amount');
    expect(account.balanceCheck()).toEqual("0.00");
  });
  it("rejects a balance that is technically an integer but not fully numeric", () => {
    const account = new Account();
    account.addBalance(1 - 4);
    expect(consoleSpy).toHaveBeenCalledWith('Incorrect amount');
    expect(account.balanceCheck()).toEqual("0.00");
    expect(account.history.length).toEqual(0)
  });
  it("rejects a string input number", () => {
    const account = new Account();
    account.addBalance("10.01");
    expect(consoleSpy).toHaveBeenCalledWith('Incorrect amount');
    expect(account.balanceCheck()).toEqual("0.00")
  });
  it("rejects a negative credit amount", () => {
    const account = new Account();
    account.addBalance(-100);
    expect(consoleSpy).toHaveBeenCalledWith('Incorrect amount');
    expect(account.balanceCheck()).toEqual("0.00")
  });
  it("does not allow 0 to be added as credit", () => {
    const account = new Account();
    account.addBalance(0);
    expect(consoleSpy).toHaveBeenCalledWith('Incorrect amount');
    expect(account.balanceCheck()).toEqual("0.00");
  });
  it("allows two balances to be added", () => {
    const account = new Account();
    account.addBalance(50);
    expect(consoleSpy).toHaveBeenCalledWith('50.00 added to your account');
    expect(account.balanceCheck()).toEqual("50.00")
    account.addBalance(30);
    expect(consoleSpy).toHaveBeenCalledWith('30.00 added to your account');
    expect(account.balanceCheck()).toEqual("80.00")
    expect(account.history[0].date).toEqual('24/10/2022')
    expect(account.history[0].amount).toEqual(50)
    expect(account.history[0].type).toEqual('add')
    expect(account.history.length).toEqual(2)
    expect(account.history[1].date).toEqual('24/10/2022')
    expect(account.history[1].amount).toEqual(30)
    expect(account.history[1].type).toEqual('add')
  });
  it("allows five balances to be added with varying dates", () => {
    const account = new Account();
    account.addBalance(50);
    // let date = "2022-10-25";
    account.addBalance(100);
    // let date = "2022-11-16";
    account.addBalance(70);
    // let date = "2022-11-25";
    account.addBalance(40);
    // let date = "2022-12-01";
    account.addBalance(30);
    expect(account.balanceCheck()).toEqual("290.00")
    console.log(account.history)
    // expect(account.history[0].date).toEqual('24/10/2022')
    expect(account.history[0].amount).toEqual(50)
    expect(account.history[0].type).toEqual('add')
    expect(account.history.length).toEqual(5)
    // expect(account.history[1].date).toEqual('25/10/2022')
    expect(account.history[1].amount).toEqual(100)
    expect(account.history[1].type).toEqual('add')
    // expect(account.history[2].date).toEqual('16/11/2022')
    expect(account.history[2].amount).toEqual(70)
    expect(account.history[2].type).toEqual('add')
    // expect(account.history[3].date).toEqual('25/11/2022')
    expect(account.history[3].amount).toEqual(40)
    expect(account.history[3].type).toEqual('add')
    // expect(account.history[4].date).toEqual('01/12/2022')
    expect(account.history[4].amount).toEqual(30)
    expect(account.history[4].type).toEqual('add')
  });
  it("allows a withdrawal to be made", () => {
    const account = new Account();
    account.addBalance(50);
    account.withdrawBalance(40);
    expect(account.balanceCheck()).toEqual("10.00")
    expect(account.history[1].type).toEqual('withdraw')
  });
  it("allows a mix of withdrawals and additions to be made", () => {
    const account = new Account();
    account.addBalance(50);
    account.addBalance(50);
    account.withdrawBalance(40);
    account.addBalance(10);
    account.withdrawBalance(20);
    account.withdrawBalance(40);
    expect(account.balanceCheck()).toEqual("10.00")
    expect(account.history.length).toEqual(6)
  });
  it("does not allow 0 to be  as withdrawn", () => {
    const account = new Account();
    account.addBalance(50);
    account.withdrawBalance(0);
    expect(account.history.length).toEqual(1)
  });
  it("does not allow you to withdraw below zero", () => {
    const account = new Account();
    account.withdrawBalance(100);
    expect(account.balanceCheck()).toEqual("0.00")
  });
  it("rejects a balance with more than two decimal places", () => {
    const account = new Account();
    account.addBalance(500.255);
    expect(account.balanceCheck()).toEqual("0.00")});
  it("allows a mix of withdrawals and additions to be made with incorrect inputs", () => {
      const account = new Account();
      account.addBalance(50);
      expect(consoleSpy).toHaveBeenCalledWith('50.00 added to your account');
      account.addBalance("50");
      expect(consoleSpy).toHaveBeenCalledWith('Incorrect amount');
      account.withdrawBalance(40);
      account.addBalance(10);
      account.withdrawBalance(5.32);
      account.withdrawBalance(40);
      expect(consoleSpy).toHaveBeenCalledWith('Incorrect amount');
      expect(account.balanceCheck()).toEqual("14.68")
      expect(account.history.length).toEqual(4)
    });
});
