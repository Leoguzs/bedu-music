import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannellListContainer, ChannellContainer, Auth } from "./components";

import "stream-chat-react/dist/css/index.css";
import "./App.css";

import Header from "./components/globals/header/Header";

import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Home from "./components/music/Home";
import Footer from "./components/globals/footer/Footer";



const cookies = new Cookies();

const apiKey = "c775t29nwa2b";
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if (authToken) {
    client.connectUser(
        {
            id: cookies.get("userId"),
            name: cookies.get("username"),
            fullName: cookies.get("fullName"),
            image: cookies.get("avatarURL"),
            hashedPassword: cookies.get("hashedPassword"),
            phoneNumber: cookies.get("phoneNumber"),
        },
        authToken
    );
}

const App = () => {
    const [createType, setCreateType] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if (!authToken) return <Auth />;

    return (
        <Router>
            <Header client={client} />

            <Switch>
                <Route path="/" element={<Home />}>
                </Route>


                <Route path="/comunidad" element={
                    <div className="app__wrapper">
                        <Chat client={client} theme="team dark">
                            <ChannellListContainer
                                isCreating={isCreating}
                                setIsCreating={setIsCreating}
                                setCreateType={setCreateType}
                                setIsEditing={setIsEditing}
                            />
                            <ChannellContainer
                                isCreating={isCreating}
                                setIsCreating={setIsCreating}
                                isEditing={isEditing}
                                setIsEditing={setIsEditing}
                                createType={createType}
                            />
                        </Chat>
                    </div>

                }>
                </Route>

                {/* <Route component={PageNotFound} /> */}
            </Switch>
            <Footer />

        </Router>
    );
};

export default App;
