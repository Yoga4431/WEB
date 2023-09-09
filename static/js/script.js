const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content');
const scrollSpeedRange = document.querySelector('#scrollSpeedRange');
const startScrollButton = document.querySelector('#startScroll');
const stopScrollButton = document.querySelector('#stopScroll');

let scrollingInterval;
let isScrolling = false;

// Fungsi untuk menggulir ke bawah
function scrollDown() {
  scrollContainer.scrollTop += 1; // Menggulir satu piksel ke bawah
}

// Memulai scroll otomatis ketika tombol "Mulai Scroll" ditekan
startScrollButton.addEventListener('click', () => {
  if (!isScrolling) {
    isScrolling = true;
    const scrollSpeed = parseFloat(scrollSpeedRange.value);
    scrollingInterval = setInterval(scrollDown, 1000 / scrollSpeed);
    startScrollButton.disabled = true;
    stopScrollButton.disabled = false;
  }
});

// Menghentikan scroll otomatis ketika tombol "Hentikan Scroll" ditekan
stopScrollButton.addEventListener('click', () => {
  if (isScrolling) {
    isScrolling = false;
    clearInterval(scrollingInterval);
    startScrollButton.disabled = false;
    stopScrollButton.disabled = true;
  }
});

// Memperbarui label kecepatan saat slider berubah
scrollSpeedRange.addEventListener('input', () => {
  const speedLabel = document.querySelector('#speedLabel');
  speedLabel.textContent = scrollSpeedRange.value;
});

// Inisialisasi kecepatan default
scrollSpeedRange.dispatchEvent(new Event('input'));
