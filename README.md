# jacksonjaoButtons

Button library, a standard basic button and a circular button with a background image or icon.

This library has a directive called libColor. If you wanna know more about this library go to
[Jacksonjao library](http://jacksonjao.github.io/portfolio/library/) 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install jacksonjaoButtons.

```bash
npm i jacksonjao-buttons
```

## Usage

```html
<lib-basic-button title="Botón" (action)="buttonAction($event)"></lib-basic-button>

<lib-circle-button [image]="'image'" (action)="buttonAction($event)"></lib-circle-button>
```

```typescript
import {JacksonjaoButtonsModule} from './jacksonjao-buttons.module'; 

[JacksonjaoButtonsModule]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
