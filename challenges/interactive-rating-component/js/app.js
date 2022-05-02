const tyStateElem = document.getElementById('thank-you-state');
const ratingStateElem = document.getElementById('rating-state');
const ratingScaleElem = document.getElementById('rating-scale');
const submitRateBtn = document.getElementById('submit-rate-btn');
const selectedChoiceLabel = document.getElementById('selected-choice');

tyStateElem.style.display = 'none';
let selectedRate;

const selectRateHandler = function(rating){
    if(selectedRate != undefined){
        document.getElementById(selectedRate).classList.toggle('selected-rate');
    }
    selectedRate = rating.srcElement.id
    rating.srcElement.classList.toggle('selected-rate');
}

submitRateBtn.addEventListener('click', () => {
    ratingStateElem.style.display = 'none';
    tyStateElem.style.display = 'block';
    selectedChoiceLabel.innerHTML = `You selected ${selectedRate} out of 5`;
});

for (let rating of ratingScaleElem.children){
    rating.addEventListener('click',selectRateHandler)
}