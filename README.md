# My Joke Collection

Kevin Powell advises to newbies in one of his tutorials: Create your own problems. So I did. 

I always take a screenshot when I see a good joke on Facebook or elsewhere. 

I created my own excercise - My Joke Collection. This way my friends can see the jokes too. That is what we need in this corona pandemic and war in Ukraine times - some humour.

# What I learned

The jokes are randomly *created in JavaScript*:
```js
function fillColumns (arr, section, prefix) {
    arr.forEach(item => {
        const joke = document.createElement('img');
        joke.setAttribute('src', item.img);
        joke.setAttribute('alt', item.alt);
        joke.setAttribute('data-id', prefix + arr.indexOf(item));
        joke.setAttribute('class', "joke")
        section.appendChild(joke);
    })
}
```
The alternative text is set as an attribute to every joke, because for the *assistive technologies* there is literally nothing to read on the page except for the title. I checked it out with the Chrome's Screen Reader extension and it works fine!

# Useful resources

- freeCodeCamp featuring  [Create a Design System with CSS - Web Development Course](https://youtu.be/lRaL-8qZ0mM)
- freeCodeCamp featuring Ania Kubów in [Learn JavaScript by Building 7 Games - Full Course](https://youtu.be/ec8vSKJuZTk)

# Acknowledgments

I am inspired by and take guidance from Kevin Powell and Ania Kubów. 