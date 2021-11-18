import React from "react";

import { AddChannel } from "../assets";

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Error de conexión, por favor espera un momento e intenta de nuevo.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Canales" : "Mensages"} cargando...
        </p>
      </div>
    );
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Canales" : "Mensages directos"}
        </p>
        {/* boton para agregar canal */}
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
