# Random Shuffle

This project was a simple way for individuals to generate a random permutation of a list
of entries. It was inspired by a common need for engineering teams I have worked on to
have one team member perform some specific action each week (pick a lunch spot, pick a
song track, etc.). It allows for users to upload `.csv` files or entries separated by
new lines. Users are also able to download the contents of the list after it has been
generated as well. It is written in Typescript and was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app). For its components, it
makes use of the [Material UI](https://material-ui.com) library, and uses the
[file-saver](https://www.npmjs.com/package/file-saver) package for the interactions with
the file system.

## Code Organization

The code for this single page application (SPA) is broken down into several modular
elements.

### `Constants`

This is where the constant content of the project is stored. Due to its relatively small
size, there are only a few files in this directory.

### `Display`

This directory stores the main components of the app, made to interact with the users.
In it you can find files handling the input and output functionality of the application,
as well as for the introduction to the application, the footer, and the popups which can
appear.

### `App.tsx`

This is the main entrypoint of the application. It outlines how each of the display
elements should interact with one another. It provides the wiring between the elements.

## Code Deployment

This code is deployed to [Github Pages](https://pages.github.com), making use of the
[`gh-pages`](https://www.npmjs.com/package/gh-pages) package. If you look into the
`package.json`'s `scripts` section, you will see two entries added beyond the ones which
are added by default when using `create-react-app`. These allow for it to be deployed by
running `npm run deploy`.
