# GREEN-API Web Client

Single-page React + Vite client for calling GREEN-API methods `getSettings`, `getStateInstance`, `sendMessage`, and `sendFileByUrl`.

## Stack

- React 19
- Vite
- Axios
- Plain CSS with separated style layers

## Features

- Instance credentials form for `idInstance` and `apiTokenInstance`
- Payload fields for `chatId`, `message`, `fileUrl`, and `fileName`
- Loading state for the active button
- UI error feedback
- Read-only response panel with formatted JSON
- Shared `initialState`
- Shared input change handler
- `buildApiUrl` helper
- `validateFields` helper
- `formatJsonResponse` helper
- Button config through a constants array
- Adaptive two-column layout close to the test mockup

## Project structure

```text
src/
├── api/
│   └── greenApi.js
├── components/
│   ├── CredentialsForm.jsx
│   ├── MessageForm.jsx
│   ├── FileForm.jsx
│   ├── ActionButtons.jsx
│   └── ResponsePanel.jsx
├── constants/
│   └── apiMethods.js
├── utils/
│   ├── validators.js
│   └── formatResponse.js
├── styles/
│   ├── app.css
│   ├── forms.css
│   ├── buttons.css
│   └── response.css
├── App.jsx
└── main.jsx
```

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

## Build

```bash
npm run build
```

## Environment variables

```env
VITE_GREEN_API_URL=https://api.green-api.com
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Select the `Vite` framework preset.
4. Add `VITE_GREEN_API_URL=https://api.green-api.com` in project environment variables.
5. Deploy.

Default Vercel settings:

- Build command: `npm run build`
- Output directory: `dist`
