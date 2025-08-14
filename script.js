document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("close-modal");
  let selectedMarker = null;
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const toggleButton = document.getElementById("theme-toggle");

  toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        // Toggle emoji
        toggleButton.textContent = isDark ? "🌞" : "🌙";
    });

  fetch("data/events.json")
    .then(response => response.json())
    .then(events => {
        const markers = [];

        events.forEach((event, index) => {
            const marker = document.createElement("article");
            marker.classList.add("event-marker");
            marker.innerHTML = `<p>${event.year}</p>`;
            marker.addEventListener("click", () => {
                if (selectedMarker) {
                selectedMarker.classList.remove("selected");
                }
                marker.classList.add("selected");
                selectedMarker = marker;
                openModal(event);
            });
            timeline.appendChild(marker);
            markers.push({ marker, event });
        });
        if (markers.length > 0) {
            const first = markers[0];
            first.marker.classList.add("selected");
            selectedMarker = first.marker;
            openModal(first.event);
        }
    })
    .catch(error => {
      console.error("Error loading events:", error);
    });

  function openModal(event){
    modalTitle.textContent = event.title;
    modalImage.setAttribute("src", event.imageURL);
    modalDescription.textContent = event.description;
    modal.classList.remove("hidden");
  }

  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

});
