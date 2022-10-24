**before you get started, you will need to install some dependencies**

run:

npm init
npm install -g jest
npm install -g esbuild
npm install -g eslint
npm install

now you can use *node.js* to run the *app.js* file by typing in terminal:

node -r ./app.js

This is a simple example of the file working on a few pre-written examples

you can use the program itself by running:

node -r ./account.js

**here you can utilise the software itself with a test account by running:**

const Account = require('./Account');
let testAccount = new Account;

**from here your functions are:**

.getBalance() 
takes no parameters and logs a statement
.addBalance(number)
argument is a number, adds money to your account
.withdrawBalance(number)
argument is a number, withdraws money from your account

example of code working:
![](2022-10-24-16-41-14.png)

code created by Vanboylan, available at www.github.com/vanboylan