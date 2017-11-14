<div align="center">

## 🍃 Leaf-UI
#### A react component library built using styled-components
#### [WARNING: This is a work in progress, API is subject to change]

</div>

# Installation

``` bash
npm install -S leaf-ui
```

# Usage

Wrap your App component with ThemeProvider and pass it the leaf-ui theme (or override it with custom a theme)
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme as leafUiTheme } from 'leaf-ui';
import App from './App';

ReactDOM.hydrate(
  <ThemeProvider theme={leafUiTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
```

Import and use the components in your App.js
```js
// App.js
import React from 'react';
import { Button } from 'leaf-ui';

const App = () => (
  <Button>
    Leaf-UI
  </Button>
);

export default App;
```

# Contribute

```
npm install
npm start
```

The Storybook will be available on port `http://localhost:9000/`