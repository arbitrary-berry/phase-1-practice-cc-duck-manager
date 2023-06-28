## Deliverable One

When the page loads, fetch the ducks and display each duck image in the `#duck-nav`. You may need to do something to make sure your `script` tag is working in the HTML first...
[X] add event for page load
[X] on page load fetch ducks
[X] create a loop

## Deliverable Two

When a user clicks one of the duck images, it shows the duck's name, the image, and a likes button with the number of likes in the `#duck-display`like so:

```html
<div id="duck-display">

  <h2>Duck Shrute</h2>

  <img src="https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/246/9133/Computer-Geek-Rubber-Duck-Schanables-3__49617.1644583506.jpg?c=2" />

  <button>3 likes</button>

</div>
```

If another image is clicked in the `#duck-nav` it replaces the previous name, image, and button with the proper content.
[] add click event to duck nav
[] renderDetail of in duck display
[] append to the "#duck-display"

## Deliverable Three

When the likes button is clicked, it increments the number of likes displayed for that duck. Be sure that the button continues to read "X likes".

## Deliverable Four

When the `#new-duck-form` is submitted, it generates a new duck image in the `#duck-nav`. When clicked, it acts like the other images in the `#duck-nav` and shows a name, image, and like button in the `#duck-display`. No persistence is needed. A duck starts with 0 likes.