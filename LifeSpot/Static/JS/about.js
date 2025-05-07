// Функция-конструктор для создания комментариев
function Comment(name, text) {
    this.name = name;
    this.text = text;
    this.date = new Date();
    this.likes = 0; // Добавляем счетчик лайков

    // Метод для публикации комментария
    this.publish = function () {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <h4>${this.name}</h4>
            <p>${this.text}</p>
            <div class="review-actions">
                <button class="like-btn" onclick="handleLikeClick(this)">❤️ <span class="like-count">${this.likes}</span></button>
            </div>
            <span class="review-date">${this.date.toLocaleString()}</span>
        `;

        document.querySelector('.reviews').insertBefore(
            reviewElement,
            document.querySelector('.review-button')
        );
    };
}

// Функция для обработки лайков
function handleLikeClick(button) {
    const likeCountElement = button.querySelector('.like-count');
    let currentLikes = parseInt(likeCountElement.textContent);
    currentLikes++;
    likeCountElement.textContent = currentLikes;
}

function handleReviewButtonClick() {
    const userName = prompt("Пожалуйста, введите ваше имя:");
    if (!userName) return;

    const reviewText = prompt("Напишите ваш отзыв:");
    if (!reviewText) return;

    // Создаем новый комментарий через конструктор
    const comment = new Comment(userName, reviewText);

    // Спрашиваем, хочет ли пользователь добавить рейтинг
    const wantsRating = confirm("Хотите ли вы, чтобы ваш отзыв могли оценить другие пользователи?");

    if (wantsRating) {
        // Создаем отзыв с рейтингом на основе комментария
        const reviewWithRating = Object.create(comment);
        reviewWithRating.rate = 0; // Начальный рейтинг 0

        // Переопределяем метод publish для отзыва с рейтингом
        reviewWithRating.publish = function () {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.innerHTML = `
                <h4>${this.name}</h4>
                <p>${this.text}</p>
                <div class="review-actions">
                    <button class="like-btn" onclick="handleLikeClick(this)">❤️ <span class="like-count">${this.likes}</span></button>
                    <div class="review-rating">Рейтинг: ${this.rate}/5</div>
                </div>
                <span class="review-date">${this.date.toLocaleString()}</span>
            `;

            document.querySelector('.reviews').insertBefore(
                reviewElement,
                document.querySelector('.review-button')
            );
        };

        // Публикуем отзыв с рейтингом
        reviewWithRating.publish();
    } else {
        // Публикуем обычный комментарий
        comment.publish();
    }
}