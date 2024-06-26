'use strict';
class Form {
  form;
  elements;
  keys;
  constructor(selector) {
    this.form = document.querySelector(selector);
    this.elements = this.form.elements;
    this.keys = Object.keys(this.form.elements).filter(key => isNaN(key));
  }
  collectInputsValue(key) {
    return this.elements[key].value;
  }
  init() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const obj = {};
      let hasEmptyField = false;
      this.keys.forEach(key => {
        const value = this.collectInputsValue(key);
        obj[key] = value;
        if (!value) {
          hasEmptyField = true;
        }
      });

      if (hasEmptyField) {
        alert('All form fields must be filled in');
      } else {
        console.log(obj);
        this.form.reset();
      }
    });
  }
}
const form = new Form('.login-form');

form.init();
