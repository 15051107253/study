// 链表 多个元素组成的列表，元素存储不连续，用next指针连在一起

const a = {val: 'a'};
const b = {val: 'b'};
const c = {val: 'c'};
const d = {val: 'd'};
a.next = b;
b.next = c;
c.next = d;

// 反转链表步骤
// 1 p1 = a; p2 = null a -> b -> c -> d
// 2 a.next = null, p2 = a; p1 = b      a -> null
// b.next = a; p2 = b; p1 = c  b -> a -> null
// c.next = b; p2 = c; p1 = d c -> b -> a -> null
// d.next = c; p2 = d; p1 = null; d -> c -> b -> a -> null

// 链表插入值
const e = {val: 'e'};
c.next = e;
e.next = d;

// 链表删除值
c.next = d;

// 遍历链表
let p = a;
while(p) {
  console.log(p.val);
  p = p.next;
}


// leetcode 237题，删除链表中的节点


// Definition for singly-linked list.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


// leetcode 206题，反转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let p1 = head; 
  let p2 = null;
  while(p1) {
    const tmp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = tmp;
  }
  return p2;
};


// leetcode 2题，两数想加

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while(p1 || p2) {
    let c1 = p1 ? p1.val : 0;
    let c2 = p2 ? p2.val : 0;
    let val = c1 + c2 + carry;
    carry = Math.floor(val / 10);
    p3.next = new ListNode(val % 10);

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }
  if (carry) p3.next = new ListNode(carry);
  return l3.next;
};