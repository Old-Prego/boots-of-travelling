const loginHandler = async function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const response = await fetch ('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/title');
    } else {
        alert('Failed to login');
    }
};

loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit',loginHandler)