const advRerollBtn = document.getElementById('advice-button');

advRerollBtn.addEventListener('click',() => {
   rerollAdvice();
});

const rerollAdvice = function() {
    fetch('https://api.adviceslip.com/advice',{cache: "no-store"})
    .then((response) => response.json())
    .then(data => {
        document.getElementById('advice-title').innerHTML = `Advice #${data.slip.id}`;
        document.getElementById('advice-body').innerHTML = `“${data.slip.advice}”`;
        document.getElementById('main-component').style.display = 'block';
    });
}

window.onload = function() {
    rerollAdvice()
};
