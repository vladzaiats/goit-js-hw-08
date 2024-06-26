'use strict';
class Categories {
  list = document.querySelector('#categories');
  totalCount = this.list.childElementCount;
  itemsArray = Array.from(this.list.children);

  getCategoryName(item) {
    const catName = item.querySelector('h2').innerText;
    const categoryNameMsg = `Category: ${catName}`;
    return categoryNameMsg;
  }
  getCategoryItemsCount(item) {
    const itemList = item.querySelector('ul');
    const totalChildCount = itemList.childElementCount;
    const childsTotalMsg = `Elements: ${totalChildCount}`;
    return childsTotalMsg;
  }
  messageToConsoleLog() {
    const categoryTotalMsg = `Number of categories: ${this.totalCount}`;
    console.log(categoryTotalMsg);
    this.itemsArray.forEach(item => {
      console.log(this.getCategoryName(item));
      console.log(this.getCategoryItemsCount(item));
    });
  }
}
const categories = new Categories();
categories.messageToConsoleLog();
