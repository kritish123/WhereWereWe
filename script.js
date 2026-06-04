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
  "Trees seem trusted.",
  "Some people collect souvenirs. You seem to collect moments."
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

const unsaidNotes = [
  "Sometimes I catch myself wanting to tell you things first.",
  "I like hearing what you're thinking about.",
  "You're one of the few people whose perspective genuinely changes mine.",
  "Some people become part of your routine. You somehow became part of my thoughts.",
  "I still smile when I remember the seagull incident.",
  "You're surprisingly easy to miss.",
  "That might have been the problem.",
  "I don't think you realize how often you end up in my writing.",
  "You're one of my favourite conversations."
];

const starReportSteps = [

  "22:17 — Several stars identified in the distance.",

  "22:18 — Witness appears confident.",

  "22:19 — Researcher remains unconvinced.",

  "22:20 — Object movement detected.",

  "22:21 — Stars appear to be flapping.",

  "22:22 — Correction: They were seagulls.",

  "22:23 — Witness laughing uncontrollably.",

  "22:24 — Case closed."

];

const michaelSteps = [
  "Movie watched.",
  "Movie watched again.",
  "Still the same movie.",
  "Researcher remains confused.",
  "Case remains unresolved.",
  "Recommendation: watch it a third time."
];

const nightNotes = [
  "Cities feel smaller when you're with the right person.",
  "It was late enough that we probably should've gone home.",
  "Neither of us seemed particularly interested in doing that.",
  "Some walks end. Some stay in your head.",
  "I still remember that night pretty clearly."
];

let starIndex = 0;
let michaelIndex = 0;
let unsaidIndex = 0;
let nightIndex = 0;

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
    "Hint: What Miss keeps calling you instead of your actual name.";
}

/* ---------- TYPEWRITER ---------- */

function typeWriter(element, text, speed = 25) {

  clearTimeout(element.typingTimeout);

  element.textContent = "";

  let i = 0;

  function type() {

    if (i < text.length) {

      element.textContent += text[i];
      i++;

      element.typingTimeout =
        setTimeout(type, speed);

    }

  }

  type();

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

/* ---------- BOOKMARKS ---------- */

function addBookmark(id) {

  bookmarksFound.add(id);

  document.getElementById("progress-count").textContent =
    `${bookmarksFound.size} / 11`;

  checkCompletion();
}

function checkCompletion() {

  if (bookmarksFound.size >= 10) {

    setTimeout(() => {

      alert(
`Archive Complete

Conclusion:

I liked spending time with you.

I still do.

— Fuchhey`
      );

    }, 500);

  }

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
    natureNotes[Math.floor(Math.random() * natureNotes.length)];

  typeWriter(
    document.getElementById("nature-text"),
    text
  );
}

/* ---------- VEGETARIAN ---------- */

function vegetarianFact() {

  const text =
    vegNotes[Math.floor(Math.random() * vegNotes.length)];

  typeWriter(
    document.getElementById("veg-result"),
    text
  );
}

/* ---------- GOOFY ---------- */

function goofyFact() {

  const text =
    goofyNotes[Math.floor(Math.random() * goofyNotes.length)];

  typeWriter(
    document.getElementById("goofy-result"),
    text
  );
}

/* ---------- STARS ---------- */

function nextStarReport() {

  const box = document.getElementById("star-report");

  const entry = document.createElement("div");

  entry.textContent = "> " + starReportSteps[starIndex];

  entry.style.marginBottom = "8px";

  box.appendChild(entry);

  starIndex++;

  if(starIndex >= starReportSteps.length){

    const end = document.createElement("div");

    end.innerHTML =
      "<br><strong>Investigation Archived.</strong>";

    box.appendChild(end);

    starIndex = 0;
  }

}

/* ---------- MICHAEL ---------- */

function nextMichael() {

  const box =
    document.getElementById("michael-result");

  const entry =
    document.createElement("div");

  entry.textContent =
    "> " + michaelSteps[michaelIndex];

  entry.style.marginBottom = "8px";

  box.appendChild(entry);

  michaelIndex++;

  if(michaelIndex >= michaelSteps.length){

    const end =
      document.createElement("div");

    end.innerHTML =
      "<br><strong>Investigation Closed.</strong>";

    box.appendChild(end);

    michaelIndex = 0;
  }

}

/* ---------- WRITING ---------- */

function writingReveal() {

  const text = `Turns out sometimes the sentence arrives first.

Meaning follows quietly behind it.

And sometimes all it takes is someone saying:

"Write something."`;

  typeWriter(
    document.getElementById("writing-result"),
    text,
    18
  );
}

/* ---------- UNSAID ---------- */

function nextUnsaid() {

  const text = unsaidNotes[unsaidIndex];

  typeWriter(
    document.getElementById("unsaid-result"),
    text,
    20
  );

  unsaidIndex++;

  if (unsaidIndex >= unsaidNotes.length) {
    unsaidIndex = 0;
  }
}

/* ---------- LATE NIGHT ---------- */

function nextNightNote() {

  const box =
    document.getElementById("night-result");

  const entry =
    document.createElement("div");

  entry.textContent =
    "• " + nightNotes[nightIndex];

  entry.style.marginBottom = "12px";

  box.appendChild(entry);

  nightIndex++;

  if(nightIndex >= nightNotes.length){

    const end =
      document.createElement("div");

    end.innerHTML =
      "<br><em>End of Entry.</em>";

    box.appendChild(end);

    nightIndex = 0;
  }

}
/* ---------- SECRET PHOTO ---------- */

function unlockEvidence() {

  const answer =
    confirm("Hidden bookmark discovered. Open?");

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

/* ---------- HEART EASTER EGG ---------- */

document.addEventListener("click", function(e){

  if(document.getElementById("archive").classList.contains("hidden")) return;

  const heart = document.createElement("div");

  heart.innerHTML = "✦";

  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.pointerEvents = "none";
  heart.style.transition = "all .8s ease";
  heart.style.opacity = "1";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(-50px)";
    heart.style.opacity = "0";
  }, 10);

  setTimeout(() => {
    heart.remove();
  }, 800);

});

/* ---------- FOOTNOTE ---------- */

let clicks = 0;

document.addEventListener("click", () => {

  clicks++;

  if (clicks === 50) {

    alert(
`Footnote #3

Researcher identity remains classified.

Status: Fuchhey.`
    );

  }

});
