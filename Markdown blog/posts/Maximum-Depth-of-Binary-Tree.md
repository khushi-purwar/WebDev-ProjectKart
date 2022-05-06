---
title: 'Maximum Depth of Binary Tree'
metaTitle: 'Maximum Depth of Binary Tree in Javascript'
metaDesc: 'Leetcode solution Maximum Depth of Binary Tree in javascript'
socialImage: images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - Leetcode
  - Markdown
  - javascript
---

Given the `root` of a binary tree, return *its maximum depth*.

A binary tree's __maximum depth__ is the number of nodes along the longest path from the root node down to the farthest leaf node.

 
__Example 1:__

<img src="https://raw.githubusercontent.com/gurjeetsinghvirdee/leetcode-solution-in-js/master/src/Asset/tmp-tree.jpg" width="400" height="220">

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

__Example 2:__
```
Input: root = [1,null,2]
Output: 2
``` 

__Constraints:__

* The number of nodes in the tree is in the range `[0, 104]`.
* `-100 <= Node.val <= 100`

__Solution:__

```javascript

//  Definition for a binary tree node.
//  function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//       this.right = (right===undefined ? null : right)
// } 

/**
 * @param {TreeNode} root
 * @return {number}
 */

 var maxDepth = function(root) {
    return helper(root, 0);
  };
  
  var helper = function (root, level) {
    if (!root) return level;
    
    return Math.max(helper(root.left, level + 1), helper(root.right, level + 1));
```