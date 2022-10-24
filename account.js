class Account {
    constructor() {
        this.history = []
    }
  getBalance = () => {
    let balanceString = "date || credit || debit || balance/n";
    if (this.history.length > 0) {
     let transactionHistory = this.history.reduce((partialStatement, nextLine) => 
      partialStatement += nextLine);
      return balanceString + transactionHistory;
    } else {
      return balanceString;
    }
  };
  addBalance = (credit) => {
    let creditToString = credit.toString();
    if (
      creditToString === creditToString.replace(/\D/g, "") &&
      Number.isInteger(credit) &&
      credit > 0
    ) {
      let creditFormat = `       ||${credit}||       ||${credit}/n`;
      this.history.push(creditFormat)
    };
  };
}

module.exports = Account;
