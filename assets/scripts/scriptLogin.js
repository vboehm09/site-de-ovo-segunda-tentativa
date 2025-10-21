document.getElementById('login').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');

    if (email === emailSalvo && senha === senhaSalva) {
        window.location.href = '../index.html'
    } else {
        alert('Usuario ou senha estão incorretos!')
    }
})