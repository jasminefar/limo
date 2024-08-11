document.getElementById('front-wheel').addEventListener('click', function() {
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => this.style.transform = 'rotate(0deg)', 500);
});

document.getElementById('back-wheel').addEventListener('click', function() {
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => this.style.transform = 'rotate(0deg)', 500);
});
