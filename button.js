function success() {
    const isFormValid = validateFields()
    if(!isFormValid) return

    document.querySelector('.main-success').style.display = 'flex';
    document.querySelector('.main').style.display = 'none';
}

function goBack(){
    document.querySelector('.main').style.display = 'flex';
    document.querySelector('.main-success').style.display = 'none';
}

const resetErrorHandler = () => {
    document.querySelector('.name-error').style.display = 'none';
    document.querySelector('.mail-error').style.display = 'none';
    document.querySelector('.phone-error').style.display = 'none';
    document.querySelector('.password-error').style.display = 'none';
    document.querySelector('.accept-error').style.display = 'none';
}

const validateEmail = email => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

const validatePhoneNumber = number => {
    const pattern = /\d{11}/g
    return pattern.test(number);
}

const validatePassword = password => {
    const pattern = /([0-9]){6,8}/g
    return pattern.test(password);
}

const validateFields = () => {
    resetErrorHandler()
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const birthday = document.getElementById('birthday');
    const checkbox = document.getElementById('accept');

    if(name.value.length < 4 || !name.value.includes(' ')) {
        document.querySelector('.name-error').style.display = 'flex';
        return false
    }

    if(!validateEmail(email.value)) {
        document.querySelector('.mail-error').style.display = 'flex';
        return false
    }

    if(!validatePhoneNumber(phone.value)) {
        document.querySelector('.phone-error').style.display = 'flex';
        return false
    }

    if(!validatePassword(password.value)) {
        document.querySelector('.password-error').style.display = 'flex';
        return false
    }

    if (!checkbox.checked) {
        document.querySelector('.accept-error').style.display = 'flex';
        return false
    }

    return true
}
