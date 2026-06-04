const PASSWORD = "Fuchhey";

let bookmarksFound = new Set();

const openingLines = [
  "Where were we?",
  "Ah. There you are.",
  "I think I left a bookmark here.",
  "Some other day became today.",
  "This chapter wasn't finished.",
  "The archive appears complete. Almost."
];

const readerNotes = [
  "Subject displays inability to remain unoccupied when books exist.",
  "Waiting appears to be considered reading time.",
  "Research confirms a strong attachment to pages.",
  "The tram may arrive before the chapter ends. Unfortunate."
];

const natureNotes = [
  "Subject appears happiest around trees.",
  "Research suggests fresh air improves mood.",
  "Field observations remain ongoing.",
  "Nature appears to have gained a loyal customer.",
  "Trees seem trusted."
];

const vegNotes = [
  "Local cows continue to express support.",
  "Research indicates carrots feel safe.",
  "Chicken population unaffected.",
  "Subject continues unusual dietary strategy.",
  "Goats everywhere consider her an ally.",
  "Research team remains divided."
];

const goofyNotes = [
  "Subject can switch from philosophy to nonsense in under ten seconds.",
  "Extensive research confirms goofiness.",
  "Further testing required.",
  "Findings remain suspiciously adorable.",
  "No serious explanation currently exists."
];

const starReportSteps = [
  "Report Opened.",
  "Several stars identified in the distance.",
  "Witness statement recorded.",
  "Further investigation underway.",
  "Correction: They were seagulls.",
  "Primary source laughed.",
  "Case closed."
];

const michaelSteps = [
  "Movie watched.",
  "Movie watched again.",
  "Still the same movie.",
  "Researcher remains confused.",
  "Case remains unresolved."
];

let starIndex = 0;
let michaelIndex = 0;

/* ---------- LOGIN ---------- */

function checkPassword() {
  const value = document.getElementById("password").value.trim();

  if (value === PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("archive").classList.remove("hidden");

    typeWriter(
      document.getElementById("opening-line"),
      openingLines[Math.floor(Math.random() * openingLines.length)],
      45
    );
  } else {
    document.getElementById("login-error").textContent =
      "Archive key rejected.";
  }
}

function showHint() {
  document.getElementById("hint").textContent =
    "Hint: You call him this more often than his actual name.";
}

/* ---------- TYPEWRITER ---------- */

function typeWriter(element, text, speed = 30) {
  element.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(timer);
    }
  }, speed);
}

/* ---------- CHAPTERS ---------- */

function openChapter(id) {

  document
    .querySelectorAll(".chapter")
    .forEach(ch => ch.classList.remove("active"));

  document
    .getElementById(id)
    .classList.add("active");

  window.scrollTo({
    top: document.getElementById(id).offsetTop - 20,
    behavior: "smooth"
  });

  addBookmark(id);
}

function closeChapter(id) {
  document
    .getElementById(id)
    .classList.remove("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ---------- BOOKMARK TRACKER ---------- */

function addBookmark(id) {

  bookmarksFound.add(id);

  document.getElementById("progress-count").textContent =
    `${bookmarksFound.size} / 10`;
}

/* ---------- READER ---------- */

function readerNote() {

  const text =
    readerNotes[
      Math.floor(Math.random() * readerNotes.length)
    ];

  typeWriter(
    document.getElementById("reader-result"),
    text,
    20
  );
}

/* ---------- NATURE ---------- */

function nextNature() {

  const text =
    natureNotes[
      Math.floor(Math.random() * natureNotes.length)
    ];

  typeWriter(
    document.getElementById("nature-text"),
    text,
    20
  );
}

/* ---------- VEGETARIAN ---------- */

function vegetarianFact() {

  const text =
    vegNotes[
      Math.floor(Math.random() * vegNotes.length)
    ];

  typeWriter(
    document.getElementById("veg-result"),
    text,
    20
  );
}

/* ---------- GOOFY ---------- */

function goofyFact() {

  const text =
    goofyNotes[
      Math.floor(Math.random() * goofyNotes.length)
    ];

  typeWriter(
    document.getElementById("goofy-result"),
    text,
    20
  );
}

/* ---------- STARS ---------- */

function nextStarReport() {

  const text =
    starReportSteps[starIndex];

  typeWriter(
    document.getElementById("star-report"),
    text,
    25
  );

  starIndex++;

  if (starIndex >= starReportSteps.length) {
    starIndex = 0;
  }
}

/* ---------- MICHAEL ---------- */

function nextMichael() {

  const text =
    michaelSteps[michaelIndex];

  typeWriter(
    document.getElementById("michael-result"),
    text,
    25
  );

  michaelIndex++;

  if (michaelIndex >= michaelSteps.length) {
    michaelIndex = 0;
  }
}

/* ---------- WRITING ---------- */

function writingReveal() {

  const text = `
Turns out sometimes the sentence arrives first.

Meaning follows quietly behind it.

And sometimes all it takes is someone saying:

"Write something."
`;

  typeWriter(
    document.getElementById("writing-result"),
    text,
    18
  );
}

/* ---------- SECRET PHOTO ---------- */

function unlockEvidence() {

  const answer = confirm(
    "Hidden bookmark discovered. Open?"
  );

  if (answer) {
    openChapter("evidence");
  }
}

/* ---------- ENTER KEY ---------- */

document.addEventListener("DOMContentLoaded", () => {

  const input =
    document.getElementById("password");

  input.addEventListener("keydown", e => {

    if (e.key === "Enter") {
      checkPassword();
    }

  });

});

/* ---------- EASTER EGG ---------- */

let clicks = 0;

document.addEventListener("click", () => {

  clicks++;

  if (clicks === 50) {

    alert(
      "Footnote #3\n\nResearcher identity remains classified.\n\nStatus: Fuchhey."
    );

  }

});
