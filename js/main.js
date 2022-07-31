
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 80)
});

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');
console.log(faqs);

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon span');
        if(icon.innerText === 'add') {
            icon.innerText = 'remove';
        } else {
            icon.innerText = 'add';
        }
    });
});