import type { EventData } from "./interfaces/types.js";

const modal = document.getElementById("modal")!;
const modalTitle = document.getElementById("modal-title")!;
const modalImage = document.getElementById("modal-image") as HTMLImageElement;
const modalDescription = document.getElementById("modal-description")!;
const closeModalBtn = document.getElementById("close-modal")!;

export function openModal(event: EventData): void {
  modalTitle.textContent = event.title;
  modalImage.src = event.imageURL;
  modalDescription.textContent = event.description;
  modal.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
