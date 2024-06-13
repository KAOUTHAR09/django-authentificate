document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    const userData = {
        username: username,
        password: password,
        remember: remember
    };
    
    console.log('User Data', userData);
}); 
