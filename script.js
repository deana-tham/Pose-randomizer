// ══════════════════════════════════════
//   Pose Randomizer — Script
// ══════════════════════════════════════

// ── Pose Image Pools ──────────────────

const POSES = {
  sitting: [
    'sitting/sitting1.png',
    'sitting/sitting2.png',
    'sitting/sitting3.png',
    'sitting/sitting4.png',
    'sitting/sitting5.png',
    'sitting/sitting6.png',
    'sitting/sitting7.png',
  ],
  standing: [
    'standing/standing1.png',
    'standing/standing2.png',
    'standing/standing3.png',
    'standing/standing4.png',
    'standing/standing5.png',
    'standing/standing6.png',
    'standing/standing7.png',
    'standing/standing8.png',
  ],
  group: [
    'group/group1.png',
    'group/group2.png',
    'group/group3.png',
    'group/group4.png',
    'group/group5.png',
    'group/group6.png',
    'group/group7.png',
  ],
  selfie: [
    'selfie/selfie1.png',
    'selfie/selfie2.png',
    'selfie/selfie3.png',
    'selfie/selfie4.png',
    'selfie/selfie5.png',
    'selfie/selfie6.png',
  ],
};

// ── Session Tracking ──────────────────
// Resets automatically on page refresh.

const seen = {
  sitting:  [],
  standing: [],
  group:    [],
  selfie:   [],
};

// ── State ─────────────────────────────

let currentCat = null;
let isSpinning  = false;

// ── Navigation ────────────────────────

function goToSelection() {
  if (isSpinning) return;
  showScreen('selection-screen');
  currentCat = null;
}

function selectCategory(cat) {
  currentCat = cat;
  preloadImages(cat);

  // Show a random starting image right away
  document.getElementById('pose-photo').src = randomFrom(POSES[cat]);
  document.getElementById('spin-label').textContent = 'Spin';
  document.getElementById('spin-btn').disabled = false;

  showScreen('spin-screen');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── Image Helpers ─────────────────────

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Used during spin animation — picks freely, does not track
function cycleImage() {
  return randomFrom(POSES[currentCat]);
}

// Used for the final landed image — avoids recently seen poses
function getFinalImage() {
  const all      = POSES[currentCat];
  const seenList = seen[currentCat];

  let pool = all.filter(img => !seenList.includes(img));

  // All poses seen this session — reset and start fresh
  if (pool.length === 0) {
    seen[currentCat] = [];
    pool = [...all];
  }

  const pick = randomFrom(pool);
  seen[currentCat].push(pick);
  return pick;
}

// Preload images so cycling is smooth
function preloadImages(cat) {
  POSES[cat].forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// ── Spin Logic ────────────────────────

function spin() {
  if (isSpinning) return;
  isSpinning = true;

  const btn          = document.getElementById('spin-btn');
  const label        = document.getElementById('spin-label');
  const photo        = document.getElementById('pose-photo');
  const frameWrapper = document.querySelector('#spin-screen .frame-container');

  btn.disabled = true;
  label.textContent = '🎰';
  frameWrapper.classList.add('spinning');

  // Deceleration schedule: starts at ~60ms, slows to ~550ms over 2.5 seconds
  const delays = [];
  let delay = 60;
  let total  = 0;
  while (total < 2500) {
    delays.push(Math.round(delay));
    total += delay;
    delay  = Math.min(delay * 1.13, 550);
  }

  let step = 0;

  function tick() {
    if (step >= delays.length) {
      // Land on final tracked image
      photo.src = getFinalImage();
      frameWrapper.classList.remove('spinning');
      btn.disabled = false;
      label.textContent = 'Spin Again';
      isSpinning = false;
      return;
    }
    photo.src = cycleImage();
    setTimeout(tick, delays[step++]);
  }

  tick();
}
