# Agenda

> ***NOTE:** This agenda is copied from the previous term and needs to be adjusted to this semester. Otherwise, the topics are generally in the correct order.*

> These are my notes on what I plan to teach in each [**upcoming class**](#jan-30).
>
> ###### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)


> ## Starter Kits
>
> To grab a starting point for any in-class demos or practices, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte). It will allow you to grab a copy of the starter kit folder to put into your student workbook.
> 
> You will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the **root** of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*

<!--

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/Demo-0 ./src/0xx/ad-hoc-demo
    ```


-->

----

## Jan-Apr 2025 Schedule

### Jan 8 (W01)

- **Today** *(Online)*
  - Course Introduction
  - GitHub Account Setup
  - Software Setup

### Jan 9

- *Announcements:*
  - A week from today is **In-Class Lab 1**
  - A week from tomorrow is the cutoff for **Quiz 1**
- Workbook Setup
  - [000](./src/000/ReadMe.md)
  - [001](./src/001-StartHere/ReadMe.md)
- **Homework**
  - Complete the lesson for [002](./src/002/ReadMe.md)
  - Complete the [Practice Version Control](https://dgilleland.github.io/CPSC-1520/tutorials/0020/) tutorial
  - In your student workbook, review the Reading Lists: `~/docs/Readings.md`

----

## Jan 13 (W02)

- **Announcements**
  - **Quiz Readings** - Links for readings for individual quizzes can be found under the individual topics that the quizzes relate to. For convenience, I have posted a [*Summary of Quiz Readings*](./docs/QuizReadings.md). 
  - **Brightspace Content** - Topics on Brightspace were in the wrong order at the start of the term. The order has been corrected.
- **Today**
  - Practice Assignment (see Brightspace)
  - [003](./src/003/ReadMe.md) Intro to JavaScript
- **Homework**
  - Tutorial: [Querying the DOM](https://dgilleland.github.io/CPSC-1520/tutorials/0030/)
    - Put it in your student workbook under `~/src/query-dom/`
  - Tutorial: [Using Script Tags](https://dgilleland.github.io/CPSC-1520/tutorials/0040/)
    - Put it in your student workbook under `~/src/script-tags/`
    - Bookmark and read the official documentation on [Semantic HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)

## Jan 15

- **Today** *(Online)*
  - [ ] [Update the **Practice Assignment**](https://dgilleland.github.io/CPSC-1520/guides/lab-updates/) for the latest automated tests.
  - [ ] ***Feedback:*** Did you do the two tutorials from last class??!
  - [ ] **Demo:** Combine the main points of [003](./src/003/ReadMe.md) and [004](./src/004/ReadMe.md)
    - Find and modify DOM elements with `document.querySelector()`
    - Link a JavaScript file
    - Create and use variables
- **Homework**
  - *Reminder to keep up with Quiz readings and completing the quizzes before their cutoff date.*
  - [ ] Review the [003 LOGs](./src/003/LOGs.md) and the [004 LOGs](./src/004/LOGs.md)
  - [ ] Read the following articles:
    - [Why JavaScript?](https://dgilleland.github.io/CPSC-1520/explanations/0010/)
    - [JavaScript as a Language](https://dgilleland.github.io/CPSC-1520/explanations/0020/)


## Jan 16

- **Today**
  - [x] Lab 1 released/due **today**
    - **20-30 minutes** of class time to complete the lab.
  - [ ] *What is a Computer Program?*
  - [ ] Begin [005](./src/005/ReadMe.md)
    1. Launch the `005/live-demo/index.html` in Live Server.
    2. Open the Dev Tools Console.
    3. Walk through 005's ReadMe.md
  - [ ] The browser's dev tools provides a **console** that is a REPL (Read-Eval-Print-Loop) environment for JavaScript
  - [ ] Node also provides/is a REPL for JavaScript

----

## Jan 20 (W03)

- **Today**
  - [ ] Continue [**005**](./src/005/ReadMe.md)
    1. Launch the `005/live-demo/index.html` in Live Server.
    2. Open the Dev Tools Console.
    3. Walk through 005's ReadMe.md
       - numbers vs. strings
       - math vs. concatenation
       - variables
       - strings to numbers - `.parseInt()` and `.parseFloat()`
       - numbers to strings - `.toString()` and `.toFixed()`
    4. Note the difference between `let` and `const` in creating variables
    5. Emphasize difference between primitive (built-in) types and objects
    6. Mention [the LOGs](./src/005/LOGs.md) (*Learning Outcome Guides*)
  - [ ] Characteristics of JavaScript
    - case-sensitive
    - dynamically-typed (or *loosely-typed*) language
    - string literals can be wrapped in double or single quotes
    - string interpolation is performed with text inside a pair of back-ticks (`` ` ``)
      - placeholders in the form of `${expression}`
      - e.g.: `` `The count is ${count}` ``
  - [**006**](./src/006/ReadMe.md) (cont.) - Intro to Functions in JavaScript
    - Methods in the global `console` object
      - `.log()`
      - `.clear()`
      - list 3 others from exploring in a REPL
    - `alert()`, `prompt()` and `confirm()` global functions
- **Homework**
  - [ ] Do the [**Learn by Play** portion of the `005/ReadMe.md`](./src/005/ReadMe.md#learn-by-play)
  - [ ] Review the new [Finding DOM Elements](https://dgilleland.github.io/CPSC-1520/guides/0030/) guide.
  - [ ] Review [006 LOGs](./src/006/LOGs.md)


## Jan 22

- **Today** *(Online)*
  - [ ] How to use ***LOGs** (Learning Outcome Guides)*
  - [**007**](./src/007/ReadMe.md) - Creating JavaScript Functions
- **Homework**
  - [ ] Complete [practice in `007`](./src/007/ReadMe.md#practice-agreement)
  - [ ] Review [007 LOGs](./src/007/LOGs.md)
  - [ ] Styling Challenge (CSS only - no JavaScript) - *This is completely optional. I put that in there just for you guys in Web Design and Development, not because it has anything to do with JavaScript, but because I wanted you to try thinking about styling without lots of <div>, <span> and class="" attributes. I figured it would help you with your design journey.*

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/005.5 ./src/005.5
    ```


## Jan 23

- **Today**
  - [ ] Lab 2 released/due **today**
    - **30-45 minutes** of class time to complete the lab.
  - [ ] How to get the [Starter Kits](#starter-kits) for each class.
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events
    - A *soft introduction* to Events and Event Handling in web pages.

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/soft-intro ./src/008/soft-intro
      ```

- **Homework**
  - [ ] Ensure you have been making notes on all the LOG items in your student workbook and that you have committed and pushed those notes.
  - [ ] Review the code from today's class. Try to describe what each part of the JavaScript code is doing. Identify new items such as mouse events, new DOM object properties, etc.
    - > ***FYI:** Reviewing code from each class should be a regular practice, even when I'm not explicit in it being homework.*

----

## Jan 27 (W04)

- [ ] Housekeeping Tasks:
  - [ ] Version Control: Updating Your Workbook (commit & push)
  - [ ] Filling the Gaps: Self-study is the only way to fill in the gaps between what you do and don't know about HTML.

![HTML Iceberg](./docs/images/html-iceberg.jpg)

- **Starter Kits** for the today and the next class
  - The *`demo-classlist`* starter kit is a simple demo for an ad-hoc demo in class

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/Demo-0 ./src/008/demo-classlist
    ```

  - The *`demo-events`* starter kit is an assortment of event handlers; it's mostly a demo where the code is already done.

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-events ./src/008/demo-events
    ```

  - The [*Text Manipulation*](./src/008/demo-text-manipulation/ReadMe.md) starter kit is where we can explore event handlers and input controls.

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-text-manipulation ./src/008/demo-text-manipulation
    ```

  - The [*Form Processing*](./src/008/form-processing/ReadMe.md) starter kit moves us toward processing all the user input from a `<form>` in a single event handler.

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/form-processing ./src/008/form-processing
    ```

- **Today**
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events
    - [ ] Complete the [soft-intro](./src/008/soft-intro/ReadMe.md) TODO items
    - [ ] In the ad-hoc [demo-classlist](./src/008/demo-classlist)  we will listen for the click of the `<h1>` and toggle the `hidden` class for the `<output>`
    - [ ] Overall goals:
      - exposure to a few more HTML tags
      - programmatically adding/removing CSS classes from DOM elements
- **Homework**
  - Review the [LOGs](./src/008/LOGs.md)
  - Review the [**html**](./src/008/demo-text-manipulation/index.html) and [**JavaScript**](./src/008/demo-text-manipulation/js/main.js) code for the text manipulation demo
  - Can you...
    - [ ] create an event handler
    - [ ] add an event listener
    - [ ] add and remove CSS classes programmatically (from `.classList`)
    - [ ] use an anonymous handler for an event listener

## Jan 29

- **Today** *(Online)*
  <!-- - [ ] Life Advice: **Don't be *passive*!**
    - *Don't wait for  -->
  - [ ] **(5 min)** - Lab 2 solution
  - [ ] **(15-25 min)** - Review [**demo-events**](./src/008/demo-events/js/main.js) to discuss the various mouse events.
    - [ ] Overall goals:
      - exploring different mouse events
  - [ ] **(10-15 min)** - Ad-hoc exploration of string manipulation functions (based roughly on the event-based intent of [demo-text-manipulation](./src/008/demo-text-manipulation/))
    - **`.length`** property
    - `.trim()` (plus left/right trim), `.toUpperCase()`/`.toLowerCase()`, `.padStart()`/`.padEnd()`, `.repeat()`, `.replace()` + `.replaceAll()`, `.substr()` vs. `.substring()`
    - `.charAt()` and `.charCodeAt()`, `String.fromCharCode()`
    - A sidenote about the short-hand Math operators
      - `+=` et.al., `++` and `--` (prefix vs. postfix)

        ```js
        let count = 1;
        appendLine(`Count starts out as ${count}`);
        appendLine(`Postfix increment: count is ${count++} and then ${count}`);
        appendLine(`Prefix increment: count is ${++count} and then ${count}`);
        ```

    - Starter Kit *(installs to `~/src/005/string-functions/`)*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/Demo-Steps ./src/005/string-functions
      ```

  - [ ] **(30-40 min)** - [Form processing](./src/008/form-processing/ReadMe.md) - Introduction
    - [ ] Overall goals:
      - `submit` event for forms
      - identifying the form DOM element with the event's `.target` property
      - identifying input controls on the form
- **Homework**
  - [ ] Complete the [Event Listener tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0070/) and place it in your workbook at **`~/src/008/event-listener/`**
  - [ ] Complete the [DOM Interactions tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0080/) and place it in your workbook at **`~/src/008/dom-styling/`**
  - [ ] Can you...
    - [ ] identify what is meant by **mouse** events such as `'click'`, `'dblclick'`, **`'mouseover'`**, **`'mouseout'`**, `'mouseenter'`, `'mouseleave'`, `'mousemove'`
    - [ ] perform string manipulations
    - [ ] use various assignment operators and the increment/decrement math operators


## Jan 30

- **Today**
  - [ ] Lab 3 released/due **today**

> ### Lab 3 Spec Notes
> 
> - **Step 2** - The first point is somewhat vague - which element (there are two)? But, from reading the rest of the steps and seeing the sample screenshot, it would seem that the element is the `divElement`
> - **Step 3** - The instructions are somewhat vague, but get a bit clearer when you look closely at the HTML. One of the parts of this step refers to the "div list group", and that appears to be the same element as the first `divElement` selected in Step 1 (though we selected it by the class '.javascript-resources' and not '.list-group' as somewhat inferred by these instructions).
> - **Step 4** - The instructions mention "the list", and that is (once again), the `divElement`. However, since it's talking about it as "the list", I will look for it by the class `'.list-group'`.

----

## Feb 03 (W05)

- **Today**
  - [ ] **(10-15 min)** - Lab 3 comments re: DOM Loaded event
  - [ ] **(45-60 min)** - Continue [Form processing](./src/008/form-processing/ReadMe.md) - Introduction
    - [ ] Overall goals:
      - `submit` event for forms
      - identifying the form DOM element with the event's `.target` property
      - identifying input controls on the form
  - [ ] **(20-25 min)** - [If-Else](./src/012/demo-grammar/ReadMe.md)
- **Homework**
  - [ ] Review my notes on [Conditional Expressions](https://dgilleland.github.io/CPSC-1520/reference/0020/#conditional-expressions)
  - [ ] Review the samples from today's class and be sure you understand every line of code.


## Feb 05

- **Today** *(Online)*
  - [ ] **()** Ad-hoc If-Else demo
    - Starter Kit *(installs to `~/src/012/If-Else/`)*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/012/If-Else ./src/012/If-Else
      ```

  - [ ] **()** [013 If-Else in Form Processing](./src/013/ReadMe.md)
    - Starter Kit *(installs to `~/src/013/`)*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/013 ./src/013
      ```

    - [ ] Demo Shipping Calculator
- **Homework**
  - [ ] Do the [form-processing-2](./src/013/form-processing/ReadMe.md) practice on your own


## Feb 06

- **Today**
- **Homework**

----

## Feb 10 (W06)

- **Today**
- **Homework**


## Feb 12

- **Today** *(Online)*
- **Homework**


## Feb 13

- **Today**
- **Homework**

----

## Feb 24 (W07)

- **Today**
- **Homework**


## Feb 26

- **Today** *(Online)*
- **Homework**


## Feb 27

- **Today**
- **Homework**

----

## Mar 03 (W08)

- **Today**
- **Homework**


## Mar 05

- **Today** *(Online)*
- **Homework**


## Mar 06

- **Today**
- **Homework**

----

## Mar 10 (W09)

- **Today**
- **Homework**


## Mar 12

- **Today** *(Online)*
- **Homework**


## Mar 13

- **Today**
- **Homework**

----

## Mar 17 (W10)

- **Today**
- **Homework**


## Mar 19

- **Today** *(Online)*
- **Homework**


## Mar 20

- **Today**
- **Homework**

----

## Mar 24 (W11)

- **Today**
- **Homework**


## Mar 26

- **Today** *(Online)*
- **Homework**


## Mar 27

- **Today**
- **Homework**

----

## Mar 31 (W12)

- **Today**
- **Homework**


## Apr 02

- **Today** *(Online)*
- **Homework**


## Apr 03

- **Today**
- **Homework**

----

## Apr 07 (W13)

- **Today**
- **Homework**


## Apr 09

- **Today** *(Online)*
- **Homework**


## Apr 10

- **Today**
- **Homework**

----

## Apr 14 (W14)

- **Today**
- **Homework**


## Apr 16

- **Today** *(Online)*
- **Homework**


## Apr 17

- **Today**
- **Homework**

----

## Apr 23 (W15)

- **Today** *(Online)*
- **Homework**


## Apr 24

- **Today**
- **Homework**


----
