import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

export function createGallery(images) {
    const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <ul class="image-info">
              <li class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${image.likes}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${image.views}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${image.comments}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${image.downloads}</span>
  </li>
          </ul>
        </li>`;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}
  
export function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
}
  
export function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
}
  