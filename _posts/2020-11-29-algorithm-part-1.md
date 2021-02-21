---
layout: single
title:  "Intro to data structure and algorithm Part I"
header:
  teaser: /assets/images/thumbnails/logo-data-structures-algorithms.png
excerpt: "DFS and backtracking "
date:   2021-01-20
category: algo
tags: [algorithm, data structure, dfs, bfs, graph]
comments: true
sidebar:
  nav: "docs"
---

_Today we are going to talk about Depth-first Search and backtracking. This is Part I of the intro to data structure and algo series. See others here._
{: .notice--primary}
&nbsp;
&nbsp;


 Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts from the root node (if it's a graph, you can select an arbitrary node) and goes along each branch as deep as possible before backtracking. Also we need to ensure that all the notes are marked as visited so we don't need to visit the same node twice and got stuck in a loop.
 
On a high-level, DFS can be implemented in two ways:

1. Iterative approach using a stack. (Compared to BFS that implemented using a queue)

2. Recursive approach using the same function by recursion (The function call is implemented by a stack frame in the backend, so it's actually similar to the first approach)

The basic idea of DFS using a stack is as follows:

- From the starting node, push it into the stack.

- While stack is not empty:

    pop a node from the top of the stack
    
    visit it (depends on our objective, visit here means different things)
    
    mark it as visited, and push its neighbours into the stack.








##### Example: Subsets, recursion

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        #backtracking
        n = len(nums)
        if n==0:
            return []
        def dfs(i, curr_path, res):
            res.append(curr_path)
            if len(curr_path)==n:
                return
            for j in range(i,n):
                dfs(j+1, curr_path+[nums[j]], res)
        res = []
        curr_path = []
        dfs(0, curr_path, res)
        return res
```



