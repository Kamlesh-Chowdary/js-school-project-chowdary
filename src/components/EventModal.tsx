import React, { useEffect, useRef } from "react";
import type { EventData } from "../interfaces/types";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
      
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault(); 
      }
    };
      document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div 
      id="modal" 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
    >
      <article className="modal-content">
        <button
          id="close-modal"
          onClick={onClose}
          aria-label="Close dialog"
          ref={closeButtonRef}
          title="Close"
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
      </div>
  );
};

export default EventModal;
