const DATA_PATH = "../data/destinations.json";

function getPageMode() {
  const root = document.documentElement;
  return root?.dataset?.page || "";
}

function formatReplayState(replayState) {
  const normalized = replayState?.toLowerCase() || "";
  if (normalized.includes("one")) return "One-and-done";
  if (normalized.includes("altered")) return "Replayable (altered)";
  if (normalized.includes("persistent")) return "Replayable (persistent)";
  return replayState || "Replayable";
}

function setText(el, value, fallback = "—") {
  if (!el) return;
  el.textContent = value || fallback;
}

function renderList(destinations) {
  const container = document.querySelector("[data-destination-list]");
  if (!container) return;

  if (!Array.isArray(destinations) || destinations.length === 0) {
    container.innerHTML = "<p>No destinations are currently listed.</p>";
    return;
  }

  const cards = destinations
    .map((destination) => {
      return `
        <article class="destination-card">
          <div>
            <h3>${destination.name}</h3>
            <div class="destination-meta">
              <span><strong>Duration:</strong> ${destination.duration_tier}</span>
              <span><strong>Replay:</strong> ${formatReplayState(destination.replay_state)}</span>
            </div>
          </div>
          <p>${destination.briefing_summary}</p>
          <a class="button-link" href="template.html?id=${encodeURIComponent(
            destination.id
          )}">Read briefing</a>
        </article>
      `;
    })
    .join("");

  container.innerHTML = cards;
}

function renderDetail(destinations) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const destination = destinations.find((entry) => entry.id === id);

  if (!destination) {
    const fallback = document.querySelector("[data-destination-fallback]");
    if (fallback) {
      fallback.hidden = false;
    }
    return;
  }

  setText(document.querySelector("[data-destination-name]"), destination.name);
  setText(document.querySelector("[data-destination-sigil]"), destination.sigil);
  setText(document.querySelector("[data-destination-summary]"), destination.briefing_summary);
  setText(document.querySelector("[data-destination-tone]"), destination.tone);
  setText(document.querySelector("[data-destination-danger]"), destination.danger_level);
  setText(document.querySelector("[data-destination-story]"), destination.story_type);
  setText(document.querySelector("[data-destination-duration]"), destination.duration_tier);
  setText(
    document.querySelector("[data-destination-duration-detail]"),
    destination.duration_detail || "Tier guidance is shared here for planning."
  );
  setText(
    document.querySelector("[data-destination-commitment]"),
    destination.commitment_warning
  );
  setText(
    document.querySelector("[data-destination-replay]"),
    formatReplayState(destination.replay_state)
  );
}

async function loadDestinations() {
  const mode = getPageMode();
  try {
    const response = await fetch(DATA_PATH, { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load destination data");
    const data = await response.json();
    const destinations = data.destinations || [];

    if (mode === "list") {
      renderList(destinations);
    }
    if (mode === "detail") {
      renderDetail(destinations);
    }
  } catch (error) {
    const errorTarget = document.querySelector("[data-error]");
    if (errorTarget) {
      errorTarget.textContent =
        "Destination data could not be loaded. Ask your DM to confirm the data file exists.";
    }
  }
}

document.addEventListener("DOMContentLoaded", loadDestinations);
