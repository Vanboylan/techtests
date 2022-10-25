**Classes required:**

1. User

2. Account


/////////////////////////////////////////////////////////////////////////////////

**Methods required:**

*User* - add account, get statement

*Account* - add, withdraw, get transactions

/////////////////////////////////////////////////////////////////////////////////

**Constructors required:**

*User*
this.accounts = array

*Account*
this.transactions = array


/////////////////////////////////////////////////////////////////////////////////

**Methods breakdown:**
**User**

*Add account* 

argument = account
Result = push the account object into the array

*get statement*

No argument
Result = formatted statement

**Account**

*Add money/Withdraw money*

Argument = amount
Result = {date:(today), amount:(amount), type:(add or withdraw)}

*Withdraw money:* 

Argument = amount
Result = amount added to Balance, hash of [date, amount] added to History - if withdraw, amount is made negative.

*Get transactions:* 

No argument required
Result = return the array of hash objects

//////////////////////////////////////////////////////////////////////////////////

