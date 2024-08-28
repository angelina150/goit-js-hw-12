export const createGalleryCardTemplate = imgInfo => {
  return `<li class="gallery-card">
      <a href="${imgInfo.largeImageURL}" class="gallery-link">
            <img src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" class="gallery-img" loading="lazy">
        </a>
      <ul class="info">
            <li class="info-item">
                <p class="info-item-desc">Likes</p>${imgInfo.likes}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Views</p>${imgInfo.views}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Comments</p>${imgInfo.comments}
            </li>
            <li class="info-item">
                <p class="info-item-desc">Downloads</p>${imgInfo.downloads}
            </li>
        </ul>
    </li>`;
};
