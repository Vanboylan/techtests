class Account {
    constructor() {
        this.date = new Date().toLocaleDateString()
        this.history = []
    }
  getBalance = () => {
    let balanceString = "date || credit || debit || balance/n";
    if (this.history.length > 0) {
        let balance = 0
    this.history.forEach(transaction => {
        balance += transaction[1]
        if (transaction[1] > 0) {
        balanceString += `${transaction[0]}||${transaction[1]}||        ||${balance}/n`
    }
    else {
        balanceString += `${transaction[0]}||       ||${(transaction[1]*-1)}||${balance}/n`
    }
    })}
      return balanceString;
    };
  inputChecker = (input) => {
    let inputString = input.toString();
    if (
      inputString === inputString.replace(/\D/g, "") && /*test for similarity if 'credit' includes mathematical functions*/
      Number.isInteger(input) && /*testing for credit being an integer*/
      input > 0)
      {return true}
    else
    {return false} /*not allowing 0 balance to be added*/
  }
  addBalance = (amount) => {
     if (this.inputChecker(amount) === true)
    {
        let transaction = [this.date, amount]
      this.history.push(transaction)
    };
  };
  withdrawBalance = (amount) => {
    if (this.inputChecker(amount) === true) {
        let withdrawal = (amount * -1)
    let transaction = [this.date, withdrawal];
    this.history.push(transaction);
  }
};
};

module.exports = Account;
