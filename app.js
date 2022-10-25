const Account = require('./Account');
const User = require('./User')

clock = sinon.useFakeTimers(new Date(2023,1,10).getTime());
const testUser = new User;
const testAccount = new Account;
testAccount.addBalance(1000);
clock = sinon.useFakeTimers(new Date(2023,0,13).getTime());
testAccount.addBalance(2000);
clock = sinon.useFakeTimers(new Date(2011,0,14).getTime());
testAccount.withdrawBalance(500);
testUser.addAccount(testAccount);
testUser.getStatement();

