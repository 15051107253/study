// 树 一种分层数据的抽象模型，如：级联选择、树形控件、DOM树、菜单树等
// js 可以通过 Object 和 Array 构建树

// 树的常用操作
// 1、深度、广度优先遍历
// 2、先中后序遍历 (二叉树)


const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}

// 深度优先
function dfs(root) {
  console.log(root.val);
  root.children.forEach(dfs);
}

dfs(tree);

// 广度优先
function bfs(root) {
  const queue = [root];
  while(queue.length > 0) {
    const n = queue.shift();
    console.log(n.val);
    n.children.forEach(child => queue.push(child));
  }
}

bfs(tree);

// 二叉数
const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log('-----------先序遍历-------------');

// 先序遍历
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

preorder(bt);

console.log('-----------中序遍历-------------');

 // 中序遍历
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

inorder(bt);

console.log('-----------后序遍历-------------');

 // 中序遍历
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

postorder(bt);



// 非递归版先中后序遍历

console.log('-----------非递归版先序遍历-------------');

// 先序遍历
function preorderNot(root) {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
}

preorderNot(bt);

console.log('-----------非递归版中序遍历-------------');

// 中序遍历
function inorderNot(root) {
  if (!root) return;
  const stack = [];
  let p = root;
  while(stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
}

inorderNot(bt);

console.log('-----------非递归版后序遍历-------------');

// 后序遍历
function postderNot(root) {
  if (!root) return;
  const stack = [root];
  const outputStack = [];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while(outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
}

postderNot(bt);

// leetcode 104题 二叉树的最大深度

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let level = 0;
  const dfs = (n, l) => {
    if (!n) return;
    if (!n.left && !n.right) {
      level = Math.max(level, l);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  }
  dfs(root, 1);
  return level;
};


// leetcode 111题 二叉树的最小深度

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
   if (!root) return 0;
  const queue = [[root, 1]];
  while(queue.length) {
    const [n, l] = queue.shift();
    if (!n.left && !n.right) {
      return l;
    }
    if (n.left) queue.push([n.left, l + 1]);
    if (n.right) queue.push([n.right, l + 1]);
  }
};