import { useState, useEffect, useRef } from "react";
import classes from "./chatUi.module.css";

const SESSION_KEY = "zanle_chat_session";

function getOrCreateSession() {
  let key = localStorage.getItem(SESSION_KEY);
  if (!key) {
    key = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, key);
  }
  return key;
}

export default function ChatUi() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! 👋 Soy el asistente de Zanle Studio. ¿En qué puedo ayudarte?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const sessionKey = useRef(getOrCreateSession());

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_key: sessionKey.current, message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Hubo un error. Intentá de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={classes["chat-container"]}>
      {/* Panel */}
      {isOpen && (
        <div className={classes["chat-panel"]}>
          {/* Header */}
          <div className={classes["chat-header"]}>
            <div className={classes["chat-avatar"]}>Z</div>
            <div className={classes["chat-header-info"]}>
              <h4>Zanle Studio</h4>
              <span>
                <span className={classes["online-dot"]} />
                En línea ahora
              </span>
            </div>
            <button
              className={classes["chat-close-btn"]}
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className={classes["chat-messages"]}>
            {messages.map((msg, i) => (
              <div key={i} className={classes["msg-wrapper"]}>
                <div
                  className={
                    msg.role === "assistant"
                      ? classes["msg-bot"]
                      : classes["msg-user"]
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className={classes["msg-wrapper"]}>
                <div className={classes["msg-bot"]}>
                  <span className={classes["typing"]}>
                    <span /><span /><span />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={classes["chat-input-area"]}>
            <input
              className={classes["chat-input"]}
              placeholder="Escribí tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className={classes["chat-send-btn"]}
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Enviar"
            >
              <svg viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Float Button */}
      <button
        className={classes["chat-float-btn"]}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        )}
      </button>
    </div>
  );
}
