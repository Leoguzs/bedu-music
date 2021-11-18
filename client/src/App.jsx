import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannellListContainer, ChannellContainer } from "./components";

import "./App.css";

const apiKey = "c775t29nwa2b";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team dark">
        <ChannellListContainer />
        <ChannellContainer />
      </Chat>
    </div>
  );
};

export default App;
