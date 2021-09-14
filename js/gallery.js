const galleryItems = document.getElementsByClassName('challenge');

for(let el of galleryItems){
    const id = el.id;
    el.style.backgroundImage = `url('../images/${id}.jpg')`;
}

