# tabto - focus to the next input when maxLength is hit

Auto-tabulation / focus for your HTML Form inputs. 

Tiny helper that focus user on the next field when a field reach maxLength, like pressing <kbd>Tab</kbd> but without stealing the user ability to navigate, copy, paste, <kbd>Shift+Tab</kbd>...

```html
<input id="one" data-tab-target="#two" maxlength="10" />
<input id="two" />
```

```javascript
import tabto from '@jolicode/tabto';

tabto(document.getElementById('one'));
```
**You can checkout a working demo [here](https://codesandbox.io/s/jj7ojxw4yw)**.

## Install

```
$ yarn add @jolicode/tabto
$ npm i @jolicode/tabto
```

## Contributions

### Build

1. `$ yarn run build`

### Run linter

In our case, we use [StandardJS](https://standardjs.com/) rules.

1. `$ yarn run lint`

PS: The lint script will fix all autofixable problems.

### Run tests

1. `$ yarn run test`

### Publish

1. `$ yarn run release`