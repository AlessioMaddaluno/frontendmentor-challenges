const accordionBtns = document.getElementsByClassName('accordion-header');

for(let btn of accordionBtns){
    btn.addEventListener('click',(e) => {
        btn.parentElement.classList.toggle('active');
    })
}