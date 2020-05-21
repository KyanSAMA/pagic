# Pagic

The easiest way to generate static html page from markdown, built with Deno! 🦕

## Features

- Markdown + Layout => HTML
- Component + Layout => HTML
- Copy static files
- Sub pages and layouts
- Front matter

## Getting started

### Installation

```bash
# Install deno https://deno.land/#installation
curl -fsSL https://deno.land/x/install/install.sh | sh
# Install pagic
deno install --unstable --allow-read --allow-write --allow-net https://raw.githubusercontent.com/xcatliu/pagic/master/pagic.ts
```

### Markdown + Layout => HTML

Let's say we have a project like this:

```
docs/
├── public/
└── src/
    ├── _layout.tsx
    └── index.md
```

The `src/_layout.tsx` is a simple react component:

```tsx
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';

const Layout = ({ title, content }: any) => (
  <html>
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </head>
    <body>{content}</body>
  </html>
);

export default Layout;
```

The `src/index.md` is a simple markdown file:

```md
# Pagic

The easiest way to generate static html page from markdown, built with Deno! 🦕
```

Then run

```bash
pagic run
```

We'll get an `index.html` file in `public` directory:

```
docs/
├── public/
|   └── index.html
└── src/
    ├── _layout.tsx
    └── index.md
```

The content should be:

```html
<html>
  <head>
    <title>Pagic</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <article>
      <h1 id="pagic">Pagic</h1>
      <p>The easiest way to generate static html page from markdown, built with Deno! 🦕</p>
    </article>
  </body>
</html>
```

Here we use [markdown-it](https://github.com/markdown-it/markdown-it) to parse the markdown file.

### Component + Layout => HTML

A react component can also be built to html:

```
docs/
├── public/
|   ├── index.html
|   └── hello.html
└── src/
    ├── _layout.tsx
    ├── index.md
    └── hello.tsx
```

Here we build `src/helle.tsx` to `public/hello.html`.

`src/helle.tsx` is a simple react component:

```tsx
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';

export default function () {
  return <h1>Hello World</h1>;
}
```

And `public/hello.html` would be:

```tsx
<html>
  <head>
    <title></title>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

### Copy static files

If there are other static files which are not ended with `.{md|tsx}` or start with `_`, we will simply copy them:

```
docs/
├── public/
|   ├── assets
|   |   └── index.css
|   ├── index.html
|   └── hello.html
└── src/
    ├── assets
    |   └── index.css
    ├── _layout.tsx
    ├── _partial.tsx
    ├── index.md
    └── hello.tsx
```

### Sub pages and layouts

We can have sub directory which contains markdown or component.

Sub directory can also have a `_layout.tsx` file.

For each markdown or component, it will walk your file system looking for the nearest `_layout.tsx`. It starts from the current directory and then moves to the parent directory until it finds the `_layout.tsx`.

```
docs/
├── public/
|   ├── assets
|   |   └── index.css
|   ├── index.html
|   └── hello.html
|   └── sub
|       └── index.html
└── src/
    ├── assets
    |   └── index.css
    ├── _layout.tsx
    ├── _partial.tsx
    |── index.md
    └── sub
        ├── _layout.tsx
        └── index.md
```

### Front matter

Front matter allows us add extra meta data to markdown:

```markdown
---
author: xcatliu
published: 2017-03-02
---

# Pagic

The easiest way to generate static html page from markdown, built with Deno! 🦕
```

every item in the front matter will pass to the `_layout.tsx` as the props:

```tsx
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';

const Layout = ({ title, content, author, published }: any) => (
  <html>
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    </head>
    <body>
      {content}
      <footer>
        Author: ${author}, Published: ${published}
      </footer>
    </body>
  </html>
);

export default Layout;
```

## Use Pagic as cli

### `pagic run`

We can use `pagic run` to build static page, there are some options while using run command:

```bash
pagic run [options]

# --watch  watch src dir change
# --serve  serve public dir
# --port   override default port
```

## LICENSE

[MIT](./LICENSE)

---

Have fun with pagic!
