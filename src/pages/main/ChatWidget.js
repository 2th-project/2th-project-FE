import React, { useState } from "react";
import styles from "./ChatWidget.module.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { user: "사용자", text: input };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
    }
  };

  return (
    <>
      <div className={styles.chatButtonContainer}>
        <button className={styles.chatButton} onClick={toggleChat}>
          {isOpen ? "💬 채팅 닫기" : "💬 채팅 시작"}
        </button>
      </div>

      {isOpen && (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <img src="/assets/logo.png" className={styles.logo} alt="로고" />
              <h3>하나로 복지 상담원</h3>
            </div>
            <button className={styles.closeButton} onClick={toggleChat}>
              ✖
            </button>
          </div>

          <div className={styles.chatBody}>
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.user === "사용자"
                      ? styles.userMessage
                      : styles.otherMessage
                  }
                >
                  <strong>{msg.user}:</strong> {msg.text}
                </div>
              ))
            ) : (
              <p>안녕하세요! 하나로 복지 입니다. 무엇을 도와드릴까요?</p>
            )}
          </div>

          <div className={styles.chatFooter}>
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>전송</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
