document.getElementById('user-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const getEmail = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const getPassword = userPassword.value;
    if(getEmail == 'nazmussakibppp22@gmail.com' && getPassword == 'mynameiskhan'){
        window.location.href = 'details.html';
    }
})