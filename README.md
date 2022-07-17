# Joker

cmd --> `yarn create react-app joke-app --template typescript `

cmd --> ` yarn add styled-components `

# Font (Quicksand)
  
``font-family: 'Quicksand', sans-serif;  ``

# BG Color

https://mycolor.space/gradient

```
background-image: linear-gradient(to right top, #340c34, #281e45, #152d50, #023954, #094353);
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;
```

# TypeScript 

https://styled-components.com/docs/api#typescript

TypeScript 'i styled componentte kullanabilmek için

## Create a declarations file

Creating a declarations file. Let's name it styled.d.ts for example.

joke-app --> stayled.d.ts -->

```
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
```

## Create a theme

```
// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};

export { myTheme };
```

## Error

` Cannot find module 'styled-components' or its corresponding type declarations.ts(2307) `

cmd --> ` $ yarn add @types/styled-components `

## ThemeProvider

index.tsx

```
import { ThemeProvider } from "styled-components";
import { myTheme } from './my-theme';
```

```
  <React.StrictMode>

    <ThemeProvider theme={myTheme}>

      <App />

    </ThemeProvider>

  </React.StrictMode>
```

# JokeAPI 

https://sv443.net/jokeapi/v2/

# Axios

`yarn add axios`