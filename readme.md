# Rollup Typescript library template

A simple Vue3 TypeScript library template. Quick to start dev, build a Vue3 Component library.

Please use pnpm do this.

```sh
pnpm i
```

# Usage

### Package

Bundle your source code via tsc, rollup.

```
npm run package
```

### Dev

Start dev mode by Vite.

```
npm run dev
```

### Deploy

Deploy example to GitHub Pages.

```
npm run deploy
npm run publish
```

# Additional

## PostCSS & CSS Module

Enable default now.

Nest selector is supported too.

To build css extract a file not bundle into js, un-comment this.

```ts
css({
  extract: true,
})
```
