// 栈的特点：后进先出的数据结构
// js中使用Array即可实现栈的所有操作

const stack = [];

// 入栈
stack.push(1);
stack.push(2);

// 出栈
const item1 = stack.pop();
const item2 = stack.pop();


// leetcode 20题，有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (const item of s) {
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item);
    }else if (item === ')' || item === ']' || item === '}') {
      const n = stack.pop();
      const s = item === ')' ? '(' : item === ']' ? '[' : '{';
      if (!n || n !== s) {
        return false;
      }
    }
  }
  return !stack.length;
};