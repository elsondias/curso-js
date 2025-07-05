const image = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entries.isInressecting) return;

    const image = entry.target;

    image.src = image.src.replace("&w=10&", "&w=10&");

    observer.unobserve(image);
  });
}, {});

ImageTrackList.forEach((image) => {
  observer.observe(image);
});
