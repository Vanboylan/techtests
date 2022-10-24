class Account {
    getBalance = () => {
        let balanceString = "date || credit || debit || balance/n"
        if (this.creditString === undefined)
        {return balanceString}
        else
        {return balanceString + this.creditString}
    };
    addBalance = (credit) => {
        let creditToString = credit.toString()
        if (creditToString === creditToString.replace(/\D/g,'') && Number.isInteger(credit))
        {this.creditString = `       ||${credit}||       ||${credit}/n`;}
        else
        {this.creditString = undefined};
    }
};

module.exports = Account;