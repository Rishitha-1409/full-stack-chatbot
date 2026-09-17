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

Backend Setup
1. Go to the backend folder
cd backend
2. Create a virtual environment
python -m venv venv
3. Activate the virtual environment on Windows
venv\Scripts\activate
4. Install the required packages
pip install -r requirements.txt
5. Configure the API key
Create a .env file inside the backend folder and add your OpenRouter API key:
OPENROUTER_API_KEY=YOUR_API_KEY

Replace YOUR_API_KEY

6. Start the FastAPI server
uvicorn main:app --reload

The backend will run at:
http://127.0.0.1:8000

FastAPI API documentation is available at:
http://127.0.0.1:8000/docs

Frontend Setup
Open another terminal.
1. Go to the frontend folder
cd frontend
2. Install dependencies
npm install
3. Start the React development server
npm run dev
The frontend will run at:
http://localhost:5173

How It Works
The user enters a message in the React chatbot interface.
React immediately displays the user's message.
React sends the message to the FastAPI /chat endpoint using an HTTP POST request.
FastAPI receives the message.
FastAPI sends the message to OpenRouter using the standard OpenAI Python client.
The openrouter/free model router selects an available free LLM.
The LLM generates a response.
FastAPI returns the response to the React frontend.
React displays the AI-generated response in the conversation.
API Endpoint
POST /chat

Request:

{
  "message": "Hello"
}

Response:

{
  "reply": "Hello! How can I help you?"
}

Features

Full-screen chatbot interface
Conversational chat history
User and AI messages
Scrollable message area
Immediate display of user messages
typing indicator
Error handling
Markdown-formatted AI responses
Support for headings, lists, tables, bold text, and code blocks
Clear chat option
Responsive user interface
API key stored using environment variables

Security
The OpenRouter API key is stored in a .env file and is excluded from GitHub using .gitignore.
The API key should never be exposed in the React frontend or committed to the GitHub repository.

Testing
The backend can be tested using the FastAPI Swagger documentation:
http://127.0.0.1:8000/docs

Use the POST /chat endpoint to send a test message and verify that the backend receives and processes the request correctly.
```
