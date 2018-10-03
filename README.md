# tabto, Tab to the next input when user reach the maxLength

Auto-tabulation for your inputs. Tiny helper that focus user on the next field when a field reach maxLength.

```html
<input id="one" data-tab-target="#two" maxlength="10" />
<input id="two" />
```

```javascript
import tabto from '@jolicode/tabto';

tabto(document.getElementById('one'));
```

### Run linter

In our case, we use [StandardJS](https://standardjs.com/) rules.

1. `$ npm run lint` (with npm)
2. `$ yarn run lint` (with yarn)
PS: The lint script will fix all autofixable problems.

**You can checkout a working demo [here](https://codesandbox.io/s/jj7ojxw4yw)**
