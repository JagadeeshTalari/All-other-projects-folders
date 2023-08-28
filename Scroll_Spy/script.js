const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const items = document.getElementsByClassName("item");
items[0].classList.add("hey");

window.addEventListener("scroll", () => {
  console.log(sec1.offsetTop);
  console.log(sec2.offsetTop);
  console.log(sec3.offsetTop - 500);
  console.log(window.scrollY);
  if (window.scrollY <= sec1.offsetTop) {
    // reset the scroll position to the top left of the document.
    items[1].classList.remove("hey");
    items[0].classList.add("hey");
  } else if (
    window.scrollY > sec1.offsetTop &&
    window.scrollY <= sec3.offsetTop - 500
  ) {
    items[0].classList.remove("hey");
    items[2].classList.remove("hey");
    items[1].classList.add("hey");
  } else if (window.scrollY > sec2.offsetTop) {
    // console.log("why not", items);
    items[0].classList.remove("hey");
    items[1].classList.remove("hey");
    items[2].classList.add("hey");
  }
});

// window.scrollByPages(1);
