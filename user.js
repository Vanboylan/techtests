class User {
  constructor() {
    this.accounts = [];
  }
  getStatement = () => {
    if (this.accounts.length === 0) {
      return "date || credit || debit || balance\n";
    }
    return this.formatStatement();
  };
  formatStatement = () => {
    let balance = 0;
    let balanceString = "date || credit || debit || balance\n";
    this.accounts.forEach((account) => {
      account.history.forEach((transaction) => {
        if (transaction.type === "add") {
          balance += transaction.amount;
          balanceString += 
          `${transaction.date}||${transaction.amount.toFixed(2)}||      ||${balance.toFixed(2)}\n`;
        } else {
          balance -= transaction.amount;
          balanceString += `${transaction.date}||     ||${transaction.amount.toFixed(2)}||${balance.toFixed(2)}\n`;
        }
      });
    });
    return balanceString;
  };
  addAccount = (account) => {
    this.accounts.push(account);
  };
}

module.exports = User;
