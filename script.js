
let currentIndex = 0;
const progressBar = document.querySelector('.progress-bar');
const images = document.querySelectorAll('.carrossel img');
const totalImages = images.length;
const prevButton = document.querySelector('.carrossel .prev');
const nextButton = document.querySelector('.carrossel .next');
const dotsContainer = document.querySelector('.dots');
let timeoutId;

for (let i = 0; i < totalImages; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        showImage(i);
    });
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dots .dot');
dots[currentIndex].classList.add('active');

images[currentIndex].style.display = 'block';

function showImage(index) {
    clearTimeout(timeoutId);
    images[currentIndex].style.display = 'none';
    dots[currentIndex].classList.remove('active');
    currentIndex = (index + totalImages) % totalImages;
    images[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
    resetAndStartProgressBar();
}

prevButton.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

setInterval(() => {
    showImage(currentIndex + 1);
}, 8000); // Troca as imagens a cada 8 segundos

function resetAndStartProgressBar() {
    progressBar.style.width = '0%';
    progressBar.style.transition = 'none'; // Remove a transição para reiniciar a barra imediatamente
    // Força o navegador a reconhecer a mudança acima antes de adicionar a transição novamente
    setTimeout(() => {
        progressBar.style.transition = 'width 7.8s linear';
        progressBar.style.width = '100%';
    }, 50);
}
    resetAndStartProgressBar();

