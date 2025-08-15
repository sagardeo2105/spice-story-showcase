(async function () {
try {
const container = document.querySelector("#services-container");
if (!container) return;
const res = await fetch("./data/services.json?ts=" + Date.now(), { cache: "no-store" });
const data = await res.json();

const wrap = document.createElement("div");
wrap.className = "services";

data.services.forEach(svc => {
  const card = document.createElement("div");
  card.className = "service-card";

  const h2 = document.createElement("h2");
  h2.textContent = svc.title;

  const p = document.createElement("p");
  p.textContent = svc.description;

  card.appendChild(h2);
  card.appendChild(p);
  wrap.appendChild(card);
});

container.innerHTML = "";
container.appendChild(wrap);

if (data.lastUpdated) {
  const stamp = document.querySelector("#services-updated-at");
  if (stamp) stamp.textContent = new Date(data.lastUpdated).toLocaleDateString();
}
} catch (e) {
console.error("Services render failed", e);
}
})();