(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeBtn = document.querySelector('.close-btn');
  if (!lightbox || !lightboxImage || !closeBtn) return;

  document.querySelectorAll('.picture img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || 'Expanded image';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
  });
})();
