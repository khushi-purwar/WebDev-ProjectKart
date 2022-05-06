---
title: 'Roman to Integer'
metaTitle: 'Roman to Integer in Javascript'
metaDesc: 'Leetcode solution Roman to Integer in javascript'
socialImage: images/leetcode-grinding-guide.jpg
date: '2021-12-11'
tags:
  - Leetcode
  - Markdown
  - javascript
---

## Roman numerals are represented by seven different symbols: `I, V, X, L, C, D` and `M`.

```
Symbol      Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as XII, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

* `I` can be placed before `V (5) and X (10)` to make `4` and `9`. 
* `X` can be placed before `L (50) and C (100)` to make `40` and `90`. 
* `C` can be placed before `D (500) and M (1000)` to make `400` and `900`.

Given a roman numeral, convert it to an integer.

 
__Example 1:__
```
Input: s = "III"
Output: 3
Explanation: III = 3.
```

__Example 2:__
```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

__Example 3:__
```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

__Constraints:__

* `1 <= s.length <= 15`
* s contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
* It is guaranteed that s is a valid roman numeral in the range `[1, 3999]`.

__Solution:__

```pwsh
/**
 * @param {string} s
 * @return {number}
 */
 const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

 const romanToInt = function(S) {

     var ans = 0

     for (var i = S.length-1; ~i; i--) {
         var num = roman[S.charAt(i)]
         if (4 * num < ans) ans -= num
         else ans += num
     }
     
     return ans
 };
```