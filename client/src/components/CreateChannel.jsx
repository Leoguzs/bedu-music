import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { UserList } from "./";
import { CloseCreateChannel } from "../assets";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (event) => {
    event.prenventDefault();

    setChannelName(event.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Nombre</p>
      <input
        value={channelName}
        onChange={handleChange}
        placeholder="nombre-del-canal"
      />
      <p>Agregar Miembros</p>
    </div>
  );
};

const CreateChannel = ({ createType, setIsCreating }) => {
  const [channelName, setChannelName] = useState("");

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {" "}
          {createType === "team"
            ? "Crear Nuevo Canal"
            : "Enviar Mensaje Directo"}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === "team" && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
    </div>
  );
};

export default CreateChannel;
