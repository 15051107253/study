// 队列 先进先出的数据结构
// js中使用Array即可实现栈的所有操作

const queue = [];

// 入队
queue.push(1);
queue.push(2);

// 出队
const item1 = queue.shift();
const item2 = queue.shift();

// 封装一个队列，提供push、pop、peek方法

class Queue {
  dataSource = [];
  push(item) {
    this.dataSource[this.dataSource.length] = item;
    return this.dataSource.length;
  }
  shift() {
    if (!this.queue.length) return void 0;
    let item = this.dataSource[0];
    let i = 1;
    while(i < this.dataSource.length) {
      this.dataSource[i - 1] = this.dataSource[i];
      i ++;
    }
    this.dataSource.length -= 1;
    return item;
  }
  peek() {
    return this.dataSource[0];
  }
}


// leetcode 933题，最近的请求次数

var RecentCounter = function() {
  this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t || 0);
  while(this.queue[0] < (t - 3000)) {
    this.queue.shift();
  }
  return this.queue.length;
};