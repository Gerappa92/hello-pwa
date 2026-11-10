const STORAGE_KEY = "hello-pwa-count";

const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");

function readCount() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const parsed = Number.parseInt(raw ?? "0", 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

let count = readCount();

function render() {
  countEl.textContent = String(count);
}

function update(next) {
  count = next;
  localStorage.setItem(STORAGE_KEY, String(count));
  render();
}

document.getElementById("inc").addEventListener("click", () => update(count + 1));
document.getElementById("dec").addEventListener("click", () => update(count - 1));
document.getElementById("reset").addEventListener("click", () => update(0));

render();

function renderStatus() {
  statusEl.textContent = navigator.onLine
    ? "Online · dane zapisane lokalnie"
    : "Offline · aplikacja działa z pamięci podręcznej";
}

window.addEventListener("online", renderStatus);
window.addEventListener("offline", renderStatus);
renderStatus();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Rejestracja service workera nie powiodła się:", error);
    });
  });
}