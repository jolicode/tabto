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

You can checkout a working demo [here](https://codesandbox.io/s/jj7ojxw4yw)