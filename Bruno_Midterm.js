/*
          Name: Bruno Surdi Oliveira
          Date: Feb 2020
          Purpose: Midterm Test, Part B - IWD Bank Machine
      */

/*
    Global variables
*/
var chequingAmount = 450.00;
var savingsAmount = 5000.00;

/*
    This function will run when the page loads
*/
function startUpATM() {
    //Get the option elements
    var elementAccountType = document.getElementById("pAccountType");
    var elementAccountAmount = document.getElementById("pAccountAmount");

    // populate with the information of chequing 
    elementAccountType.innerHTML = "Chequing";
    elementAccountAmount.innerHTML = "$" + chequingAmount.toFixed(2);
}

// Function that will display the account type and amount when changed the dropdown
function accountSelector() {
    // Get the value of the account type and amount
    var accountTypeValue = document.getElementById("ddAccountTypeMenu").value;
    // console.log(accountTypeValue);

    // output area
    var parameterElementAccount = document.getElementById("pAccountType");
    var parameterElementAmount = document.getElementById("pAccountAmount");

    // populate the account type with the selected one
    parameterElementAccount.innerHTML = accountTypeValue;

    // populate the amount with the selected account
    if (accountTypeValue === "Chequing") {
        parameterElementAmount.innerHTML = "$" + chequingAmount.toFixed(2);
    }
    else if (accountTypeValue === "Savings") {
        parameterElementAmount.innerHTML = "$" + savingsAmount.toFixed(2);
    }
}

function readValueFromTextbox() {
    // Locate the input element we want to read from and access the value property
    return parseFloat(document.getElementById("tbTransaction").value);
}

// Function Deposit
function deposit() {
    readValueFromTextbox();

    var accountTypeValue = document.getElementById("ddAccountTypeMenu").value;
    var parameterElementAmount = document.getElementById("pAccountAmount");

    if (accountTypeValue === "Chequing") {
        if (readValueFromTextbox() < 10) {
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Minimum $10 to deposit";
        }
        else {
            chequingAmount = chequingAmount + readValueFromTextbox();
            parameterElementAmount.innerHTML = "$" + chequingAmount.toFixed(2);
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Deposited: $" + readValueFromTextbox().toFixed(2) + " to " + accountTypeValue;
        }
    }
    else if (accountTypeValue === "Savings")

        if (readValueFromTextbox() < 10) {
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Minimum $10 to deposit";
        }
        else {
            savingsAmount = savingsAmount + readValueFromTextbox();
            parameterElementAmount.innerHTML = "$" + savingsAmount.toFixed(2);
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Deposited: $" + readValueFromTextbox().toFixed(2) + " to " + accountTypeValue;
        }
}

// function Withdraw 
function withdraw() {
    readValueFromTextbox();

    var accountTypeValue = document.getElementById("ddAccountTypeMenu").value;
    var parameterElementAmount = document.getElementById("pAccountAmount");

    if (accountTypeValue === "Chequing") {
        if (readValueFromTextbox() > chequingAmount) {
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Insufficient Funds";
        }
        else {
            chequingAmount = (chequingAmount - readValueFromTextbox());
            parameterElementAmount.innerHTML = "$" + chequingAmount;
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Withdraw: -$" + readValueFromTextbox().toFixed(2) + " to " + accountTypeValue;
        }
    }
    else if (accountTypeValue === "Savings") {
        if (readValueFromTextbox() > savingsAmount) {
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Insufficient Funds";
        }
        else {
            savingsAmount = (savingsAmount - readValueFromTextbox());
            parameterElementAmount.innerHTML = "$" + savingsAmount;
            var outputArea = document.getElementById("pTranactionLog");
            outputArea.innerHTML = "Withdraw: -$" + readValueFromTextbox().toFixed(2) + " to " + accountTypeValue;
        }
    }
}