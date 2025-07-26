document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("search-input");
  const resultsList = document.getElementById("search-results");

  fetch("index.json")
    .then(res => res.json())
    .then(data => {
      const fuse = new Fuse(data, {
        keys: ["title", "content"],
        includeScore: true,
        threshold: 0.3
      });

      input.addEventListener("input", () => {
        const keyword = input.value.trim();
        resultsList.innerHTML = "";

        if (!keyword) return;

        const results = fuse.search(keyword);
        if (results.length === 0) {
          resultsList.innerHTML = `
            <div class="mt-4 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-500 italic text-sm">
              Tidak ditemukan.
            </div>
          `;
          return;
        }

        results.forEach(({ item }) => {
          const resultItem = document.createElement("li");
          resultItem.innerHTML = `
            <div class="search-card p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 border-l-4 border-teal-500 rounded-md shadow hover:shadow-md transition">
              <a href="${item.permalink}" class="block text-slate-700 dark:text-slate-300 hover:underline">
                <h3 class="text-base sm:text-lg font-semibold mb-1">${item.title}</h3>
              </a>
            </div>
          `;
          resultsList.appendChild(resultItem);
        });
      });
    });
});
