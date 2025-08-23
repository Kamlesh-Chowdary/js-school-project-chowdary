import React, { useEffect, useState } from "react";
import { fetchEvents } from "./utils/fetchEvents";
import type { EventData } from "./interfaces/types";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";

const App: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fetch events on mount
  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data);
        if (data.length > 0) setSelectedEvent(data[0]); // select first event by default
      })
      .catch((error) => console.error("Error loading events:", error));
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Update dark mode on body class
  useEffect(() => {
    if (isDarkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDarkMode]);

  // Handle event selection from Timeline
  const handleSelectEvent = (event: EventData) => {
    setSelectedEvent(event);
  };

   const closeModal = () => {
    setSelectedEvent(null);
   }
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Timeline events={events} onSelect={handleSelectEvent} selectedEvent={selectedEvent} />
      <main>
        {selectedEvent && <EventModal event={selectedEvent}  onClose={closeModal}/>}
      </main>
    </>
  );
};

export default App;
