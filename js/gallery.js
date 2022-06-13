const challenges = [
    {id: "3-column-preview-card",name: "3 Column Preveiw Card"},
    {id: "advice-generator-app",name: "Advice Generator App"},
    {id: "faq-accordion-card",name: "Faq Accordion Card"},
    {id: "interactive-rating-component",name: "Interactive Rating Component"},
    {id: "job-listings",name: "Job Listing"},
    {id: "nft-preview-card-component",name: "NFT Preview Card"},
    {id: "order-summary",name: "Order Summary"},
    {id: "stats-preview-card",name: "Stats preview card"},
    {id: "url-shortening-api-master",name: "Url Shortening Api"},
    {id: "qr-code-component",name: "QR Code Component"}
]


const createChallengeElement = function(id,name){
    return `
    <div class="challenge">
        <img src="../images/${id}.jpg">
        <div class="metadata">
            <h4>${name}</h4>
            <a href="challenges/${id}" target="_blank">
                <button class="btn btn-red"><i class="fa-solid fa-eye"></i> Demo</button>
            </a>
            <a href="https://github.com/AlessioMaddaluno/frontendmentor-challenges/tree/main/challenges/${id}" target="_blank">
                <button class="btn btn-dark"><i class="fa-solid fa-code"></i> Code</button>
            </a>
        </div> 
    </div>
    `
    
}




for (let challenge of challenges){
    document.getElementById('challenges-gallery').innerHTML += createChallengeElement(challenge.id,challenge.name);
}
