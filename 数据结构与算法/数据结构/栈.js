// 栈的特点：后进先出的数据结构
// js中使用Array即可实现栈的所有操作

const stack = [];

// 入栈
stack.push(1);
stack.push(2);

// 出栈
const item1 = stack.pop();
const item2 = stack.pop();

// 封装一个栈，提供push、pop、peek方法
class Stack {
  dataSource = [];
  push(item) {
    this.dataSource[this.dataSource.length] = item;
    return this.dataSource.length;
  }
  pop() {
    const item = this.dataSource[this.dataSource.length - 1];
    this.dataSource.length -= 1;
    return item;
  }
  peek() {
    return this.dataSource[0];
  }
}

// 十进制转换成二进制
function transform(num) {
  const stack = [];
  let str = '';
  while (num > 0) {
    if (num % 2 === 0) {
      stack.push(0);
    }else {
      stack.push(1);
    }
    num = Math.floor(num / 2);
  }
  while(stack.length) {
    str += stack.pop();
  }
  return str || '0';
}

// leetcode 20题，有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    }else {
      const t = stack[stack.length - 1];
      if (t === '(' && c === ')' || t === '[' && c === ']' || t === '{' && c === '}') {
        stack.pop()
      }else {
        return false;
      }
    }
  }
  return stack.length === 0;
};


// leetcode 144题，二叉树的前序遍历