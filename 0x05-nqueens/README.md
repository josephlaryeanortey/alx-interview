# 0x05. N Queens

## Overview

The **N Queens** puzzle is a classic problem in computer science and mathematics that involves placing **N non-attacking queens** on an **N×N chessboard**. This project challenges you to implement a solution using the **backtracking algorithm**, which explores all potential placements of queens and backtracks when a solution is invalid. Your task is to write a Python program that solves this problem and prints all possible solutions.

## Learning Objectives

By the end of this project, you will:
- Understand and implement **backtracking algorithms**.
- Use **recursion** to explore possible solutions.
- Work with **Python list manipulations** to store queen positions.
- Handle **Python command line arguments** using the `sys` module.
- Follow the **PEP 8** style guide.

## Requirements

- **Editors**: `vi`, `vim`, `emacs`
- **OS**: Ubuntu 20.04 LTS using **Python3** (version 3.4.3)
- All files must end with a new line.
- The first line of all files must be exactly `#!/usr/bin/python3`.
- A `README.md` file is mandatory.
- Your code should conform to **PEP 8** (version 1.7.*).
- All files must be executable.
- Only the `sys` module can be imported.

## Usage

Run the program using the command:
```bash
./0-nqueens.py N

Project Structure

0x05-nqueens/
    ├── 0-nqueens.py
    └── README.md

Task
0. N Queens

Write a Python program that solves the N Queens problem:

    Usage: ./0-nqueens.py N
    The program should handle errors and print every valid solution.
    Each solution should be printed as a list of lists, where each inner list contains the row and column indices of a queen.
