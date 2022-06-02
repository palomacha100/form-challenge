function success() {
    document.querySelector('.main-success').style.display = 'flex';
    document.querySelector('.main').style.display = 'none';
}

function goBack(){
    document.querySelector('.main').style.display = 'flex';
    document.querySelector('.main-success').style.display = 'none';
}
