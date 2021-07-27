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