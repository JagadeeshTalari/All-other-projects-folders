const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec3 = document.getElementById("sec3");
const sec4 = document.getElementById("sec4");
const sec5 = document.getElementById("sec5");
const items = document.getElementsByClassName("item");
items[0].classList.add("SideBarActive");

window.addEventListener("scroll", () => {
  console.log(sec1.offsetTop);
  console.log(sec2.offsetTop);
  console.log(sec3.offsetTop - 500);
  console.log(window.scrollY);
  if (window.scrollY < sec2.offsetTop + 300) {
    // reset the scroll position to the top left of the document.
    items[1].classList.remove("SideBarActive");
    items[0].classList.add("SideBarActive");
    items[3].classList.remove("SideBarActive");
  } else if (window.scrollY < sec3.offsetTop) {
    items[0].classList.remove("SideBarActive");
    items[2].classList.remove("SideBarActive");
    items[1].classList.add("SideBarActive");
    items[3].classList.remove("SideBarActive");
  } else if (window.scrollY < sec4.offsetTop) {
    // console.log("why not", items);
    items[0].classList.remove("SideBarActive");
    items[1].classList.remove("SideBarActive");
    items[2].classList.add("SideBarActive");
    items[3].classList.remove("SideBarActive");
  } else if (window.scrollY < sec5.offsetTop) {
    // console.log("why not", items);
    items[0].classList.remove("SideBarActive");
    items[1].classList.remove("SideBarActive");
    items[2].classList.remove("SideBarActive");
    items[3].classList.add("SideBarActive");
  }
});

// window.scrollByPages(1);
