const searchEngines = [
  { id: "google", title: "Google", searchUrl: "https://google.com/search?q=" },
  {
    id: "duckduckgo",
    title: "DuckDuckGo",
    searchUrl: "https://duckduckgo.com/?q=",
  },
  { id: "bing", title: "Bing", searchUrl: "https://bing.com/search?q=" },
];

const shortcuts = [
  { title: "Proton Mail", url: "https://mail.proton.me/u/3/inbox", key: "1" },
  { title: "YouTube", url: "https://youtube.com", key: "2" },
  { title: "reddit", url: "https://reddit.com", key: "3" },
  { title: "GitHub", url: "https://github.com", key: "4" },
  { title: "Hacker News", url: "https://news.ycombinator.com", key: "5" },
  { title: "NRK", url: "https://nrk.no", key: "6" },
  { title: "The Economist", url: "https://economist.com", key: "7" },
  { title: "VG", url: "https://vg.no", key: "8" },
  {
    title: "FIFA Fantasy",
    url: "https://play.fifa.com/fantasy/team",
    key: "9",
  },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function pad(n) {
  return String(n).padStart(2, "0");
}

function getWeekNumber(d) {
  const utc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  utc.setUTCDate(utc.getUTCDate() + 4 - (utc.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  return Math.ceil(((utc - yearStart) / 86400000 + 1) / 7);
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  document.getElementById("date-display").textContent =
    `${MONTHS[now.getMonth()]} ${pad(now.getDate())}`;
  document.getElementById("week-display").textContent =
    `week ${getWeekNumber(now)}`;
}

updateClock();
setInterval(updateClock, 1000);

// Search engines
let selectedEngine = window.localStorage.getItem("searchEngine") ?? "google";
const engineList = document.getElementById("engine-list");

searchEngines.forEach((engine) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = engine.title;
  btn.className =
    "engine-btn" + (engine.id === selectedEngine ? " active" : "");
  btn.addEventListener("click", () => {
    selectedEngine = engine.id;
    window.localStorage.setItem("searchEngine", engine.id);
    document
      .querySelectorAll(".engine-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
  engineList.appendChild(btn);
});

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchInput.focus();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;
  const engine = searchEngines.find((e) => e.id === selectedEngine);
  window.location.href = engine.searchUrl + encodeURIComponent(query);
});

// Shortcuts
const shortcutsList = document.getElementById("shortcuts-list");
shortcuts.forEach((shortcut) => {
  const li = document.createElement("li");
  li.className = "shortcut-item";
  const key = document.createElement("span");
  key.className = "shortcut-key";
  key.textContent = shortcut.key;
  const a = document.createElement("a");
  a.href = shortcut.url;
  a.className = "shortcut-link";
  a.textContent = shortcut.title;
  li.append(key, a);
  shortcutsList.appendChild(li);
});

document.addEventListener("keydown", (e) => {
  if (e.target instanceof HTMLInputElement) return;
  const shortcut = shortcuts.find((s) => s.key === e.key);
  if (shortcut) window.location.href = shortcut.url;
});
