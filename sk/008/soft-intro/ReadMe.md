# A Soft Intro to Event Handling

- [ ] Listening for 'click' and 'dblclick' events
- [ ] Event bubbling and `.stopPropagation()`

    ```js
    document.body.addEventListener('click', function() {
        let output = document.querySelector('#feedback');
        output.innerHTML += '<br />I heard that!';
    });
    ```

- [ ] `.preventDefault()` vs. `.stopPropagation`
