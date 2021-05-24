const signupHandler = async function(event) {
    event.preventDefault();

    const usernameInput = document.querySelector('#usernameInput');
    const password1 = document.querySelector('#passwordInput1');
    const password2 = document.querySelector('#passwordInput2');

    if(password1.value != password2.value){
        window.alert("Your passwords do not match, please re-enter them.");
        return;
    }

    const response = await fetch('api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameInput.value,
            password: password1.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/title');
    } else {
        window.alert("Failed to sign up, please try again");
    }
};

const signupInput = document.querySelector('#createAcc');
signupInput.addEventListener('submit', signupHandler);