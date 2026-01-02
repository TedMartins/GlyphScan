const DIACRITICS_REGEX =
  /[áéíóúàèìòùâêîôûãõñçäëïöüÿœæÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÑÇÄËÏÖÜŸŒÆ]/g;

function countAccentsAndWords(text) {
  const words = text
    .split(/[\s\n\r,.;:?!()"]+/)
    .filter((word) => word.length > 0);
  const results = {};

  for (const word of words) {
    const matches = word.match(DIACRITICS_REGEX);

    if (matches) {
      for (const char of matches) {
        if (!results[char]) {
          results[char] = {
            totalCount: 0,
            words: {},
          };
        }

        results[char].totalCount++;

        results[char].words[word] = (results[char].words[word] || 0) + 1;
      }
    }
  }

  return results;
}

function analyzeText() {
  const inputText = document.getElementById("inputText").value.trim();
  const resultArea = document.getElementById("resultArea");
  const statsContainer = document.getElementById("statsContainer");
  const charactersSection = document.getElementById("charactersSection");
  const charactersOutput = document.getElementById("charactersOutput");

  if (!inputText) {
    resultArea.innerHTML =
      '<div class="empty-state">Please paste a text to analyze.</div>';
    statsContainer.style.display = "none";
    charactersSection.classList.remove("visible");
    return;
  }

  const results = countAccentsAndWords(inputText);
  const sortedChars = Object.keys(results).sort();

  if (sortedChars.length === 0) {
    resultArea.innerHTML =
      '<div class="empty-state">No diacritic characters found.</div>';
    statsContainer.style.display = "none";
    charactersSection.classList.remove("visible");
    return;
  }

  let output = "";
  let totalAccents = 0;

  for (const char of sortedChars) {
    const data = results[char];
    const total = data.totalCount;
    totalAccents += total;

    const wordList = Object.entries(data.words)
      .map(([word, count]) => `${word} (${count}x)`)
      .join(", ");

    output += `<span class="accent-highlight">${char}</span> (${total}): ${wordList}\n\n`;
  }

  resultArea.textContent = "";
  resultArea.innerHTML = output;

  const charactersOnly = sortedChars.join(" ");
  charactersOutput.textContent = charactersOnly;
  charactersSection.classList.add("visible");

  document.getElementById("totalAccents").textContent = totalAccents;
  document.getElementById("uniqueAccents").textContent = sortedChars.length;

  const totalWords = inputText.split(/\s+/).filter((w) => w.length > 0).length;
  document.getElementById("totalWords").textContent = totalWords;

  statsContainer.style.display = "grid";
}

function clearAll() {
  document.getElementById("inputText").value = "";
  document.getElementById("resultArea").innerHTML =
    '<div class="empty-state">Results will appear here after analysis.</div>';
  document.getElementById("statsContainer").style.display = "none";
  document.getElementById("charactersSection").classList.remove("visible");
  document.getElementById("inputText").focus();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn-analyze").addEventListener("click", analyzeText);

  document.querySelector(".btn-clear").addEventListener("click", clearAll);

  document
    .getElementById("inputText")
    .addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        analyzeText();
      }
    });

  document.getElementById("inputText").addEventListener("paste", function () {
    setTimeout(analyzeText, 100);
  });

  clearAll();
});
