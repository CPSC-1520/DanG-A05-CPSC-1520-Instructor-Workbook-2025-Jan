- [ ] **Submit:** `<form id="addInputs">`
  - [ ] Validate inputs
    - [ ] PicoCSS - indicate form input correctness
      - [ ] `aria-invalid="true"` or `"false"` for remove entirely
  - [ ] Looping:
    - [ ] Generate a new form (`buildFormHTML()`)
    - [ ] Append to `'#evaluations'`


# Course Marks

Exploring If-Else

- [ ] In the dev tools, try calling `outputLine()` to see the effects of the if-else
    - `outputLine('This should append to the output')`
    - `outputLine('This should replace the output', true)`
    - `outputLine('This should also replace the output', 'bob')`
- [ ] Create an error message for the user

    ```js
    /**
    * Generate a span styled with the .error class.
    * @param {string} htmlMarkup A string value that can include HTML markup
    * @returns The htmlMarkup enclosed in a '<span class="error"></span>' tag
    */
    const errorHtml = function (htmlMarkup) {
        return `<span class="error">${htmlMarkup}</span>`;
    };
    ```

- [ ] Echo the inputted values
    - [ ] Include running total weight

        ```js
        /**
        * Generate an HTML string describing the evaluation details.
        * @param {string} evalName The name of the evaluation item
        * @param {Number} weight The weight of the item towards the final grade
        * @param {number} points The number of points on the item
        * @param {number} earned The earned amount (optional)
        * @returns {string} - A string summarizing the evaluation details
        */
        const evalSummary = function(evalName, weight, points, earned) {
            let result = `The <em>${evalName}</em> is worth <strong>${weight}</strong>%.`;
            if(points > 0) {
                if(earned >= 0) {
                    result += ` You received ${earned}/${points} (${earned / points * 100 }%).`;
                } else {
                    result += ` It is marked out of ${points} points.`;
                }
            }
            return result;
        }
        ```

- [ ] Minimal required items: `evalName` and `weight`
    - [ ] Function `isBlank():boolean` to test input controls

        ```js
        /**
        * Determine if the text in an input is blank, treating leading and trailing whitespace as blank.
        * @param {HTMLInputElement} formInput A reference to an '<input>' element
        * @returns boolean - true if the trimmed value is an empty string
        */
        const isBlank = function(formInput) {
            return formInput.value.trim() === '';
        }        
        ```

- [ ] `earnedPoints` requires `totalPoints` to have a value
- [ ] `earnedPoints` cannot be greater than `totalPoints`
- [ ] Prevent total weight being over 100
- [ ] Enable `calc` button when total weight is 100

## Lesson Plan

There are potential mistakes from typos when checking for equality. The biggest one is using an **assignment operator** instead of one of the **equality operators**. Here's an example.

```js "=" {1}
if(inputEvalName.value = '') {
    // do something
}
```

Because you are performing an *assignment* instead of an *equality comparison*, you will **always get a `true` result** for the `if` statement.

Note also that `<input>` elements have their `.value` as a **string** (even when the `type='number'`).

## GitHub Issue

To complete the `~/src/015/course-marks-2` demo, the following must be done:

> Items marked with 🔢 are Array-related.

- [ ] `createForms()`
  - [ ] Validate inputs:
    - [ ] Category and Quantity required
    - [ ] Quantity must be between 1 and 10
  - [x] 🔢 Generate eval forms
    - [x] 🔢 Append to container
  - [ ] Clear inputs and re-set keyboard focus to Category input
- [ ] `editEvalItem()`
  - [ ] 🔢 Track all updates via a global array **`evalItems`**
  - [ ] Validate inputs:
    - [ ] Name is required (assume unchanged)
    - [ ] Weight is required (as whole number)
    - [ ] Total Points is optional, but must be greater than 0
    - [ ] Earned Points is optional, but
      - [ ] must have a value for Total Points
      - [ ] must be between 0 and the value of Total Points (inclusive)
  - [ ] If Valid
    - [ ] 🔢 Update/Add evaluation item to global `evalItems`
  - [ ] If not valid
    - [ ] Display error(s)
    - [ ] Set focus to Weight input
- [ ] `calculateGradeStatus()`
  - [ ] 🔢 Loop through `evalItems` to calculate
    - [ ] Total weight
    - [ ] Earned weight (to-date)
    - [ ] Remaining weight (to-date)

## Test Data

Using the following inputs:

| Eval Item | Weight | Total Possible | Earned |
|-----------|:------:|:--------------:|:------:|
| Quiz 1 | 15 | 36 | 29 |
| Quiz 2 | 20 | 24 | 18 |
| Quiz 3 | 15 |    |    |
| Lab 1  | 25 | 54 | 32 |
| Lab 2  | 25 | 42 |    |

The calculated results should be:

| Total Weight | Earned Weight | Remaining Weight |
|:---:|:---:|:---:|
| 100 | 41.9| 40 |


## Credits

| Image | Source | Meta |
|-------|--------|------|
|![Taylor Davis](./img/65.jpg) | RandomUser.me |  |
|![Alfredo Rice](./img/40.jpg) | RandomUser.md |  |
|![Shawn Collins](./img/83.jpg) | RandomUser.md |  |
|![Sofia Palmer](./img/45.jpg) | RandomUser.md |  |
|![Genesis Long](./img/50.jpg) | RandomUser.md |  |
|![Micheal Fields](./img/72.jpg) | RandomUser.md |  |
