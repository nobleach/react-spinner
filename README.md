# LoadingSpinner (React Component)

Zero configuration(required) loading spinner.

[Live demo](https://rawgit.com/nobleach/react-spinner/master/example/index.html) from the example folder. (To build it locally, clone this repo, `npm install && npm start` or `yarn && yarn start` then open http://localhost:7000/example/)

## Install

Just import the `<LoadingSpinner />` component.

```javascript
    import LoadingSpinner from 'path/to/LoadingSpinner';
```

This component assumes that you're using CSS Modules.

## API

#### &lt;LoadingSpinner />
Adds the spinner, which centers itself based on its container's dimensions. If those are not predefined, simply manually center it by adding more style rules to the exposed `.custom-spinner` class which is in the included `LoadingSpinner.css` file.

A convenience property for setting the spinner's bar color has been added.
Simply add any CSS color as an attribute:
```javascript
<LoadingSpinner barColor="green" />
```
or
```javascript
<LoadingSpinner barColor="#c70ab5" />
```

You can also override the `.custom-spinner`'s `width` and `height` if you want a bigger or smaller spinner. Everything resizes correctly.

## License

MIT.
