import React from "react";

interface EventMarkerProps {
  year: string | number;
  onClick: () => void;
   isActive?: boolean;
}

const EventMarker: React.FC<EventMarkerProps> = ({ year, onClick, isActive }) => {
  return (
    <button
      className={`event-marker${isActive ? " selected" : ""}`}
      onClick={onClick}
      type="button"
      aria-pressed={isActive} // Indicates the active state
      aria-label={`Select event for the year ${year}`}
    >
      {year}
    </button>
  );
};

export default EventMarker;
