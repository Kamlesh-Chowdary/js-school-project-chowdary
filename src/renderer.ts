import type { EventData } from "./interfaces/types.js";
import { openModal } from "./modal.js";

export function renderTimeline(events: EventData[]): void {
  const timeline = document.getElementById("timeline")!;
  let selectedMarker: HTMLElement | null = null;

  const markers = events.map((event, index) => {
    const marker = document.createElement("article");
    marker.classList.add("event-marker");
    marker.innerHTML = `<p>${event.year}</p>`;
    marker.addEventListener("click", () => {
      if (selectedMarker) selectedMarker.classList.remove("selected");
      marker.classList.add("selected");
      selectedMarker = marker;
      openModal(event);
    });

    timeline.appendChild(marker);
    return { marker, event };
  });

  if (markers.length > 0) {
    const first = markers[0]!;
    first.marker.classList.add("selected");
    selectedMarker = first.marker;
    openModal(first.event);
  }
}
