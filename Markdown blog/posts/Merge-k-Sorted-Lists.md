---
title: 'Merge-k-Sorted Lists'
metaTitle: 'Merge-k-Sorted Lists in Javascript'
metaDesc: 'Leetcode solution Merge-k-Sorted Lists in javascript'
socialImage: images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - Leetcode
  - Markdown
  - javascript
---

## You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

### Merge all the linked-lists into one sorted linked-list and return it.


__Example 1:__
```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

__Example 2:__
```
Input: lists = []
Output: []
```

__Example 3:__
```
Input: lists = [[]]
Output: []
``` 

__Constraints:__

* `k == lists.length`
* `0 <= k <= 104`
* `0 <= lists[i].length <= 500`
* `-104 <= lists[i][j] <= 104`
* lists`[i]` is sorted in ascending order.
* The `sum` of lists`[i]`.length will not exceed `104`.

__Solution:__

```pwsh
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 const mergeKLists = function(lists) {
    
    var head = new ListNode(null);
    var lsize = lists.length;
    
    if (lsize === 0) {
        return head.next;
    }
    if (lsize == 1) {
        return lists[0];
    }
    let current = head.next;
    for(let i = 0; i < lsize; i++) {
        current = mergeList(current,lists[i]);
    }
    return current;
};

var sortList = function(head) {
    
    if (head === null || head.next === null) {
        return head;
    }
    
    let prev = null;
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    
    prev.next = null;
    
    const l1 = sortList(head);
    const l2 = sortList(slow);
    
    return mergeList(l1, l2);
}

let mergeList = function(list1, list2) {
    
    var head = new ListNode(null);
    var current = head;
    
    while (list1 !== null && list2 !== null) {

        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        
        current = current.next;
    }
    
    current.next = (list1 === null) ? list2 : list1;
    
    return head.next;
}
```