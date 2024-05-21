const btnBox = document.querySelector(".main-box");
let isOpen = null;

btnBox.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" || e.target.tagName === "H3") {
    const parentItem = e.target.closest(".inner-box");
    const innerParagraph = parentItem.querySelector(".paragraph");

    if (isOpen && isOpen !== innerParagraph) {
      isOpen.classList.add("hidden");
    }
    innerParagraph.classList.toggle("hidden");
    isOpen = innerParagraph.classList.contains("hidden")
      ? null
      : innerParagraph;
  }
});


