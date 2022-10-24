class Account {
  constructor() {
    this.date = new Date().toLocaleDateString();
    this.history = [];
    this.balance = 0;
  }
  getBalance = () => {
    let balanceString = "date || credit || debit || balance/n";
    if (this.history.length > 0) {
      this.balance = 0;
      this.history.forEach((transaction) => {
        this.balance += transaction[1];
        balanceString += this.formatString(transaction);
      });
    }
    return balanceString;
  };
  formatString = (transactionArray) => {
    if (transactionArray[1] > 0) {
      return `${transactionArray[0]}||${transactionArray[1]}||        ||${this.balance}/n`;
    } else {
      return `${transactionArray[0]}||       ||${transactionArray[1] * -1}||${
        this.balance
      }/n`;
    }
  };
  checkInput = (input) => {
    let inputString = input.toString();
    if (
      inputString ===
        inputString.replace(
          /\D/g,
          ""
        ) /*test for similarity if 'credit' includes mathematical functions*/ &&
      Number.isInteger(input) /*testing for credit being an integer*/ &&
      input > 0
    ) {
      return true;
    } else {
      return false;
    } /*not allowing 0 balance to be added*/
  };
  addBalance = (amount) => {
    if (this.checkInput(amount) === true) {
      let transaction = [this.date, amount];
      this.history.push(transaction);
    }
  };
  withdrawBalance = (amount) => {
    if (this.checkInput(amount) === true) {
      let withdrawal = amount * -1;
      let transaction = [this.date, withdrawal];
      this.history.push(transaction);
    }
  };
}

module.exports = Account;
