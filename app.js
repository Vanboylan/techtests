const Account = require('./Account');

const testAccount = new Account;
testAccount.addBalance(1000);
testAccount.getBalance();
testAccount.addBalance(100);
testAccount.getBalance();
testAccount.withdrawBalance(200);
testAccount.getBalance();
