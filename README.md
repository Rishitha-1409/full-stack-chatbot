# Full-Stack Chatbot with FastAPI and React

A simple web-based AI chatbot built using React, FastAPI, and OpenRouter. The application provides a conversational interface where users can send messages and receive AI-generated responses.

## Technologies Used

- React
- Vite
- FastAPI
- Python
- OpenAI Python SDK
- OpenRouter API
- HTML
- CSS
- JavaScript

## Project Structure

```text
full-stack-chatbot/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

### Backend Setup

1. Go to the backend folder
   cd backend

2. Create a virtual environment
   python -m venv venv

3. Activate the virtual environment on Windows
   venv\Scripts\activate

4. Install the required packages
   pip install -r requirements.txt

5. Configure the API key
   Create a .env file inside the backend folder and add the OpenRouter API key:
   OPENROUTER_API_KEY=YOUR_API_KEY
   Replace YOUR_API_KEY

6. Start the FastAPI server
   uvicorn main:app --reload

The backend will run at:
http://127.0.0.1:8000

FastAPI API documentation is available at:
http://127.0.0.1:8000/docs
(Can be used for testing)

### Frontend Setup

Open another terminal.

1. Go to the frontend folder
   cd frontend

2. Install dependencies
   npm install

3. Start the React development server
   npm run dev

The frontend will run at:
http://localhost:5173

### How it works

The user enters a message in the React chatbot interface.
React immediately displays the user's message.
React sends the message to the FastAPI /chat endpoint using an HTTP POST request.
FastAPI receives the message.
FastAPI sends the message to OpenRouter using the OpenAI Python client.
The openrouter/free model router processes the request and generates a response.
FastAPI returns the response to the React frontend.
React displays the AI-generated response in the conversation.

### API Endpoint

POST /chat

#### Request

```json
{
  "message": "Hello"
}
```

#### Response

```json
{
  "reply": "Hello! How can I help you?"
}
```
