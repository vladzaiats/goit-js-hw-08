'use strict';
// import * as basicLightbox from "basicLightbox";
import list from './images.js';
// const images = require("./images.js");
// import {addEventListener as adlist} from "./images.js";

class Gallery {
  constructor(array, selector) {
    this.items = array;
    this.parent = document.querySelector(selector);
  }
  createElement(src, full, alt) {
    const imageElement = `<li class="gallery-item"><a class="gallery-link" href="${full}"><img class="gallery-image" src="${src}"data-source="${full}"alt="${alt}"/></a></li>`;
    return imageElement;
  }
  renderGallery(array) {
    const gallery = array
      .map(({ preview, original, description }) =>
        this.createElement(preview, original, description),
      )
      .join(''); //прибрали кому при обєднанні масиву
    this.parent.innerHTML = gallery;
  }
  openModal(elem) {
    const instance = basicLightbox.create(
      `<div class="modal"><img src="${elem.dataset.source}"/></div>`,
    );
    instance.show();
  }
  init() {
    this.parent.addEventListener('click', e => {
      e.preventDefault();
      if (e.target === e.currentTarget) return;
      this.openModal(e.target);
    });
    this.renderGallery(this.items);
  }
}
const gallery = new Gallery(list, '.gallery');
gallery.init();
