function updateCarousel() {
  const containerWidth = carouselContainer.offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentIndex);
  });

  const titles = [
    "Oggau – 5,53kWp",
    "Pfaffstätten – 6,1kWp",
    "Sooss – 4,7kWp",
    "Steinbrunn – 6,9kWp",
    "Wien 1032 – 3,9kWp",
    "Wien 1032 – 3,9kWp",
    "Wien 502 – 5,1kWp",
    "Wiesfleck – 6,3kWp"
  ];

  const titleElement = document.getElementById('carouselTitle');
  const paginationElement = document.getElementById('carouselPagination');

  if (titleElement) titleElement.textContent = titles[currentIndex] || "";
  if (paginationElement) paginationElement.textContent = `${currentIndex + 1} / ${images.length}`;
}
