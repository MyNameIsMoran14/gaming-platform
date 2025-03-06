function check_email(){
    let email = document.querySelector('#email_field').value;
    if (!email.includes('@'))  alert('еблан символа нет собачки');
    else if (!email.includes('.'))  alert('еблан у тебя точки нет');
    else alert('заебись');
}