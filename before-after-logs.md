# Before / After Logs

## Before

### Git

```text
## main...origin/main
```

### Files

```text
vite.config.js
package.json
index.html
package-lock.json
README.md
eslint.config.js
src/main.jsx
src/index.css
public/icons.svg
public/favicon.svg
src/App.css
src/App.jsx
src/assets/vite.svg
src/assets/react.svg
src/assets/hero.png
```

### App state

```text
Default Vite + React starter screen with demo counter and documentation links.
```

## After

### Branch

```text
feature/green-api-ui
```

### Verification

```text
npm run lint
> eslint .
```

```text
npm run build
> vite build
vite v8.0.8 building client environment for production...
transforming... 77 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.47 kB | gzip: 0.30 kB
dist/assets/index-Dm-aDdw7.css    4.70 kB | gzip: 1.77 kB
dist/assets/index-XQj6z4pN.js   234.58 kB | gzip: 75.99 kB
built in 167ms
```

### Result

```text
GREEN-API single-page client with:
- getSettings
- getStateInstance
- sendMessage
- sendFileByUrl
- loading states
- UI error handling
- readonly response panel
- responsive card layout
- README deployment guide
```
