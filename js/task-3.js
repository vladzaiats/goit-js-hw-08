'use strict';
taskNum++;
console.log(`%c Task ${taskNum} `, style);

const profile = {
  username: 'Jacob',
  playTime: 300,
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
  changeUsername(name) {
    if (typeof name !== 'string')
      throw new Error(`Provide valid name! Not ${typeof name}`);
    this.username = name;
  },
  updatePlayTime(minutes) {
    if (typeof minutes !== 'number')
      throw new Error(`Provide valid time in minutes! Not ${typeof minutes}`);
    this.playTime += minutes;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
