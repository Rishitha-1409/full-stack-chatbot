import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Automatically scroll to the newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (event) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || loading) {
      return;
    }

    // Immediately show user's message
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        role: "user",
        text: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong");
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "bot",
          text: "Sorry, I couldn't process your request. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="chat-header">
        <div className="header-left">
          <div className="bot-icon">✦</div>

          <div>
            <h1>AI Chatbot</h1>
            <p>Your AI assistant</p>
          </div>
        </div>

        <button
          className="clear-button"
          onClick={clearChat}
          disabled={messages.length === 0}
        >
          Clear chat
        </button>
      </header>

      {/* Chat messages */}
      <main className="chat-messages">

        {messages.length === 0 ? (
          <div className="welcome-screen">
            <div className="welcome-icon">✦</div>
            <h2>How can I help you?</h2>
            <p>Ask me anything to get started.</p>
          </div>
        ) : (
          <div className="messages-wrapper">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`message-row ${message.role}`}
              >
                <div className="message-content-wrapper">

                  <div className="message-name">
                    {message.role === "user" ? "You" : "AI"}
                  </div>

                  <div className="message-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  </div>

                </div>
              </div>
            ))}

            {loading && (
              <div className="message-row bot">
                <div className="message-content-wrapper">

                  <div className="message-name">AI</div>

                  <div className="typing-indicator">
                    Thinking
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>
        )}

      </main>

      {/* Input */}
      <footer className="input-section">
        <form className="chat-input" onSubmit={sendMessage}>

          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Message AI..."
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            ↑
          </button>

        </form>
      </footer>

    </div>
  );
}

export default App;