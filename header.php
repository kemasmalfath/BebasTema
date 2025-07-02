<?php
// header.php

// Dapatkan nama file saat ini untuk penanda navigasi aktif
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplikasi Dark Mode - <?php echo ucfirst(str_replace('.php', '', $currentPage)); ?></title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body class="light-mode"> <header>
        <nav>
            <ul>
                <li><a href="index.php" class="<?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>">Beranda</a></li>
                <li><a href="about.php" class="<?php echo ($currentPage == 'about.php') ? 'active' : ''; ?>">Tentang Kami</a></li>
                <li><a href="contact.php" class="<?php echo ($currentPage == 'contact.php') ? 'active' : ''; ?>">Kontak</a></li>
            </ul>
        </nav>
        <button id="darkModeToggle">
            <i class="fas fa-sun" id="sunIcon"></i>
            <i class="fas fa-moon" id="moonIcon"></i>
        </button>
    </header>