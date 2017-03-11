# LoadingSpinner (React Component)

Zero configuration(required) loading spinner.

[Live demo](https://rawgit.com/nobleach/react-spinner/master/example/index.html) from the example folder. (To build it locally, clone this repo, `npm install && npm start` or `yarn && yarn start` then open http://localhost:7000/example/)

## install

Plain old script tag:
```html
<script src="path/to/react-spinner/build/index.js"></script>
```

(Compatible with CommonJS, e.g. Browserify.)

The CSS file:
```html
<link rel="stylesheet" type="text/css" href="path/to/LoadingSpinner.css">
```

The spinner

## API

#### &lt;LoadingSpinner />
Adds the spinner, which centers itself based on its container's dimensions. If those are not predefined, simply manually center it by adding more style rules to the exposed `.custom-spinner` class [here](https://github.com/chenglou/react-spinner/blob/master/react-spinner.css#L1-L7).

A convenience property for setting the spinner's bar color has been added.
Simply add any CSS color as an attribute:
`<LoadingSpinner barColor="green" />` or `<LoadingSpinner barColor="#c70ab5" />`.

You can also override the `.custom-spinner`'s `width` and `height` if you want a bigger or smaller spinner. Everything resizes correctly.

## License

MIT.
