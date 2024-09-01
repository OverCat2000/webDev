// src/components/ChatApp/ChatApp.js
import React, { useState } from "react";
import Draggable from "react-draggable";

const ChatApp = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <div>
      {isMinimized ? (
        <Draggable>
          <div
            className="fixed bottom-4 right-4 cursor-pointer w-16 h-16 bg-blue-500 text-white rounded-full flex justify-center items-center"
            onClick={() => setIsMinimized(false)}
          >
            💬
          </div>
        </Draggable>
      ) : (
        <div className="fixed bottom-4 right-4 w-80 h-96 p-4 border border-gray-300 rounded-lg bg-white shadow-lg flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Assistant</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-500 hover:text-gray-700"
            >
              ⨉
            </button>
          </div>
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className="mb-2 p-2 rounded bg-gray-200">
                <strong>{message.sender}:</strong> {message.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
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
