let successButton = document.getElementById('successButton');
let form = document.getElementById('saveForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

successButton.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let password = document.getElementById('password');
    let birthday = document.getElementById('birthday');

    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    phone = phone.value;
    localStorage.setItem('phone', phone);

    password = password.value;
    localStorage.setItem('password', password);

    birthday = birthday.value;
    localStorage.setItem('birthday', birthday);
});