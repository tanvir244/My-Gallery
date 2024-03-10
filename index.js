console.log(albums)

function showGalleryPhoto() {
    const card = document.createElement('div');
    card.className = 'card relative';

    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1678729466198-a34ccca023c3';

    const intro = document.createElement('div');
    intro.className = 'intro';

    const p = document.createElement('p');
    p.className = 'text-white font-semibold';
    p.innerText = 'Tag';
    intro.appendChild(p);

    card.append(img, intro);

    document.querySelector('.gallary-container').append(card);
}
showGalleryPhoto();
