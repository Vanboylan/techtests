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
      return `${transactionArray[0]}||${transactionArray[1].toFixed(2)}||        ||${this.balance.toFixed(2)}/n`;
    } else {
      return `${transactionArray[0]}||       ||${(transactionArray[1] * -1).toFixed(2)}||${
        this.balance.toFixed(2)
      }/n`;
    }
  };
  similarityCheck = (input) => { /*test for similarity if input includes mathematical functions*/ 
    let inputString = input.toString();
    return inputString === inputString.replace(/[^0-9.]/g, '')
  }
  stringCheck = (input) => {
    console.log(typeof input)
    if (typeof input === 'number')
    {return true}
    else
    {return false}
  }
  numCheck = (input) => { /*testing for input being an integer or float*/
    if (Number.isInteger(Math.floor(input)) || Number.isInteger(input))
    {return true}
    else
    {return false}
  }
  checkInput = (input) => {
    if (this.stringCheck(input) &&
    this.similarityCheck(input) &&
      this.numCheck(input) &&
      input > 0 /*not allowing 0 balance to be added*/
    ) {
      return true;
    } else {
      return false;
    } 
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
