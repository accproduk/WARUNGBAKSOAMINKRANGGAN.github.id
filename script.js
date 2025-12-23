// Menunggu seluruh dokumen dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efek Animasi Muncul Saat Scroll (Reveal on Scroll)
    const observerOptions = {
        threshold: 0.1 // Animasi jalan saat 10% elemen terlihat di layar
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Menargetkan kartu menu dan bagian lokasi untuk animasi
    const elementsToAnimate = document.querySelectorAll('.plant-card, .about-us, .location-wrapper');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        revealObserver.observe(el);
    });

    // 2. Fungsi Klik Tombol WhatsApp (Backup jika link HTML tidak sengaja salah)
    const waButton = document.querySelector('.wa-button');
    if (waButton) {
        waButton.addEventListener('click', function(e) {
            // Memastikan link menggunakan format internasional yang benar
            const phone = "+6282320834782";
            const text = encodeURIComponent("Halo Bakso Amin Kranggan, saya mau pesan...");
            this.href = `wa.me{phone}?text=${text}`;
        });
    }

    // 3. Efek Navigasi Halus (Smooth Scroll)
    // Berguna jika nanti Anda menambah menu navigasi di atas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Warung Bakso Amin Kranggan Script Ready! 2025");
});
