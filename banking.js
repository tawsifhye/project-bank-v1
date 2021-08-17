/* //handle deposit button event 

document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText= depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount+ newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    
    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input field
    depositInput.value = '';
});

//handle withdraw event handaler

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmoutText = withdrawInput.value;
    const newWithdrawAmaount = parseFloat(withdrawAmoutText);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawToltal= previousWithdrawTotal + newWithdrawAmaount;
    withdrawTotal.innerText = newWithdrawToltal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmaount;
    balanceTotal.innerText = newBalanceTotal;
    //clear withdraw input
    withdrawInput.value = '';
}); */


//---------------------- calculation using function-------------------------------
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = ''; 
    return amountValue;
}

function updateTotalField(totalFieldID, amount){
    const totalElement = document.getElementById(totalFieldID);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrnetBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal; 
}

function updateBalance(amount){
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrnetBalance();
    balanceTotal.innerText = previousBalanceTotal+ amount;
}

//handle depositbutton event
document.getElementById('deposit-button').addEventListener('click', function(){
    //function to get deposit amount from input 
    const depositAmount = getInputValue('deposit-input');
    
    if(depositAmount > 0){
        //function to update total deposit
        updateTotalField('deposit-total', depositAmount);
         //function to update balance
        updateBalance(depositAmount);
    }
   /*  else{
        document.getElementById('deposit-input').value = 'Please Enter valid Number'
        document.getElementById('deposit-input').style.backgroundColor = 'coral'
        
    } */
   
    
});

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
   //function to get withdraw amount from input 
    const withdrawAmount = getInputValue('withdraw-input');
    const currnetBalance = getCurrnetBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currnetBalance){
        //function to update total withdraw
        updateTotalField('withdraw-total', withdrawAmount);
        //function to update balance
        updateBalance(-withdrawAmount);
    }
    /* else{
        document.getElementById('withdraw-input').value = 'Please Enter valid Number'
        document.getElementById('withdraw-input').style.backgroundColor = 'coral'    
    } */

});