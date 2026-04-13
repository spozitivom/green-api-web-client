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
- Dedicated buttons for all required GREEN-API methods
- Loading state per active action
- Error feedback inside the UI
- Read-only response panel with formatted JSON
- Adaptive card-based layout for desktop and mobile

## Project structure

```text
green-api-web-client/
├── public/
├── src/
│   ├── api/
│   │   └── greenApi.js
│   ├── components/
│   │   ├── ActionButtons.jsx
│   │   ├── CredentialsForm.jsx
│   │   ├── FileForm.jsx
│   │   ├── MessageForm.jsx
│   │   └── ResponsePanel.jsx
│   ├── styles/
│   │   ├── app.css
│   │   ├── buttons.css
│   │   └── forms.css
│   ├── utils/
│   │   ├── formatters.js
│   │   └── validation.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── package.json
└── vite.config.js
```

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env
```

3. Start the dev server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Environment variables

Create `.env` with:

```env
VITE_GREEN_API_URL=https://api.green-api.com
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set the framework preset to `Vite`.
4. Add the environment variable `VITE_GREEN_API_URL=https://api.green-api.com`.
5. Deploy the project.

The default Vercel build settings:

- Build command: `npm run build`
- Output directory: `dist`

## API usage notes

- `sendMessage` uses `chatId` and `message`
- `sendFileByUrl` uses `chatId`, `fileUrl`, and `fileName`
- The API response area always stays read-only and shows formatted JSON
