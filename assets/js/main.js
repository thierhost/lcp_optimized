/*(async function load() {
    const imageDatas = await fetch('assets/lazy-images.json')
    const images = await imageDatas.json();
    const imageHeroDiv = document.getElementById('image-hero');
    const imageGalleryDiv = document.getElementById('images-gallery');
    for(let i = 0 ; i < images.length; i++) {
        let imageElement = document.createElement('img');
        imageElement.src = images[i].url;
        imageElement.alt = images[i].alt;
        if(images[i].type && images[i].type === 'hero'){
            imageElement.classList.add('hero')
            imageHeroDiv.appendChild(imageElement);
        }else {
            imageElement.classList.add('images-gallery')
            imageGalleryDiv.appendChild(imageElement);
        }
    }
})();
*/
