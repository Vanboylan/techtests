const Account = require("./Account");
const User = require("./User");

date1 = new Date("2023-01-10T01:00:00").getTime();
date2 = new Date("2023-01-13T01:00:00").getTime();
date3 = new Date("2023-01-14T01:00:00").getTime();

const testUser = new User();
const testAccount = new Account();
Date.prototype.getTime = function () {
  return date1;
};
testAccount.addBalance(1000);
Date.prototype.getTime = function () {
  return date2;
};
testAccount.addBalance(2000);
Date.prototype.getTime = function () {
  return date3;
};
testAccount.withdrawBalance(500);
testUser.addAccount(testAccount);
console.log(testUser.getStatement());
