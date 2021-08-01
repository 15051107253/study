// 字典 存储唯一值的数据结构，以键值对的形式存储
// js 中 Map 就是字典

const map = new Map();
// 增
map.set('a', 'a');
map.set('b', 'b');
// 删
map.delete('a');
// 删除所有
map.clear();
// 改
map.set('b', 'bb');
// 查
map.get('b');


// leetcode 349题 2个数组的交集

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = new Map();
  nums1.forEach(item => map.set(item, true));
  const res = [];
  nums2.forEach(item => {
    if (map.get(item)) {
      res.push(item);
      map.delete(item);
    }
  })
  return res;
};


// leetcode 20题 有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) return false;
  const stack = [];
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  for (const c of s) {
    if (map.has(c)) {
      stack.push(c);
    }else {
      const t = stack[stack.length - 1];
      if (c === map.get(t)) {
        stack.pop()
      }else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// leetcode 1题 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];
    const n2 = target - n1;
    if (map.has(n2)) {
      return [map.get(n2), i];
    }else {
      map.set(n1, i);
    }
  }
};


// leetcode 3题 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let res = 0;
  const map = new Map();
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r])  >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }
  return res;
};

// leetcode 76题 最小覆盖子串

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let l = 0;
  let r = 0;
  const map = new Map();
  for (const c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  let type = map.size;
  let res = '';
  while (r < s.length) {
    let c = s[r];
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) type --;
    }
    while (type === 0) {
      const newRes = s.substring(l, r + 1);
      // console.log(newRes);
      if (!res || newRes.length < res.length) res = newRes;
      const c2 = s[l];
      if (map.has(c2)) {
        map.set(c2, map.get(c2) + 1);
        if (map.get(c2) === 1) type ++;
      }
      l ++;
    }
    r ++;

  }
  return res;
};