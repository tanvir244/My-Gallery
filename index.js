

for(const album of albums){
    showGalleryPhoto(album);
}

function showGalleryPhoto(albm) {
    const {img, tag, description} = albm;

    const card = document.createElement('div');
    card.className = 'card relative';

    const image = document.createElement('img');
    image.className = 'h-[251px] w-full'
    image.src = img;

    const intro = document.createElement('div');
    intro.className = 'intro';

    const h3 = document.createElement('h3');
    h3.className = 'text-white text-xl font-semibold';
    h3.innerText = tag;

    const p1 = document.createElement('p');
    p1.className = 'text-white text-xs';
    p1.innerText = description;

    intro.append(h3, p1);

    card.append(image, intro);

    document.querySelector('.gallary-container').append(card);
}

document.querySelector('#search-input').
addEventListener('keyup', function(e) {
    const keyword = e.target.value.toLowerCase();
    const card = document.querySelectorAll('.card');

    let notFound = true;

    for(const element of card){
        const tag = element.children[0].innerText.toLowerCase();
        const description = element.children[1].innerText.toLowerCase();
        if(tag.includes(keyword) || description.includes(keyword)){
            element.style.display = 'block';
            notFound = false;
        }else{
            element.style.display = 'none';
        }

        if(notFound){
            document.querySelector('.not-found').style.display = 'block';
        }else {
            document.querySelector('.not-found').style.display = 'none';
        }

    }
})