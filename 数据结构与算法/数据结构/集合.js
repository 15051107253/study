// 集合 无序的且唯一的数据结构
// js中 Set 就是集合

// 去重
const arr = [1,1,3,4,5,5,5,8,9,9,10];
const arr2 = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1); // true

// 求交集
const set2 = new Set([2,5,9]);
const set3 = new Set([...set2].filter(item => set.has(item)));
console.log(set3);



// leetcode 349题 2个数组的交集

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  return [...set2].filter(item => set1.has(item));
};