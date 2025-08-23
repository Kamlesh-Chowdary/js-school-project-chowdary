import React from "react";
import type { EventData } from "../interfaces/types";
import EventMarker from "./EventMarker";

interface TimelineProps {
  events: EventData[];
  onSelect: (event: EventData) => void;
  selectedEvent: EventData | null;
}

const Timeline: React.FC<TimelineProps> = ({ events, onSelect, selectedEvent  }) => {
  return (
    <section id="timeline" aria-label="Timeline of Events">
      {events.map((event) => (
        <EventMarker
          key={event.year}
          year={event.year}
          onClick={() => onSelect(event)}
          isActive={selectedEvent?.year === event.year}
          aria-label={`Event in ${event.year}`}
        />
      ))}
    </section>
  );
};

export default Timeline;
