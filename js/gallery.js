const challenges = [
    {id: "3-column-preview-card",name: "3 Column Preveiw Card"},
    {id: "advice-generator-app",name: "Advice Generator App"},
    {id: "faq-accordion-card",name: "Faq Accordion Card"},
    {id: "interactive-rating-component",name: "Interactive Rating Component"},
    {id: "job-listings",name: "Job Listing"},
    {id: "nft-preview-card-component",name: "NFT Preview Card"},
    {id: "order-summary",name: "Order Summary"},
    {id: "stats-preview-card",name: "Stats preview card"},
    {id: "url-shortening-api-master",name: "Url Shortening Api"}
]


const createChallengeElement = function(id,name){
    return `<div class="challenge" id="interactive-rating-component" style="background-image: url('../images/${id}.jpg') ">
    <span>${name}</span>
    <div class="btns">
        <a href="https://github.com/AlessioMaddaluno/frontendmentor-challenges/tree/main/challenges/${id}" target="_blank">
            <button class="btn btn-source">
                <i class="fas fa-code fa-2x"></i>
            </button>
        </a>
        <a href="challenges/${id}" target="_blank">
            <button class="btn btn-demo">
                <i class="far fa-eye fa-2x"></i>
            </button>
        </a>
    </div>
    </div>`
}

for (let challenge of challenges){
    document.getElementById('challenges-gallery').innerHTML += createChallengeElement(challenge.id,challenge.name);
}
