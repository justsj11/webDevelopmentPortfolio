// Lightbox Picture Toggle
// Purpose: Enable user to open and close larger product image
(function lightboxControlInit() {
  // select all products
  let products = document.querySelectorAll("[data-product]");

  // add event listeners to all the products
  products.forEach((product) =>
    product.addEventListener("click", lightboxControl)
  );

  // controls lightbox visibility
  function lightboxControl(e) {
    // gets the clicked product image's data-product key
    let imageID = e.target.dataset.product;

    // selects the lightbox with the corresponding ID
    let targetLightbox = document.querySelector(`#${imageID}`);

    // removes 'invisible' and adds 'opacity-100' = lightbox transitions in
    targetLightbox.classList.toggle("invisible");
    targetLightbox.classList.toggle("opacity-100");

    // event when lightbox is clicked = hides lightbox
    function hideLightbox() {
      // hides lightbox and removes event listener
      targetLightbox.classList.toggle("invisible");
      targetLightbox.classList.toggle("opacity-100");
      targetLightbox.removeEventListener("click", hideLightbox);
    }

    // add lightbox hide event listener
    targetLightbox.addEventListener("click", hideLightbox);
  }
})();
