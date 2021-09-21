const urlInput = document.getElementById('urlInput');
const urlInputBtn = document.getElementById('urlInputBtn');
const urlContainer = document.getElementById('urls');
const errorMessage = document.getElementById('error');



urlInputBtn.addEventListener('click',()=>{

    let url = `https://api.shrtco.de/v2/shorten?url=${urlInput.value}`;

    fetch(url)
        .then(res => res.json())
        .then((res) => {
            if(res.ok){
                urlInput.style.border = 'none';
                const shortUrl = `https://${res.result.short_link3}`;
                urlContainer.innerHTML += buildLinkComponent(urlInput.value,shortUrl);
            }
            else {
                urlInput.style.border = '1px solid red';
                errorMessage.innerHTML = res.error;
            }
        })

})


function buildLinkComponent(url,shortUrl){

    return `<div class="url-shortned-container">
        <div class="url"> <a href="${url}">${url}</a> </div>
            <hr>
            <div class="url-short"><a href="${shortUrl}">${shortUrl}</a></div>
              <div class="actions">
                <button class="btn btn-primary" onClick="copyToClipboard(this)">Copy</button>
              </div>
     </div>`

}

function copyToClipboard(el) {

    const shortLink = el.parentElement.parentElement.querySelector('.url-short').firstChild.href;
    window.navigator.clipboard.writeText(shortLink).then(() => {
        el.innerHTML = 'Copied!'
        el.classList.remove('btn-primary');
        el.classList.add('btn-dark');
    })
    
}