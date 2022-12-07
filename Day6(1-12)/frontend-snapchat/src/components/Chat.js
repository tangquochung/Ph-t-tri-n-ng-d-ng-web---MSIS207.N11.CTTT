import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmotion,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

const Chat = ({ messages }) => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages.new", {
      messages: input,
      name: user.displayName,
      timestamp: new Date().toUTCString(),
      received: true,
    });
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https`} />
        <div className="chat__headerInfo">
          <h3>Dev Help</h3>
          <p>
            Last seen at {""}
            {messages[messages.length - 1]?.timestamp}
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((messages) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__message"
            }`}
          >
            <span className="chat__name">{messages.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
        <div className="chat__footer">
          <InsertEmotion />

          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              type="text"
            />
            <button onClick={sendMessage} type="submit">
              Send a message
            </button>
          </form>
        </div>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
