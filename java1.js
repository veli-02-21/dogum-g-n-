// HTML'deki zarf elementini seçiyoruz
const envelope = document.getElementById('envelope');

// Zarfa tıklandığında çalışacak fonksiyon
envelope.addEventListener('click', function() {
    // Eğer 'open' sınıfı yoksa ekler, varsa çıkarır.
    // Bu sayede tekrar tıklandığında zarf kapanabilir.
    envelope.classList.toggle('open');
});