'use strict';
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

class Gallery {
  constructor(array, selector) {
    this.items = array;
    this.parent = document.querySelector(selector);
  }
  createElement(src, alt) {
    const imageElement = `<li><img src="${src}" alt="${alt}"></li>`;
    return imageElement;
  }
  renderGallery(array) {
    const gallery = array
      .map(el => this.createElement(el.url, el.alt))
      .join(''); //прибрали кому при обєднанні масиву
    this.parent.innerHTML = gallery;
  }
  init() {
    console.log(this.items);
    this.renderGallery(this.items);
  }
}
const gallery = new Gallery(images, '.gallery');
gallery.init();
