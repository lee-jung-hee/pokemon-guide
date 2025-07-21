import React from "react";
import "./Modal.css";

function Modal({ pokemon, onClose }) {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{pokemon.name}</h2>
          <span>#{String(pokemon.id)}</span>
        </div>
        <button className="modal-close-button" onClick={onClose}>
          닫기
        </button>
        <div className="modal-body">
          <div className="modal-images">
            <img src={pokemon.front} alt={`${pokemon.name} front`} />
            <img src={pokemon.back} alt={`${pokemon.name} back`} />
          </div>
          <p className="modal-description">{pokemon.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
