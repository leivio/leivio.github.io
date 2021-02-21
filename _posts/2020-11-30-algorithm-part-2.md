---
layout: single
title:  "Intro to data structure and algorithm Part II"
header:
  teaser: /assets/images/thumbnails/logo-data-structures-algorithms.png
excerpt: "BFS and level order traversal using queue"
date:   2021-02-02
category: algo
tags: [algorithm, data structure, dfs, bfs, graph]
comments: true
sidebar:
  nav: "docs"
---

_This is Part II of the intro to data structure and algo series. See others here._
{: .notice--primary}
&nbsp;
&nbsp;


- BFS in Trees structure:

max Depth in a tree

```python
def maxDepth(self, root: TreeNode) -> int:
        #non-recursive, queue
        if not root:
            return 0
        q = collections.deque()
        q.append(root)
        depth = 0
        while q:
            depth+=1
            q_size = len(q)
			  ## level-order using queue
            for i in range(q_size):
                curr_node = q.popleft()
                if curr_node.left:
                    q.append(curr_node.left)
                if curr_node.right:
                    q.append(curr_node.right)
            
        return depth
```

- BFS in graph structure:

minimum steps in an island

```

```

