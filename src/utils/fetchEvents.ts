import type { EventData } from "../interfaces/types";

export async function fetchEvents(): Promise<EventData[]> {
  const response = await fetch("./src/data/events.json");
  if (!response.ok) throw new Error("Failed to load events");
  return response.json();
}
