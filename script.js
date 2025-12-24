const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("isOpen");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("isOpen");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// --- Menü Daten ---
const menuData = [
  {
    category: "Kebap Spezialitäten",
    note: "Zutaten: Salat & Soße (nach Wahl).",
    items: [
      { name: "Kebap im Taschenbrot", price: "7,00 €" },
      { name: "Kebap im Taschenbrot (mit Weichkäse)", price: "7,50 €" },
      { name: "Kebap im Taschenbrot (klein)", price: "4,50 €" },
      { name: "Yufka Kebap (gerollt)", price: "7,50 €" },
      { name: "Yufka Kebap (gerollt, mit Weichkäse)", price: "8,00 €" },
      { name: "Mega Kebap (großes Taschenbrot)", price: "9,50 €" },
      { name: "Yufka Mega Kebap (groß)", price: "9,50 €" },
      { name: "Kebap Teller (Pommes oder Salat)", price: "9,50 €" },
      { name: "Kebap Teller (Pommes, Salat)", price: "9,50 €" },
      { name: "Hähnchen im Taschenbrot", price: "7,00 €" },
      { name: "Hähnchen Yufka Kebap (gerollt)", price: "7,50 €" },
      { name: "Hähnchen Kebap Teller", price: "10,00 €" },
      { name: "Hähnchen Box PUR (nur Kebapfleisch)", price: "9,00 €" },
      { name: "Hähnchen Pizza (nur Kebapfleisch)", price: "9,50 €" },
    ]
  },
  {
    category: "Box",
    items: [
      { name: "Kebap Box", desc: "mit Kebapfleisch, Salat oder Pommes & Soße", price: "7,00 €" },
      { name: "Kebap Box Pur", desc: "nur mit Kebapfleisch", price: "8,50 €" },
      { name: "Falafel Box", desc: "mit Salat oder Pommes & Soße", price: "6,50 €" },
      { name: "Chicken Nuggets Box", desc: "mit Salat oder Pommes", price: "7,00 €" },
      { name: "Chicken Wings Box", desc: "mit Salat oder Pommes", price: "8,00 €" },
    ]
  },
  {
    category: "Lahmacun",
    note: "Mit Hackfleischpaste.",
    items: [
      { name: "Lahmacun (gerollt)", desc: "mit Salat & Soße", price: "7,00 €" },
      { name: "Lahmacun Kebap (gerollt)", price: "8,50 €" },
      { name: "Lahmacun Teller", desc: "mit Kebapfleisch, Pommes, Salat & Soße", price: "12,00 €" },
    ]
  },
  {
    category: "Pide (jeweils mit Käse)",
    note: "Extra Ei: +0,50 €",
    items: [
      { name: "Pide Käse", price: "7,50 €" },
      { name: "Pide Hackfleisch", price: "8,50 €" },
      { name: "Pide Sucuk", desc: "mit Knoblauchwurst", price: "8,50 €" },
      { name: "Pide Spinat", price: "8,00 €" },
      { name: "Pide Spinat & Ei", price: "8,50 €" },
      { name: "Pide Spinat & Weichkäse", price: "8,50 €" },
      { name: "Pide Kebap", price: "9,00 €" },
      { name: "Pide Spezial", desc: "mit Putenschinken, Geflügelsalami & Ei", price: "8,50 €" },
      { name: "Pide Anatolia", desc: "mit Kebapfleisch, Zwiebeln, Spinat, Weichkäse & Soße", price: "9,50 €" },
      { name: "Pide Vegetarisch", desc: "mit Weichkäse, Pilze, Oliven & Zwiebeln", price: "9,00 €" },
    ]
  },
  {
    category: "Ofenfrische Seele (mit Tomatensoße)",
    items: [
      { name: "Seele Putenschinken – Geflügelsalami", price: "8,50 €" },
      { name: "Seele Spinat", price: "8,50 €" },
      { name: "Seele Kebap", price: "9,00 €" },
      { name: "Seele Anatolia", price: "9,50 €" },
      { name: "Seele des Hauses", price: "9,50 €" },
    ]
  },
  {
    category: "Käsebrot",
    items: [
      { name: "Käsebrot", desc: "mit Soße", price: "5,00 €" },
      { name: "Käsebrot", desc: "mit Kebapfleisch", price: "6,50 €" },
      { name: "Käsebrot", desc: "mit Sucuk & Ei", price: "6,50 €" },
      { name: "Käsebrot", desc: "mit Weichkäse", price: "5,50 €" },
      { name: "Käsebrot", desc: "mit Putenschinken, Pilze & Zwiebeln", price: "6,00 €" },
      { name: "Käsebrot", desc: "mit Oliven, Geflügelsalami & Mais", price: "6,00 €" },
      { name: "Käsebrot Veggie", desc: "mit Oliven, Paprika, Weichkäse & Zwiebeln", price: "6,00 €" },
    ]
  },
  {
    category: "Pizza (30 cm)",
    items: [
      { name: "Pizza Margherita", price: "7,50 €" },
      { name: "Pizza Geflügelsalami", price: "8,00 €" },
      { name: "Pizza Putenschinken", price: "8,00 €" },
      { name: "Pizza Funghi", desc: "mit frischen Champignons", price: "8,00 €" },
      { name: "Pizza Mozzarella", desc: "mit frischen Tomaten", price: "8,50 €" },
      { name: "Pizza Sardellen", price: "8,50 €" },
      { name: "Pizza Sucuk", desc: "mit Knoblauchwurst", price: "8,50 €" },
      { name: "Pizza Kebap", desc: "mit Kebapfleisch & Soße", price: "9,00 €" },
      { name: "Pizza Hawaii", desc: "mit Putenschinken & Ananas", price: "8,50 €" },
      { name: "Pizza Gorgonzola", price: "8,00 €" },
      { name: "Pizza Artischocken", price: "8,00 €" },
      { name: "Pizza Thunfisch", desc: "mit Zwiebeln", price: "8,50 €" },
      { name: "Pizza Kapern–Thunfisch", desc: "mit Zwiebeln", price: "9,00 €" },
      { name: "Pizza Scharf", desc: "mit Sucuk, Peperoni & Zwiebeln", price: "9,00 €" },
      { name: "Pizza Napoli", desc: "mit Sardellen, Kapern & Oliven", price: "9,00 €" },
      { name: "Pizza Shrimps", price: "9,50 €" },
      { name: "Pizza Gemischt", desc: "mit Putenschinken, Geflügelsalami, Champignons & Paprika", price: "9,00 €" },
      { name: "Pizza Vegetarisch", desc: "mit Champignons, Paprika, Oliven & Artischocken", price: "9,00 €" },
      { name: "Pizza 4 Jahreszeiten", desc: "mit Thunfisch, Putenschinken, Geflügelsalami & Champignons", price: "9,00 €" },
      { name: "Pizza Spezial", desc: "mit Kebapfleisch, Zwiebeln, Peperoni & frischen Tomaten", price: "9,50 €" },
      { name: "Pizza des Hauses", desc: "mit Kebapfleisch, Zwiebeln & Champignons", price: "9,50 €" },
      { name: "Pizza 4 Käse", price: "9,50 €" },
      { name: "Pizza Spinat & Ei", desc: "mit frischem Spinat & Zwiebeln", price: "8,50 €" },
      { name: "Pizza Swiss", desc: "mit Putenschinken, Geflügelsalami & Artischocken", price: "8,50 €" },
      { name: "Pizza Berliner", desc: "mit Sucuk, Champignons, Zwiebeln & Ei", price: "8,50 €" },
      { name: "Pizza Meeresfrüchte", price: "9,50 €" },
      { name: "Pizza Oliven", desc: "mit Oliven & Kapern", price: "8,00 €" },
    ]
  },
  {
    category: "Familien Pizza (40×60 cm)",
    note: "Extras/Zutaten je 1,00 €",
    items: [
      { name: "Familien Pizza Margherita", price: "25,00 €" },
      { name: "Familien Pizza Gemischt", price: "28,00 €" },
      { name: "Familien Pizza Kebap", price: "28,00 €" },
      { name: "Familien Pizza", desc: "mit Putenschinken & Salami", price: "26,00 €" },
      { name: "Familien Pizza Meeresfrüchte", price: "30,00 €" },
      { name: "Familien Pizza Wunsch", desc: "5 Zutaten nach Wahl", price: "28,00 €" },
      { name: "Familien Pizza 4 Käse", price: "29,00 €" },
    ]
  },
  {
    category: "Snacks",
    items: [
      { name: "Pommes", desc: "mit Ketchup oder Mayonnaise", price: "4,00 €" },
      { name: "Putenschnitzel Teller (2 Stück)", desc: "mit Salat & Pommes (oder nur Salat / nur Pommes)", price: "12,00 €" },
      { name: "Chicken Nuggets Teller (9 Stück)", desc: "mit Salat & Pommes", price: "9,50 €" },
      { name: "Chicken Wings Teller (6 Stück)", desc: "mit Salat & Pommes", price: "10,00 €" },
    ]
  },
  {
    category: "Vegetarisches",
    items: [
      { name: "Fladen Vegetarisch", desc: "im Taschenbrot, Salat & Soße", price: "5,50 €" },
      { name: "Yufka Vegetarisch", desc: "in Yufka gerollt, Salat & Soße", price: "6,00 €" },
      { name: "Falafel Fladen", desc: "im Taschenbrot, Salat & Soße", price: "7,00 €" },
      { name: "Falafel Yufka", desc: "in Yufka gerollt, Salat & Soße", price: "7,50 €" },
      { name: "Falafel Teller", desc: "mit Falafel, Salat & Pommes", price: "9,50 €" },
    ]
  },
  {
    category: "Salate",
    note: "Mit Essig & Öl oder mit Soße",
    items: [
      { name: "Gemischter Salat", desc: "klein / groß", price: "5,50 € / 6,50 €" },
      { name: "Bauern Salat", desc: "klein / groß", price: "5,50 € / 6,50 €" },
      { name: "Thunfischsalat", desc: "klein / groß", price: "5,50 € / 6,50 €" },
      { name: "Zwiebelsalat", desc: "klein / groß", price: "6,50 €" },
      { name: "Olivensalat", desc: "klein / groß", price: "6,50 €" },
      { name: "Kebap Salat", desc: "mit Kebapfleisch & Soße", price: "6,50 €" },
    ]
  },
  {
    category: "Toast & Heißgetränke",
    items: [
      { name: "Toast", desc: "mit Sucuk & Tomaten", price: "6,50 €" },
      { name: "Toast", desc: "mit Putenschinken, Geflügelsalami & Peperoni", price: "6,50 €" },
      { name: "Toast Vegetarisch", desc: "mit Oliven, Weichkäse & Tomaten", price: "6,50 €" },
      { name: "Kaffee (Tasse)", price: "2,00 €" },
      { name: "Tee (Tasse)", price: "1,00 €" },
    ]
  },
  {
    category: "Getränke (alkoholfrei)",
    items: [
      { name: "Mineralwasser", desc: "0,33 l / 0,5 l / 1,5 l", price: "2,00 € / 2,00 € / 3,50 €" },
      { name: "Coca-Cola / Fanta / Sprite / Mezzo Mix", desc: "0,33 l / 0,5 l / 1,5 l", price: "2,00 € / 2,50 € / 3,50 €" },
      { name: "Durstlöscher", desc: "0,5 l", price: "1,50 €" },
      { name: "Red Bull", desc: "0,25 l", price: "2,50 €" },
      { name: "Ayran", desc: "0,25 l", price: "1,50 €" },
    ]
  },
];

// --- Rendering / Filter ---
const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const menuCategory = document.getElementById("menuCategory");

// Fill category dropdown
menuData.forEach((c) => {
  const opt = document.createElement("option");
  opt.value = c.category;
  opt.textContent = c.category;
  menuCategory.appendChild(opt);
});

function normalize(s){ return (s||"").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,""); }

function matches(item, q){
  const t = normalize(`${item.name} ${item.desc||""}`);
  return t.includes(q);
}

function render(){
  const q = normalize(menuSearch.value.trim());
  const cat = menuCategory.value;

  menuGrid.innerHTML = "";

  const filtered = menuData
    .filter(c => cat === "all" ? true : c.category === cat)
    .map(c => {
      const items = q ? c.items.filter(it => matches(it, q)) : c.items;
      return { ...c, items };
    })
    .filter(c => c.items.length > 0);

  if(filtered.length === 0){
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<h3>Keine Treffer</h3><p class="muted">Bitte anderen Suchbegriff probieren.</p>`;
    menuGrid.appendChild(empty);
    return;
  }

  filtered.forEach(section => {
    const card = document.createElement("article");
    card.className = "card menuSection";

    const title = document.createElement("div");
    title.innerHTML = `<h3>${section.category}</h3>`;
    card.appendChild(title);

    if(section.note){
      const note = document.createElement("div");
      note.className = "pillRow";
      note.innerHTML = `<span class="pill">${section.note}</span>`;
      card.appendChild(note);
    }

    const ul = document.createElement("ul");
    ul.className = "menuList";

    section.items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <span class="name">${item.name}</span>
          ${item.desc ? `<span class="desc">${item.desc}</span>` : ``}
        </div>
        <div class="price">${item.price}</div>
      `;
      ul.appendChild(li);
    });

    card.appendChild(ul);
    menuGrid.appendChild(card);
  });
}

menuSearch.addEventListener("input", render);
menuCategory.addEventListener("change", render);
render();
