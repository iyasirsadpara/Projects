import { useState } from "react";
import ChatboxIcon from "./ChatboxIcon";

const ChatApp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hey there how i can help you",
      sender: "bot",
    },
  ]);

  // 🔥 simple reply logic
  const getBotReply = (userMsg) => {
    const msg = userMsg.toLowerCase();

    if (msg.includes("account")) {
      return "You can open an account by visiting nearest branch.";
    } 
    else if (msg.includes("loan")) {
      return "We offer different types of loans. Please visit our website.";
    } 
    else if (msg.includes("card")) {
      return "You can apply for debit/credit card through our branch.";
    } 
    else if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello! How can I assist you today?";
    } 
    else if ((msg.includes("what") && msg.includes("name")) || msg.includes("is") ){
      return "Yasir Hussain";
    }
    else {
      return <a href="https://chatgpt.com/ " target="blank">click here for more update</a>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const userMessage = {
      text: message,
      sender: "user",
    };

    // add user message
    setMessages((prev) => [...prev, userMessage]);

    // bot reply
    const botReply = {
      text: getBotReply(message),
      sender: "bot",
    };

    // delay for realistic feel
    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setMessage("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-popup" onClick={(e) => e.stopPropagation()}>

        {/* chatheader */}
        <div className="chat-header">
          <div className="header-info">
            <ChatboxIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* chat body */}
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "bot" ? "bot-message" : "user-message"
              }`}
            >
              {msg.sender === "bot" && <ChatboxIcon />}
              <p className="message-text">{msg.text}</p>
            </div>
          ))}
        </div>

        {/* chat-footer */}
        <div className="chat-footer">
          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Message..."
              className="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              className="material-symbols-rounded send-btn"
            >
              arrow_upward
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ChatApp;