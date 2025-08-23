import React from "react";
import type { EventData } from "../interfaces/types";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return ( 
      <article className="modal-content">
        <button
          id="close-modal"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 id="modal-title">{event.title}</h2>

        <figure className="modal-figure">
          <img
            id="modal-image"
            src={event.imageURL}
            alt={`Image for ${event.title}`}
          />
          <figcaption id="modal-description">{event.description}</figcaption>
        </figure>
      </article>
  );
};

export default EventModal;
