const root = document.documentElement;
const imagesDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")
const carousel_list = document.querySelector('ul.carousel_list');

root.style.setProperty("--marquee-elements", carousel_list.children.length);

for(let i = 0; i < imagesDisplayed; i++){
  carousel_list.appendChild(carousel_list.children[i].cloneNode(true));
}