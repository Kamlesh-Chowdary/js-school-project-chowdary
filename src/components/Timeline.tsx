import React from "react";
import type { EventData } from "../interfaces/types";
import EventMarker from "./EventMarker";

interface TimelineProps {
  events: EventData[];
  onSelect: (event: EventData) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onSelect  }) => {
  return (
    <section id="timeline" aria-label="Timeline">
      {events.map((event) => (
        <EventMarker
          key={event.year}
          year={event.year}
          onClick={() => onSelect(event)}
        />
      ))}
    </section>
  );
};

export default Timeline;
