# Roommate Vibe Check

A full-stack application that helps you evaluate roommate compatibility using GPT-4.

## Folder Structure

```
.
├── frontend/                  # React + Tailwind front-end
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── RoommateForm.jsx
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/                   # Express.js back-end
│   ├── routes/
│   │   └── generateProfile.js
│   ├── server.js
│   └── package.json
├── .env                       # Store API keys (e.g., OPENAI_API_KEY)
├── .gitignore
├── LICENSE
└── README.md
```

- **RoommateForm.jsx** is the main React component for collecting user input.
- **generateProfile.js** defines the API route that integrates with GPT-4 to generate roommate profiles.
- **.env** contains environment variables like your OpenAI API key.

## Setup

1. Install dependencies for both `frontend` and `backend` using `npm install`.
2. Run the Express server in `backend` with `npm start`.
3. Start the React development server in `frontend` with `npm start`.

## GPT-4 Integration

The back-end route `generateProfile.js` is where you would call the GPT-4 API using the key defined in `.env`.
