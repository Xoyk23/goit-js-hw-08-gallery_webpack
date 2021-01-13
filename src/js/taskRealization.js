import galleryImg from './gallery-items';
// импортируем галлерею

const refs = {
  gallery: document.querySelector('.js-gallery'),
};

refs.gallery.insertAdjacentHTML(
  'beforeend',
  galleryImg
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
     <img class="gallery__image"
      src="${preview}"
      title="${description}">
    </a>`,
    )
    .join(''),
);

lightGallery(document.getElementById('lightgallery'), {
  mode: 'lg-lollipop',
  hideControlOnEnd: false,
  getCaptionFromTitleOrAlt: false,
  preload: 2,
  download: false,
  currentPagerPosition: 'right',
  thumbWidth: 100,
});
