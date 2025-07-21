document.addEventListener('DOMContentLoaded', function() {
    // Скрипт для изменения меню при скролле
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('small');
        } else {
            header.classList.remove('small');
        }
    });

    // Управление звуком видео
    const video = document.getElementById('myVideo');
    const muteBtn = document.getElementById('muteBtn');
    
    // Проверка поддержки автовоспроизведения
    function handleAutoplay() {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Автовоспроизведение заблокировано');
                video.controls = true;
            });
        }
    }
    
    // Попытка автовоспроизведения с звуком (будет отклонена в большинстве браузеров)
    video.muted = true;
    handleAutoplay();
    
    // Обработчик кнопки звука
    muteBtn.addEventListener('click', function() {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? '🔇' : '🔊';
    });
});