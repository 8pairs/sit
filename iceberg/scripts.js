
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.querySelector("#x");
const elements = document.querySelectorAll(".a");

// Attach event listener to each element
elements.forEach((el) => {
  el.addEventListener("click", () => {
    const text = el.getAttribute("data-text");
    modalText.textContent = text; // dynamically change modal text
    modal.style.display = "block"; // show modal
    const title = el.getAttribute("name");
    modalTitle.textContent = title; // dynamically change modal title
    })
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
