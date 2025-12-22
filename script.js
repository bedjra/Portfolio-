let currentPage = 1;
const totalPages = 5;

const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.page-dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateNavigation() {
    // boutons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // dots
    dots.forEach(dot => {
        dot.classList.toggle(
            'active',
            Number(dot.dataset.page) === currentPage
        );
    });
}

function updatePages() {
    pages.forEach((page, index) => {
        // index + 1 = numéro de la page
        if (index + 1 < currentPage) {
            page.classList.add('flipped');
        } else {
            page.classList.remove('flipped');
        }
    });
}

function navigateToPage(page) {
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    updatePages();
    updateNavigation();
}

// boutons
nextBtn.addEventListener('click', () => {
    navigateToPage(currentPage + 1);
});

prevBtn.addEventListener('click', () => {
    navigateToPage(currentPage - 1);
});

// dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        navigateToPage(Number(dot.dataset.page));
    });
});

// clavier
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') navigateToPage(currentPage - 1);
    if (e.key === 'ArrowRight') navigateToPage(currentPage + 1);
});

// init
updatePages();
updateNavigation();
