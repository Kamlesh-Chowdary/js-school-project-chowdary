import type { EventData } from "./interfaces/types.js";

export async function fetchEvents(): Promise<EventData[]> {
  const response = await fetch("events.json");
  console.log(response)
  if (!response.ok) throw new Error("Failed to load events");
  return response.json();
}