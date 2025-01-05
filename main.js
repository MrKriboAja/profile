document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cek kredensial
    if (username === 'NobitaLucu' && password === 'NobitaAjah') {
        // Tampilkan halaman utama dan sembunyikan halaman login
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
    } else {
        alert('Username atau Password salah. Silakan coba lagi.');
    }
});