---
title: The shape of a small world
description: What a simple simulation can teach us about patterns, patience, and the beauty of looking twice.
author: Leytzher Muro
authorInitials: LM
pubDate: 2025-05-14
readTime: 8 min read
tags:
  - Computing
  - Mathematics
  - Julia
---

There is a particular pleasure in watching a small world come to life. Not a world with grand laws or elaborate machinery, but one made from a handful of rules, a little time, and enough curiosity to see what happens next.

We will build one today. The ingredients are modest: a grid, a starting point, and a function that lets each point ask its neighbors what they are doing.

## Start with a question

In mathematical language, we are looking for a field $f(x, y)$ that changes smoothly across space. A useful way to think about that smoothness is the gradient:

<div class="equation" role="math" aria-label="The gradient of f of x y equals partial f partial x comma partial f partial y"><span>∇f(x, y) =</span><span class="fraction"><span>∂f</span><span>∂x</span></span><span>,</span><span class="fraction"><span>∂f</span><span>∂y</span></span></div>

The gradient points toward change. Follow it, and you get a path through the landscape. Ignore it, and you might still find something interesting.

```python
import numpy as np

size = 80
x, y = np.meshgrid(np.linspace(-3, 3, size), np.linspace(-3, 3, size))
field = np.sin(x * x + y * y) * np.exp(-.15 * (x * x + y * y))
print(f"peak: {field.max():.3f}")
```

```julia
using Statistics

samples = [2, 4, 8, 16]
println("mean: $(mean(samples))")
```

```javascript
const line = d3.line()
  .x(d =&gt; x(d.day))
  .y(d =&gt; y(d.value));

svg.append("path").datum(data)
  .attr("d", line);
```

```common-lisp
(ql:quickload :alexandria)

(defparameter *samples* '(2 4 8 16))
(format t "mean: ~,2f~%"
        (/ (reduce #'+ *samples*) (length *samples*)))
```

## Patterns are patient

Run the cell, then change the numbers. The result is not a picture of the world; it is a question asked of the world. This is the quiet superpower of code: it gives an idea somewhere to go.

> The best way to understand a system is to build a small one and watch it surprise you.

That surprise is the point. We make a small world, we give it a few rules, and then we pay attention. The rest is just iteration.
