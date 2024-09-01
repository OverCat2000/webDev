import React, { useState, useEffect, useRef } from "react";

const ChatApp = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize WebSocket connection
    socketRef.current = new WebSocket("ws://localhost:8000/ws/chat/");

    socketRef.current.onmessage = (event) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: event.data, from: "bot" },
      ]);
      setLoading(false);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return; // Prevent sending empty messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, from: "user" },
    ]);
    setLoading(true);
    socketRef.current.send(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {isMinimized ? (
        <div
          className="fixed bottom-4 right-4 cursor-pointer w-16 h-16 bg-blue text-yellow rounded-full flex justify-center items-center"
          onClick={() => setIsMinimized(false)}
        >
          💬
        </div>
      ) : (
        <div className="fixed bottom-4 right-4 w-80 h-96 p-4 border border-gray-900 rounded-lg bg-red shadow-lg flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Assistant</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-800 hover:text-gray-700"
              aria-label="Minimize chat"
            >
              ⨉
            </button>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2 p-2 rounded bg-gray-800">
                <strong>{msg.from}:</strong> {msg.text}
              </div>
            ))}
            {loading && <div className="p-2 text-center">Loading...</div>}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-900 bg-deep-blue rounded-l-lg focus:outline-none"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              aria-label="Type a message"
            />
            <button
              onClick={sendMessage}
              className="bg-blue text-white p-2 rounded-r-lg hover:bg-gray-800 focus:outline-none"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
