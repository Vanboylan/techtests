class Account {
    constructor() {
        this.history = []
    }
  getBalance = () => {
    let balanceString = "date || credit || debit || balance/n";
    if (this.history.length > 0) {
        let balance = 0
    this.history.forEach(transaction => {
        console.log(transaction[1])
        balance += transaction[1]
        balanceString += `${transaction[0]}||${transaction[1]}||        ||${balance}/n`
     })
    }
      return balanceString;
    };
  addBalance = (credit) => {
    let date = "24/10/2022"
    let creditToString = credit.toString();
    if (
      creditToString === creditToString.replace(/\D/g, "") && /*test for similarity if 'credit' includes mathematical functions*/
      Number.isInteger(credit) && /*testing for credit being an integer*/
      credit > 0 /*not allowing 0 balance to be added*/
    ) {
      let transaction = [date, credit]
      this.history.push(transaction)
    };
  };
};

module.exports = Account;
