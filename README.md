# FAN-FUN_WEB_DEV-MIDTERM
Mid term of Fundamentals of Web Development
You are building a simple bank account viewing application. The user selects which account to view and perform transactions on. The user input is checked and output on screen with any messages and changes to the account.
Instruc tins:
1. Download the zip file “MidtermW2020.zip” from FOL. Re-save the starting html file using your first name followed by an
underscore and then “MidtermTest”.
1. Create two variables in global scope, one for the chequing account and another for the savings. Set the amount for chequing to 450.0 and the amount for savings to 5000.0
2. There is a function provided startUpATM() that is executed when the page loads. Place some code in this func on that displays by default the chequing account details to the User. (Label and amount)
3. Implement a function that will display the account type and account amount to the webpage whenever the dropdown menu selection is changed.
4. Implement some Transaction functionality for the textbox and bu ons on screen using events and func ons:
Deposit:
● Read the value in the textbox and and add the amount to the currently selected account
● If the amount is less than $10, do not allow a deposit and display a message to the Transac on Log on the
webpage “Minimum $10 to deposit”
● for successful transactions display a message with amount added to the Transac on Log on the webpage
“Deposited: $0000.00 to accountType”
Withdraw:
● Read the value in the textbox and and remove the amount to the currently selected account
● If the amount is greater than the amount in the account, do not allow the withdrawal and display a message
to the Transaction Log on the webpage “Insufficient Funds”
● for successful transactions display a message with amount removed to the Transaction Log on the webpage
“Withdrawal: -$0000.00 to accountType”
6. After a transaction has taken place, update the amount shown on screen with the new amount.
7. That's it! Zip your submission and submit to the midterm dropbox