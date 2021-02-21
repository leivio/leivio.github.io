---
layout: single
title:  "The Little Schemer Reading Note Part I"
header:
  teaser: /assets/images/thumbnails/The_little_schemer.jpg
excerpt: "Recursion, recursion, and recursion... This book will blow your mind!"
date:   2021-02-09
category: scheme
tags: [recursion, lisp, scheme, book]
toc: true
toc_sticky: true
toc_label: "The Little Schemer Reading Note"
comments: true
sidebar:
  nav: "docs"
---
![](/assets/images/thumbnails/The_little_schemer.jpg)

## Introduction

***The Little Schemer*** is a great book writen by Daniel P. Friedman and Matthias Felleisen. The book introduced concepts in computer science and functional programming in Scheme/Lisp. It is about **recursion** at its core. (Check out the cover of the book and you will find out!)

The authors mentioned in the [*preface*](https://felleisen.org/matthias/BTLS-preface.html) that:

> *The goal of this book is to teach the reader to think recursively*.


I really love the way the book is structured by asking questions from simple examples and let the readers to think and grasp the concepts along the process. I don't know about LISP or Scheme programing language beforehand but I was able to pick it up through its unique Q&A style of teaching (It's fun and fascinating!). 


Here is the table of contents of *The Little Schemer*. It's pretty light in the first few chapters but quickly gets quite in depth. Especially in last few chapter about lambda and Y-combinator.

- Chapter  1: Toys
- Chapter  2: Do It, Do It Again, and Again, and Again...
- Chapter  3: Cons the Magnificent
- Chapter  4: Numbers Games
- Chapter  5: *Oh My Gawd*: It's Full of Stars
- Chapter  6: Shadows
- Chapter  7: Shadows
- Chapter  8: Lambda the Ultimate
- Chapter  9: ... and Again, and Again, and Again ...
- Chapter 10: What Is the Value of All of This?



## Resource to get started

Here are some resources I found very useful when I read through the book. 

- Two talks on YouTube given by [David Christiansen](https://www.youtube.com/watch?v=VxINoKFm-S4) and [Andy Balaam](https://www.youtube.com/watch?v=tA1clbGDczI&t=3860s).

- [The little schemer repo](https://github.com/pkrumins/the-little-schemer) with code and examples in book 

If you want to run Scheme/LISP on your computer without a Scheme interpreter. [Here](https://www.viget.com/articles/the-little-schemer-will-expand-blow-your-mind/) is a tutorial on how to do so through REPL.



## Basic concepts

Ok, let's get started! Today we are going through some basic concepts in the first few chapters and some great examples about how functions are defined using recursion. The first chapter talks about basic data types and operation. The second chapter introduces two recursive functions using those basic data types & operations. 


### Basic data types:

`atom`: The atom is the basic element in Scheme. An atom is a constant whose name is its own value. 

`list`: We use parentheses `()` to specify list of values (S-expressions). For example, `(a b c)` is a list, `((a b c) x y z)` is also a list.

`S-expression`: An S-expression is either an atom or a collection of S-expressions enclosed in parentheses. The second form of S-expressions are known as lists.


### Basic functions:

`car l`: return the first element in the list. E.g. `car (a b c)` will give you `a`. The primitive car is defined only for non-empty lists.

`cdr l`: return a list consists of the rest of the list excluding its first element. The primitive cdr is defined only for non-empty lists. The cdr of any non-empty list will always return another list. E.g. `cdr (a b c)` will give you `(b c)`. 

`cons a l`: Concatenate between an atom `a` and a list `l`. The primitive cons takes two arguments and the second argument to cons must be a list. The result is also a list. E.g. `cons a (b c)` will give you `(a b c)`.

`null? l` return ture if list is empty. The primitive null? is defined only for lists.

`eq? a b`: check if two element are equal.

`lat? l`: check if each S-expression in the list is an atom

`member? a l` : check if a is a member in l

`rmember? a l`: remove the first occurance of the atom `a` from the  list `l`. E.g `rember b (a b c b c)` will return `(a c b c)`.


![](/assets/images/post_image/little_schemer_1.jpg){:height="50%" width="50%"}

## Examples using recursion

Here is an example of how recursion is used almost everywhere in the function definitions:

- Definition of `lat` function (Chp2 p16)

```lisp
(define lat? 
 (lambda (l)
  (cond
   ((null? l) #t )
     ((atom? (car l)) (lat? (cdr l))) 
      (else #f))))
```


The idea to define `lat` function is recurion. It first takes a look at the first element in the list `car l`, if it is an atom, then we will keep using the same function `lat` on the rest of the list `cdr l`. If it's not an atom we return False `#f`.



- Definition of `member?` function (Chp2 p22)

```lisp
(def member?
  (lambda (a lat)
    (cond
      ((null? lat) false)
      (else (or (eq? (car lat) a)
        (member? a (cdr lat)))))))
```

Similar to `lat` function, `member` looks at the first element `car l` in the list to check if it equals to `a`, then using the same function recursively on the other part of the list excluding first element `cdr l`.


Note that the first condition `null?` is very important because it serves as the **termination condition** to the recursion. It's so important that it's listed as the very first **commandment** in the book (There are 10 commandments in the book and we will talked about it later).



<i class="far fa-sticky-note"></i> **The First Commandment:** 
Always ask `null?` as the first question in expressing any function. 
{: .notice--info}
{: .text-justify}

Also, by recursively using the same function on `cdr lat`, we are reducing the size of the input in this recursion. Each round of calling the function, we are shrinking the size of the list by 1 and getting closer to the termination condition `null?`. This is also covered in the fourth  **commandment**:



<i class="far fa-sticky-note"></i> **The Fourth Commandment:** 
Always change at least one argument while recurring. It must be changed to be closer to termination. The changing argument must be tested in the termination condition: when using `cdr`, test the termination with `null?`.
{: .notice--info}
{: .text-justify}


- A little quiz here: 
By using recursion, can you write your own definition for function `rember` (remove the first occurance of the given atom from the given list)?



Here is the answer:

```lisp
(define rember
  (lambda (a lat)
    (cond
      ((null? lat) (quote()))
      ((eq? (car lat) a) (cdr lat))
      (else (cons (car lat)
                  (rember a (cdr lat)))))))
```



<i class="far fa-sticky-note"></i> **Up Next:** 
In the part II we will talk more about recursion and lambda in this book. Stay tuned and may the recursion be with you!
{: .notice--info}
{: .text-justify}


![](/assets/images/post_image/may_the_recursion_be_with_u.png){:height="80%" width="80%"}




## References

[The little schemer repo](https://github.com/pkrumins/the-little-schemer)

[The Little Schemer in Hy repo](https://github.com/andybp85/hyLittleSchemer)

[A post about The Little Schemer](https://www.viget.com/articles/the-little-schemer-will-expand-blow-your-mind/) 
