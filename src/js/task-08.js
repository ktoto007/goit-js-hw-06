const formEl = document.querySelector('.login-form');

function onFormProcessing(event){
    event.preventDefault();

    const {
        elements:  { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("There are empty fields in the form!");
      };

    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);
}

formEl.addEventListener('submit', onFormProcessing)
