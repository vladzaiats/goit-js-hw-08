'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
class Boxes {
  errorEl = `<div class="js-error-msg">Enter value between 1 and 100!</div>`;
  constructor(controls, selector) {
    this.parent = document.querySelector(controls);
    this.controls = {
      input: this.parent.querySelector('input'),
      create: this.parent.querySelector('[data-create]'),
      destroy: this.parent.querySelector('[data-destroy]'),
    };
    this.container = document.querySelector(selector);
  }
  createBoxes(amount) {
    let collection = '';
    let sizeStart = 30;
    for (let i = 0; i < amount; i++) {
      collection += `<div style="width:${sizeStart}px;height:${sizeStart}px;background-color:${getRandomHexColor()};"></div>`;
      sizeStart += 10;
    }
    // this.container.innerHTML = collection;
    this.renderBoxes(collection);
  }
  destroyBoxes() {
    this.container.innerHTML = '';
  }
  renderBoxes(html) {
    this.container.innerHTML = html;
  }
  init() {
    this.controls.create.addEventListener('click', () => {
      let value = parseInt(this.controls.input.value, 10);
      if (value && 0 < value && value <= 100) {
        this.createBoxes(value);
        this.parent.classList.remove('error');
      } else {
        this.parent.classList.add('error');
        this.parent.insertAdjacentHTML('beforeend', this.errorEl);
      }
    });
    this.controls.destroy.addEventListener('click', () => this.destroyBoxes());
  }
}
const boxes = new Boxes('#controls', '#boxes');
boxes.init();
