const btnBox = document.querySelector(".main-box");
let isOpen = null;

btnBox.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" || e.target.tagName === "H3") {
    const parentItem = e.target.closest(".inner-box");
    if (!parentItem) return; // Ensure parentItem exists
    const innerParagraph = parentItem.querySelector(".paragraph");
    if (!innerParagraph) return; // Ensure innerParagraph exists

    const image = parentItem.querySelector("img.icon-push"); // Get the IMG element
    if (!image) return; // Ensure image exists

    console.log(image.getAttribute('src'));

    if (isOpen && isOpen !== innerParagraph) {
      isOpen.classList.add("hidden");
      const openImage = isOpen.closest(".inner-box").querySelector("img.icon-push");
      if (openImage) {
        openImage.setAttribute('src', 'assets/images/icon-plus.svg');
      }
    }

    innerParagraph.classList.toggle("hidden");
    isOpen = innerParagraph.classList.contains("hidden") ? null : innerParagraph;

    if (innerParagraph.classList.contains("hidden")) {
      image.setAttribute('src', 'assets/images/icon-plus.svg');
    } else {
      image.setAttribute('src', 'assets/images/icon-minus.svg');
    }
  }
});
