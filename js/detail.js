document.getElementById('dipo-btn').addEventListener('click', function(){
    const dipoInput = document.getElementById('dipo-input');
    const dipoAmount = parseFloat(dipoInput.value);
    const dipoTotal = document.getElementById('dipo-total');
    const newTotalDipo = dipoAmount + parseFloat(dipoTotal.innerText)
    dipoTotal.innerText = newTotalDipo
    const balanceTotal = document.getElementById('balance-total');
    const convartInteger = parseFloat(balanceTotal.innerText);
    const newTotalBalance = dipoAmount + convartInteger;
    balanceTotal.innerText = newTotalBalance;
    dipoInput.value = '';
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    const withdrawTotal = document.getElementById('withdraw-total');
    const newTotalwithdraw = withdrawAmount + parseFloat(withdrawTotal.innerText)
    withdrawTotal.innerText = newTotalwithdraw
    const balanceTotal = document.getElementById('balance-total');
    const convartInteger = parseFloat(balanceTotal.innerText);
    const newTotalBalance = convartInteger - withdrawAmount;
    balanceTotal.innerText = newTotalBalance;
    withdrawInput.value = '';
})