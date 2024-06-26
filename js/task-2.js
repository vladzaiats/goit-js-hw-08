'use strict';
taskNum++;
console.log(`%c Task ${taskNum} `, style);

class Storage {
  #items;
  constructor(value) {
    this.#items = value;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
    return this.#items;
  }
  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    index >= 0 ? this.#items.splice(index, 1) : this.#items;
    return this.#items;
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
