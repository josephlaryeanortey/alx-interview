# 0x00. Pascal's Triangle

## Project Overview

This project involves creating a Python function to generate Pascal's Triangle. The function `pascal_triangle(n)` returns a list of lists of integers representing the triangle based on the specified number of rows, `n`. This project will help reinforce Python programming skills and understanding of algorithms.

## Requirements

- Python 3.x
- Basic understanding of lists, loops, functions, and conditional statements in Python.

## Tasks

### 0. Pascal's Triangle

Implement the function `pascal_triangle(n)` that returns a list of lists of integers representing Pascal's triangle of `n`:

- **Input**: An integer `n`.
- **Output**: A list of lists of integers. Returns an empty list if `n <= 0`.
  
### Example

```python
>>> from 0-pascal_triangle import pascal_triangle
>>> print(pascal_triangle(5))
[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
