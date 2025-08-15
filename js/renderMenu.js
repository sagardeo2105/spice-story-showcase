(async function () {
try {
const container = document.querySelector("#menu-container");
if (!container) return;

const res = await fetch("./data/menu.json?ts=" + Date.now(), { cache: "no-store" });
const data = await res.json();

// Build HTML structure matching your styles.css
const menuEl = document.createElement("div");
menuEl.className = "menu";

data.sections.forEach(section => {
  const sectionEl = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = section.title;
  sectionEl.appendChild(h2);

  const ul = document.createElement("ul");

  section.items.forEach(item => {
    const li = document.createElement("li");

    // Top line: Name .... Price
    const topLine = document.createElement("div");
    topLine.style.display = "flex";
    topLine.style.alignItems = "baseline";
    topLine.style.gap = "0.5rem";
    topLine.style.width = "100%";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = item.name;

    const dots = document.createElement("span");
    dots.className = "dots";
    dots.style.flex = "1";
    dots.style.borderBottom = "1px dotted #bbb";
    dots.style.margin = "0 0.5rem";
    dots.style.height = "1.1em";
    dots.style.alignSelf = "flex-end";

    const priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = item.price;

    topLine.appendChild(nameSpan);
    topLine.appendChild(dots);
    topLine.appendChild(priceSpan);

    li.appendChild(topLine);

    if (item.description) {
      const p = document.createElement("p");
      p.textContent = item.description;
      li.appendChild(p);
    }

    ul.appendChild(li);
  });

  sectionEl.appendChild(ul);
  menuEl.appendChild(sectionEl);
});

container.innerHTML = "";
container.appendChild(menuEl);

// Optional: last updated display
if (data.lastUpdated) {
  const stamp = document.querySelector("#menu-updated-at");
  if (stamp) stamp.textContent = new Date(data.lastUpdated).toLocaleDateString();
}
} catch (e) {
console.error("Menu render failed", e);
}
})();

