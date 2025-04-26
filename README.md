# Startify Backend

This is the backend for the Startify Idea Lab application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
PORT=3001
OPENAI_API_KEY=your_openai_api_key_here
```

3. Build the project:
```bash
npm run build
```

4. Start the development server:
```bash
npm run dev
```

## Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Set environment variables in Vercel dashboard:
- Go to your project settings
- Add the following environment variables:
  - `PORT`
  - `OPENAI_API_KEY`

## API Endpoints

- `GET /api/ideas/generate` - Generate a random startup idea
- `POST /api/ideas/refine` - Refine an idea using AI

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server 