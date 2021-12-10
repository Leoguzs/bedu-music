import React from "react";
import { Channel, useChatContext, MessageTeam } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel } from "./";

const ChannellContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  //cuando no tengamos mensages y queramos mostrar algo
  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        Este es el comienzo del historial de tu chat ;)
      </p>
      <p className="channel-empty__second">
        ¡¡¡Envía mensajes, documentos, links, emojis y más!!!
      </p>
    </div>
  );

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannellContainer;
