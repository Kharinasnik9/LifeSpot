
function handleReviewButtonClick() {
    const userName = prompt("Пожалуйста, введите ваше имя:");
    if (!userName) return;

    const reviewText = prompt("Напишите ваш отзыв:");
    if (!reviewText) return;

    addReviewToPage(userName, reviewText);
}

const addReviewToPage = (name, text) => {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    reviewElement.innerHTML = `
        <h4>${name}</h4>
        <p>${text}</p>
        <span class="review-date">${new Date().toLocaleString()}</span>
    `;

    document.querySelector('.reviews').insertBefore(reviewElement, document.querySelector('.review-button'));
};

function handleReviewButtonClick() {
    const userName = prompt("Ваше имя:");
    if (!userName) return;

    const reviewText = prompt("Ваш отзыв:");
    if (!reviewText) return;

    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    reviewElement.innerHTML = `
                    <h4>${userName}</h4>
                    <p>${reviewText}</p>
                    <span>${new Date().toLocaleString()}</span>
                `;

    document.querySelector('.reviews').insertBefore(reviewElement,
        document.querySelector('.review-button'));
}