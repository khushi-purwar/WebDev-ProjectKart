---
title: 'Simple Number'
metaTitle: 'Simple number in Javascript'
metaDesc: 'Leetcode solution single number in javascript'
socialImage: images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - Leetcode
  - Markdown
  - javascript
---

Given a reference of a node in a [connected](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph) Given a __non-empty__ array of integers `nums`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 
__Example 1:__
```
Input: nums = [2,2,1]
Output: 1
```

__Example 2:__
```
Input: nums = [4,1,2,1,2]
Output: 4
```

__Example 3:__
```
Input: nums = [1]
Output: 1
``` 

__Constraints:__

* `1 <= nums.length <= 3 * 104`
* `-3 * 104 <= nums[i] <= 3 * 104`
* Each element in the array appears twice except for one element which appears only once.

__Solution:__


```bash
* @param {number[]} nums
 * @return {number}
 */

const singleNumber = function(nums) {
    let single;
    for (let i = 0, l = nums.length; i < l; i++) {
        single ^= nums[i];
    }
    return single;
}
```