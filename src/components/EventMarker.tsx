import React from "react";

interface EventMarkerProps {
  year: string | number;
  onClick: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ year, onClick }) => {
  return (
    <button
      className={`event-marker`}
      onClick={onClick}
      type="button"
    >
      {year}
    </button>
  );
};

export default EventMarker;
