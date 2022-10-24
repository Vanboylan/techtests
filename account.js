class Account {
    getBalance = () => {
        let balanceString = "date || credit || debit || balance/n"
        if (this.creditString === undefined)
        {return balanceString}
        else
        {return balanceString + this.creditString}
    };
    addBalance = (credit) => {
        this.creditString = `       ||${credit}||       ||${credit}/n`;
    }
};

module.exports = Account;