document.addEventListener("DOMContentLoaded", function() {
    const portfolioSection = document.querySelector('.portfolio');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            console.log(entry); 
            if (entry.isIntersecting) {
                console.log("Element is in view");
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }

    // Создаем наблюдатель
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 
    });

    observer.observe(portfolioSection);

    if (portfolioSection.getBoundingClientRect().top < window.innerHeight) {
        portfolioSection.classList.add('visible');
    }
});
