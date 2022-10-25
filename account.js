class Account {
  constructor() {
    this.date = new Date().toLocaleDateString();
    this.history = [];
  }
  addBalance = (amount) => {
    if (this.checkInput(amount) === true) {
      let transaction = { date: this.date, amount: amount, type: "add" };
      this.history.push(transaction);
      console.log(`${amount.toFixed(2)} added to your account`);
    } else {
      console.log("Incorrect amount");
    }
  };
  withdrawBalance = (amount) => {
    if (this.balanceCheck() - amount >= 0 && this.checkInput(amount) === true) {
      let transaction = { date: this.date, amount: amount, type: "withdraw" };
      this.history.push(transaction);
      console.log(`${amount.toFixed(2)} withdrawn from your account`);
    } else {
      console.log("Incorrect amount");
    }
  };
  balanceCheck = () => {
    if (this.history.length === 0) {
      return "0.00";
    }
    this.balance = 0;
    this.history.forEach((transaction) => {
      transaction.type === "add"
        ? (this.balance += transaction.amount)
        : (this.balance -= transaction.amount);
    });
    return this.balance.toFixed(2);
  };
  checkInput = (input) => {
    return (
      this.decPlaceCheck(input) &&
      this.typeCheck(input) &&
      this.similarityCheck(input) &&
      this.numCheck(input) &&
      input > 0
    ); //not allowing 0 balance to be added
  };
  //test for more than one decimal point
  decPlaceCheck = (input) => {
    return input.toString().includes(".")
      ? input.toString().split(".")[1].length <= 2
      : true;
  };
  //test for similarity if input includes mathematical functions
  similarityCheck = (input) => {
    let inputString = input.toString();
    return inputString === inputString.replace(/[^0-9.]/g, "");
  };
  //check to ensure input is a number
  typeCheck = (input) => {
    return typeof input === "number";
  };
  //testing for input being an integer or float
  numCheck = (input) => {
    return Number.isInteger(Math.floor(input)) || Number.isInteger(input);
  };
}

module.exports = Account;
