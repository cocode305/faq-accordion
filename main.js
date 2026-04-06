const faqList = document.querySelector(".faq-list");


faqList.addEventListener('click', (e) => {
    const question = e.target.closest('.question');
    if (!question) return;

    const faqItem = question.closest('.faq-item');
    const faqIcon = faqItem.querySelector('img');

   faqItem.classList.toggle('active');

    if (faqItem.classList.contains('active')) {
        faqIcon.src = "assets/images/icon-minus.svg";
    } else {
        faqIcon.src = "assets/images/icon-plus.svg";
    }
});
