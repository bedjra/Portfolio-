let currentPage = 1;
const totalPages = 3;
const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.page-dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateNavigation() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === currentPage);
    });
}

function navigateToPage(page) {
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    pages.forEach(p => p.classList.remove('flipped'));

    if (currentPage === 2) {
        document.getElementById('page-1').classList.add('flipped');
    } else if (currentPage === 3) {
        document.getElementById('page-1').classList.add('flipped');
        document.getElementById('page-2').classList.add('flipped');
    }

    updateNavigation();
}

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) navigateToPage(currentPage + 1);
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) navigateToPage(currentPage - 1);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        navigateToPage(parseInt(dot.dataset.page));
    });
});

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
});

updateNavigation();
