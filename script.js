// Array of Adam Sandler facts or quotes
const adamFacts = [
  "Adam Sandler was born on September 9, 1966, in Brooklyn, New York.",
  "He graduated from New York University's Tisch School of the Arts.",
  "Adam Sandler's production company is called Happy Madison Productions.",
  "In addition to acting, Sandler is known for his musical ventures and has released comedy albums.",
  "He has received critical acclaim for his dramatic performances in films like 'Punch-Drunk Love' and 'Uncut Gems.'"
];

let currentFactIndex = 0;

function showNextFact() {
  const adamContentElement = document.getElementById('adam-content');

  // Increment the index to show the next fact
  currentFactIndex++;

  // If we reach the end of the array, go back to the first fact
  if (currentFactIndex >= adamFacts.length) {
    currentFactIndex = 0;
  }

  // Display the current fact
  adamContentElement.innerHTML = `<p>${adamFacts[currentFactIndex]}</p>`;
}

