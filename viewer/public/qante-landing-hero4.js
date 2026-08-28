/**
 * Qante mark hero — 7×7 outline plus interior awake squares, on-grid pip.
 */

const GRID = 7;
const GAP = { r: 6, c: 6 };

function buildOutline(size) {
  const coords = [];
  for (let c = 0; c < size; c += 1) coords.push([0, c]);
  for (let r = 1; r < size - 1; r += 1) {
    coords.push([r, 0], [r, size - 1]);
  }
  for (let c = 0; c < size - 1; c += 1) coords.push([size - 1, c]);
  return coords;
}

const OUTLINE = buildOutline(GRID);

/** Interior awake squares — cross plus inner diamond, not a solid fill. */
const INTERIOR = [
  [2, 2], [2, 3], [2, 4],
  [3, 2], [3, 3], [3, 4],
  [4, 2], [4, 3], [4, 4],
];

const hero = document.getElementById("hero");
const mark = document.getElementById("mark");
const gridEl = document.getElementById("mark-grid");
/** @type {HTMLElement} */
let pipEl;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** @type {Map<string, { el: HTMLElement, r: number, c: number, phase: number, speed: number, lit: number, glow: number, inner?: boolean }>} */
const cells = new Map();

function isActive(r, c) {
  return OUTLINE.some(([rr, cc]) => rr === r && cc === c)
    || INTERIOR.some(([rr, cc]) => rr === r && cc === c);
}

function isInner(r, c) {
  return INTERIOR.some(([rr, cc]) => rr === r && cc === c);
}

for (let r = 0; r < GRID; r += 1) {
  for (let c = 0; c < GRID; c += 1) {
    const slot = document.createElement("div");
    slot.className = "mark__slot";
    const key = `${r},${c}`;
    const isPip = r === GAP.r && c === GAP.c;
    if (isActive(r, c)) {
      const cell = document.createElement("div");
      cell.className = isInner(r, c) ? "mark__cell mark__cell--inner" : "mark__cell";
      cells.set(key, {
        el: cell,
        r,
        c,
        inner: isInner(r, c),
        phase: Math.random() * Math.PI * 2,
        speed: 0.55 + Math.random() * 0.75,
        lit: isInner(r, c) ? 0.36 : 0.48,
        glow: isInner(r, c) ? 0.2 : 0.28,
      });
      slot.appendChild(cell);
    } else if (isPip) {
      pipEl = document.createElement("div");
      pipEl.className = "mark__pip";
      pipEl.setAttribute("aria-hidden", "true");
      slot.appendChild(pipEl);
    }
    gridEl.appendChild(slot);
  }
}

let pointer = null;
let pipLit = 0.62;
let pipGlow = 0.35;
let cellSize = 0;
let gapCenter = { x: 0, y: 0 };
let pipCenter = { x: 0, y: 0 };

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function proximity(px, py, cx, cy, radius) {
  const d = Math.hypot(px - cx, py - cy);
  if (d >= radius) return 0;
  const t = 1 - d / radius;
  return t * t;
}

function ripple(px, py, cx, cy, time) {
  const d = Math.hypot(px - cx, py - cy);
  return 0.12 * Math.sin(time * 5.5 - d * 0.035);
}

function setCellStyle(cell, lit, glow) {
  const bright = 0.75 + glow * 0.85;
  const scale = 0.98 + glow * 0.06;
  cell.el.style.setProperty("--lit", lit.toFixed(3));
  cell.el.style.setProperty("--glow", glow.toFixed(3));
  cell.el.style.setProperty("--bright", bright.toFixed(3));
  cell.el.style.setProperty("--scale", scale.toFixed(3));
}

function setPipStyle(lit, glow) {
  const bright = 0.8 + glow * 0.9;
  const scale = 0.96 + glow * 0.1;
  pipEl.style.setProperty("--pip-lit", lit.toFixed(3));
  pipEl.style.setProperty("--pip-glow", glow.toFixed(3));
  pipEl.style.setProperty("--pip-bright", bright.toFixed(3));
  pipEl.style.setProperty("--pip-scale", scale.toFixed(3));
}

function measure() {
  const rect = mark.getBoundingClientRect();
  cellSize = rect.width / GRID;
  mark.style.setProperty("--cell-size", `${cellSize}px`);

  const gapX = rect.left + (GAP.c + 0.5) * cellSize;
  const gapY = rect.top + (GAP.r + 0.5) * cellSize;
  gapCenter = { x: gapX, y: gapY };

  const pipRect = pipEl.getBoundingClientRect();
  pipCenter = {
    x: pipRect.left + pipRect.width / 2,
    y: pipRect.top + pipRect.height / 2,
  };
}

function cellCenter(cell) {
  const rect = cell.el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

function applyStatic() {
  for (const cell of cells.values()) {
    setCellStyle(cell, cell.inner ? 0.4 : 0.52, cell.inner ? 0.22 : 0.28);
  }
  setPipStyle(0.65, 0.38);
}

function tick(time) {
  const t = time * 0.001;
  const activePointer = canHover ? pointer : null;

  for (const cell of cells.values()) {
    const base = cell.inner ? 0.32 : 0.4;
    const amp = cell.inner ? 0.12 : 0.16;
    const idle = base + amp * Math.sin(t * cell.speed + cell.phase);
    let target = idle;
    let glow = idle * 0.55;

    if (activePointer) {
      const center = cellCenter(cell);
      const boost = proximity(activePointer.x, activePointer.y, center.x, center.y, cellSize * 3.8);
      const wave = ripple(activePointer.x, activePointer.y, center.x, center.y, t);
      target = clamp(idle + boost * 0.52 + wave * boost, 0.28, 1);
      glow = clamp(idle * 0.45 + boost * 0.95 + wave * 0.35, 0.15, 1);
    }

    const ease = activePointer ? 0.16 : 0.07;
    cell.lit = lerp(cell.lit, target, ease);
    cell.glow = lerp(cell.glow, glow, ease);
    setCellStyle(cell, cell.lit, cell.glow);
  }

  const idlePip = 0.5 + 0.14 * Math.sin(t * 0.42 + 1.2);
  let pipTarget = idlePip;
  let pipGlowTarget = idlePip * 0.62;

  if (activePointer) {
    const gapBoost = proximity(activePointer.x, activePointer.y, gapCenter.x, gapCenter.y, cellSize * 2.6);
    const pipBoost = proximity(activePointer.x, activePointer.y, pipCenter.x, pipCenter.y, cellSize * 2.2);
    const near = Math.max(gapBoost, pipBoost);
    pipTarget = clamp(idlePip + near * 0.48, 0.42, 1);
    pipGlowTarget = clamp(idlePip * 0.5 + near * 1.05, 0.25, 1);
  }

  const pipEase = activePointer ? 0.08 : 0.05;
  pipLit = lerp(pipLit, pipTarget, pipEase);
  pipGlow = lerp(pipGlow, pipGlowTarget, pipEase);
  setPipStyle(pipLit, pipGlow);

  requestAnimationFrame(tick);
}

if (canHover) {
  hero.addEventListener("pointermove", (e) => {
    pointer = { x: e.clientX, y: e.clientY };
  });
  hero.addEventListener("pointerleave", () => {
    pointer = null;
  });
}

window.addEventListener("resize", measure);
measure();

if (reducedMotion) {
  applyStatic();
} else {
  requestAnimationFrame(tick);
}
