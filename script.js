// script.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Fungsi untuk menerapkan tema dan menampilkan/menyembunyikan ikon
    function applyTheme(theme) {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    }

    // Cek preferensi pengguna dari localStorage saat halaman dimuat
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Jika tidak ada preferensi, default ke light-mode
        applyTheme('light-mode');
    }

    // Event listener untuk tombol toggle
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            applyTheme('dark-mode');
            localStorage.setItem('theme', 'dark-mode'); // Simpan preferensi
        } else {
            applyTheme('light-mode');
            localStorage.setItem('theme', 'light-mode'); // Simpan preferensi
        }
    });
});