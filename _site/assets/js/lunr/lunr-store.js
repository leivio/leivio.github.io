var store = [{
        "title": "STAT110: The Probability course you don't want to miss",
        "excerpt":"I have always been fascinated by probability and statistics ever since I was in high school. I have taken a few courses in probability from school and online courses. But I would say that Joe’s probability course is one of my favorite courses of all time! It helped me gasp a deeper understanding in distribution and conditional probability. It also helped me connect the dots between different distributions and their applications.   Early this year, I have been watching the videos of STAT 110 Probability by Professor Joe Blitzstein on Youtube for 3 times. I almost listened to it before I went to bed every night!   This course also served as a pre-requisite and provide a solid foundation for another stat course I took later in Spring 2018: STAT 171 Introductions to Stochastics Processes by Natesh Pillai (I also recommend this course!)   If you want to learn more about random variables and their distributions, conditional probability and a lot of other interesting stuffs related to probability, don’t forget to check out STAT 110 at the course website. There are a lot of study materials and exercise that you could learn and practice too.   Here is some videos that I like the most (if you want to get a quick gasp of what this course is about and why is this course interesting)      The “two envelope paradox”. Starting from 46:20 on Lecture 25 to the first part of Lecture 26   I would like to share one more thing quoted from Joe’s in his talk on “The Soul of Statistics” (In case you haven’t seen this video above. Here is a spoiler alert!)   “Conditional is the soul of statistics.”    P.S.  I recently heard from Joe’s twitter that “He is working on developing an edX version of Stat 110, and that will indeed have a certificate of completion.” Hopefully the course will be launching on EdX soon!    Update 2018:  I audited STAT 210 Probability in Fall 2018, a advance version of STAT 110 and it touched on more measure theory and proofs.    Update 2019:  Joe’s Introduction to Probability course launched on Edx! Check the course official website here for more! The second edition of Joe’s probability book with Jessica Hwang is free online here.  ","categories": ["stat"],
        "tags": ["probability","stat","courses"],
        "url": "http://localhost:4000/stat/stat110-probability/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/stat110logo.jpg"
      },{
        "title": "Intro to data structure and algorithm Part I",
        "excerpt":"Today we are going to talk about Depth-first Search and backtracking. This is Part I of the intro to data structure and algo series. See others here.        Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts from the root node (if it’s a graph, you can select an arbitrary node) and goes along each branch as deep as possible before backtracking. Also we need to ensure that all the notes are marked as visited so we don’t need to visit the same node twice and got stuck in a loop.   On a high-level, DFS can be implemented in two ways:           Iterative approach using a stack. (Compared to BFS that implemented using a queue)            Recursive approach using the same function by recursion (The function call is implemented by a stack frame in the backend, so it’s actually similar to the first approach)       The basic idea of DFS using a stack is as follows:           From the starting node, push it into the stack.            While stack is not empty:       pop a node from the top of the stack       visit it (depends on our objective, visit here means different things)       mark it as visited, and push its neighbours into the stack.       Example: Subsets, recursion   class Solution:     def subsets(self, nums: List[int]) -&gt; List[List[int]]:         #backtracking         n = len(nums)         if n==0:             return []         def dfs(i, curr_path, res):             res.append(curr_path)             if len(curr_path)==n:                 return             for j in range(i,n):                 dfs(j+1, curr_path+[nums[j]], res)         res = []         curr_path = []         dfs(0, curr_path, res)         return res   ","categories": ["algo"],
        "tags": ["algorithm","data structure","dfs","bfs","graph"],
        "url": "http://localhost:4000/algo/algorithm-part-1/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/logo-data-structures-algorithms.png"
      },{
        "title": "The Little Schemer Reading Note Part I",
        "excerpt":"   Introduction   The Little Schemer is a great book writen by Daniel P. Friedman and Matthias Felleisen. The book introduced concepts in computer science and functional programming in Scheme/Lisp. It is about recursion at its core. (Check out the cover of the book and you will find out!)   The authors mentioned in the preface that:      The goal of this book is to teach the reader to think recursively.    I really love the way the book is structured by asking questions from simple examples and let the readers to think and grasp the concepts along the process. I don’t know about LISP or Scheme programing language beforehand but I was able to pick it up through its unique Q&amp;A style of teaching (It’s fun and fascinating!).   Here is the table of contents of The Little Schemer. It’s pretty light in the first few chapters but quickly gets quite in depth. Especially in last few chapter about lambda and Y-combinator.      Chapter  1: Toys   Chapter  2: Do It, Do It Again, and Again, and Again…   Chapter  3: Cons the Magnificent   Chapter  4: Numbers Games   Chapter  5: Oh My Gawd: It’s Full of Stars   Chapter  6: Shadows   Chapter  7: Shadows   Chapter  8: Lambda the Ultimate   Chapter  9: … and Again, and Again, and Again …   Chapter 10: What Is the Value of All of This?   Resource to get started   Here are some resources I found very useful when I read through the book.           Two talks on YouTube given by David Christiansen and Andy Balaam.            The little schemer repo with code and examples in book       If you want to run Scheme/LISP on your computer without a Scheme interpreter. Here is a tutorial on how to do so through REPL.   Basic concepts   Ok, let’s get started! Today we are going through some basic concepts in the first few chapters and some great examples about how functions are defined using recursion. The first chapter talks about basic data types and operation. The second chapter introduces two recursive functions using those basic data types &amp; operations.   Basic data types:   atom: The atom is the basic element in Scheme. An atom is a constant whose name is its own value.   list: We use parentheses () to specify list of values (S-expressions). For example, (a b c) is a list, ((a b c) x y z) is also a list.   S-expression: An S-expression is either an atom or a collection of S-expressions enclosed in parentheses. The second form of S-expressions are known as lists.   Basic functions:   car l: return the first element in the list. E.g. car (a b c) will give you a. The primitive car is defined only for non-empty lists.   cdr l: return a list consists of the rest of the list excluding its first element. The primitive cdr is defined only for non-empty lists. The cdr of any non-empty list will always return another list. E.g. cdr (a b c) will give you (b c).   cons a l: Concatenate between an atom a and a list l. The primitive cons takes two arguments and the second argument to cons must be a list. The result is also a list. E.g. cons a (b c) will give you (a b c).   null? l return ture if list is empty. The primitive null? is defined only for lists.   eq? a b: check if two element are equal.   lat? l: check if each S-expression in the list is an atom   member? a l : check if a is a member in l   rmember? a l: remove the first occurance of the atom a from the  list l. E.g rember b (a b c b c) will return (a c b c).      Examples using recursion   Here is an example of how recursion is used almost everywhere in the function definitions:      Definition of lat function (Chp2 p16)   (define lat?   (lambda (l)   (cond    ((null? l) #t )      ((atom? (car l)) (lat? (cdr l)))        (else #f))))   The idea to define lat function is recurion. It first takes a look at the first element in the list car l, if it is an atom, then we will keep using the same function lat on the rest of the list cdr l. If it’s not an atom we return False #f.      Definition of member? function (Chp2 p22)   (def member?   (lambda (a lat)     (cond       ((null? lat) false)       (else (or (eq? (car lat) a)         (member? a (cdr lat)))))))   Similar to lat function, member looks at the first element car l in the list to check if it equals to a, then using the same function recursively on the other part of the list excluding first element cdr l.   Note that the first condition null? is very important because it serves as the termination condition to the recursion. It’s so important that it’s listed as the very first commandment in the book (There are 10 commandments in the book and we will talked about it later).    The First Commandment:  Always ask null? as the first question in expressing any function.   Also, by recursively using the same function on cdr lat, we are reducing the size of the input in this recursion. Each round of calling the function, we are shrinking the size of the list by 1 and getting closer to the termination condition null?. This is also covered in the fourth  commandment:    The Fourth Commandment:  Always change at least one argument while recurring. It must be changed to be closer to termination. The changing argument must be tested in the termination condition: when using cdr, test the termination with null?.      A little quiz here:  By using recursion, can you write your own definition for function rember (remove the first occurance of the given atom from the given list)?   Here is the answer:   (define rember   (lambda (a lat)     (cond       ((null? lat) (quote()))       ((eq? (car lat) a) (cdr lat))       (else (cons (car lat)                   (rember a (cdr lat)))))))    Up Next:  In the part II we will talk more about recursion and lambda in this book. Stay tuned and may the recursion be with you!      References   The little schemer repo   The Little Schemer in Hy repo   A post about The Little Schemer  ","categories": ["scheme"],
        "tags": ["recursion","lisp","scheme","book"],
        "url": "http://localhost:4000/scheme/lisp-little-schemer-part-1/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/The_little_schemer.jpg"
      },{
        "title": "Git Basic Part II",
        "excerpt":"   Up Next   In the part II we will talk more about Git. Stay tuned!   ","categories": ["git"],
        "tags": ["git","branch"],
        "url": "http://localhost:4000/git/git-basic-part-2/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/The_little_schemer.jpg"
      },{
        "title": "Intro to data structure and algorithm Part II",
        "excerpt":"This is Part II of the intro to data structure and algo series. See others here.           BFS in Trees structure:   max Depth in a tree   def maxDepth(self, root: TreeNode) -&gt; int:         #non-recursive, queue         if not root:             return 0         q = collections.deque()         q.append(root)         depth = 0         while q:             depth+=1             q_size = len(q) \t\t\t  ## level-order using queue             for i in range(q_size):                 curr_node = q.popleft()                 if curr_node.left:                     q.append(curr_node.left)                 if curr_node.right:                     q.append(curr_node.right)                      return depth      BFS in graph structure:   minimum steps in an island      ","categories": ["algo"],
        "tags": ["algorithm","data structure","dfs","bfs","graph"],
        "url": "http://localhost:4000/algo/algorithm-part-2/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/logo-data-structures-algorithms.png"
      },{
        "title": "Git Basic Part I",
        "excerpt":"Git Branch   Types of git branch   there are two type of branches:           local branches            remove-tracking branches       you can check them out using git branch and git branch -r   Tree and DAG   Git Pull  git fetch git merge      Up Next   In the part II we will talk more about xxx in git. Stay tuned!   ","categories": ["git"],
        "tags": ["git","tree","dag"],
        "url": "http://localhost:4000/git/git-basic-part-1/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/The_little_schemer.jpg"
      },{
        "title": "Recommendation System Overview",
        "excerpt":"   Up Next   In the part II we will talk more about some of the methods. Stay tuned!   ","categories": ["recsys"],
        "tags": ["recsys","deep learning"],
        "url": "http://localhost:4000/recsys/recommendation_system_overview/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/The_little_schemer.jpg"
      },{
        "title": "NLP ",
        "excerpt":"Intro   Today we are goinig to talk about NLP! I have listed some resources that are helpful to start the learning journey in this field. I also did a summary of some of the topics/SOTA models in NLP. This is part of the NLP series. See summary and other posts here.   Resource   Courses:   The first three are graduate level NLP courses with focus on neural nets applications and SOTA models (Attention, Transformer, BERT, Multi-lingual, etc) while the last two courses are more introductory courses.           Stanford CS224N Natural Language Processing with Deep Learning by Christopher Mannings       CMU CS11-737 Multilingual NLP 2020, by Graham Neubig        CMU CS11-737 Neural Nets for NLP 2020 by Graham Neubig            Stanford CS224U Natural Language Understanding       Stanford CS124 From Languages to Information by Dan Jurafsky   Textbook:           Natural Language Processing by Jacob Eisenstein            Speech and Language Processing by Dan Jurafsky and James H. Martin            A Primer on Neural Network Models for Natural Language Processing by Yoav Goldberg            Introduction to Information Retrieval by Christopher Manning, Prabhakar Raghavan and Hinrich Schütze       Summary   Chris mentioned in CS224N that NLP can be categorized into more tranditional NLP (up until approximately 2012) and more “neural nets stype” representation and models since 2013. So let’s talk about some recent breakthroughs in NLP:   Word Embedding   Word embedding is a dense representation of words in vector space. The biggest jump in NLP when moving from the sparse-input linear models to neural-network based models is to represent each feature as a dense vectors rather than each feature as a unique dimension (one-hot encoding/representation).   The word embeddings (vectors for each word) can be trained just like other parameters in the neural network, or it can be used from pre-trained models.   There are several ways we can obtain word enbeddings:   Count-Based model and Co-occurance matrix   Word2Vec   [this paper] (http://www.cnbc.cmu.edu/~plaut/papers/pdf/RohdeGonnermanPlautSUB-CogSci.COALS.pdf)   Context-Based model   “bigram”   Skip-Gram   Continuous Bag-of-words           word2vec Parameter Learning Explained this summary paper helped explain the detailed of CBOW and Skip-Gram models and herachical softmax and negative sampling.            hw1 on co-occurance here            hw2 on implementing word2vec here       GloVe  Global Vector (GloVe) model tries to combine count-based Matrix Factorization and skip-gram model.   Language Models  Language models are models that assign probability to sequence of words. N-gram is a simple model that assign sequance of n words. For example “my book”, “watch out” is a 2-gram (bigram), “this is a” is a 3-gram (trigram), etc. N-gram model will assign/estimate the probability of the n+1 word given the previous n words.  There are more complicated language model like RNN LMs and Seq2Seq.      Up Next   I will post some learning notes about NLP. Stay tuned!   ","categories": ["nlp"],
        "tags": ["nlp","course","cs224u","cs224n","word2vec","transformer","bert"],
        "url": "http://localhost:4000/nlp/nlp-part-1/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/NLP_image.jpg"
      },{
        "title": "NLP ",
        "excerpt":"Today we are going to talk about word embeddings. This is the second part of the NLP series. See summary and other posts here.   Intro   In the previous post we mentioned that since 2013, people started to use neural nets style representation like word2vec, etc.   Word Embedding   Count-Based model and Co-occurance matrix  [this paper] (http://www.cnbc.cmu.edu/~plaut/papers/pdf/RohdeGonnermanPlautSUB-CogSci.COALS.pdf)   Word2Vec   2013   Related paper and note:           Distributed Representations of Words and Phrases and their Compositionality            Efficient Estimation of Word Representations in Vector Space            word2vec Explained.       This paper served as a summary/note to further explain the word2vec model in the previous paper. Specifically on negative sampling (drawn by unigram distribution to the power of 3/4) based on skip-gram model, and its ojective function. Note that the words and contexts representation are learned jointly so the model is non-convex(comparing to learning only the word representation while fixing contexts, it will reduced to a logistic regression which is convex).   Here is a interesting Q&amp;A quoted from the paper:   Why does this produce good word representations?   Good question. We don’t really know. The distributional hypothesis states that words in similar contexts have similar meanings. The objective above clearly tries to increase the quantity $v_{w} \\dot v_{c}$ for good word-context pairs, and decrease it for bad ones. Intuitively, this means that words that share many contexts will be similar to each other (note also that contexts sharing many words will also be similar to each other). This is, however, very hand-wavy. Can we make this intuition more precise? We’d really like to see something more formal.   Context-Based model   “bigram”   Skip-Gram   Continuous Bag-of-words           word2vec Parameter Learning Explained this summary paper helped explain the detailed of CBOW and Skip-Gram models and herachical softmax and negative sampling.            hw1 on co-occurance here            hw2 on implementing word2vec here       GloVe  Global Vector (GloVe) model tries to combine count-based Matrix Factorization and skip-gram model.   Language Models  Language models are models that assign probability to sequence of words. N-gram is a simple model that assign sequance of n words. For example “my book”, “watch out” is a 2-gram (bigram), “this is a” is a 3-gram (trigram), etc. N-gram model will assign/estimate the probability of the n+1 word given the previous n words.  There are more complicated language model like RNN LMs and Seq2Seq.   Reference           CS229 winter 2019 course website        Google’s word2vec project archive        Deep Learning for Natural Language Processing: Tutorials with Jupyter Notebooks       [TensorFlow tutorials] (https://www.tensorflow.org/tutorials/text/word2vec)   blog post [Learning Word Embedding] (https://lilianweng.github.io/lil-log/2017/10/15/learning-word-embedding.html) by Lilian Weng   Up Next   I will post some learning notes about NLP. Stay tuned!   ","categories": ["nlp"],
        "tags": ["nlp","cs224n","word2vec"],
        "url": "http://localhost:4000/nlp/nlp-part-2/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/NLP_image.jpg"
      },{
        "title": "Attention",
        "excerpt":"Today we are going to talk about Attention. This is part of the NLP series. See summary and other posts here.   BERT  In the previous post we mentioned that since 2013, people started to use neural nets style representation like word2vec, etc.   Attention   video 224N starting from here   Reference      CS229 winter 2019 course website    Lecture 8           blog post [Learning Word Embedding] (https://lilianweng.github.io/lil-log/2017/10/15/learning-word-embedding.html) by Lilian Weng            Up Next       I will post more learning notes about NLP. Stay tuned!   ","categories": ["nlp"],
        "tags": ["nlp","cs224n","word2vec","attention","transformer","bert"],
        "url": "http://localhost:4000/nlp/nlp-part-3/",
        "teaser": "http://localhost:4000/assets/images/thumbnails/NLP_image.jpg"
      }]