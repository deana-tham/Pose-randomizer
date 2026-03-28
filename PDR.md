# Preliminary Design Review (PDR)
## Pose Randomizer Web App
**Version:** 1.0
**Date:** March 25, 2026
**Author:** Deana
**Status:** In Progress

---

## 1. Project Overview

Pose Randomizer is a simple, fun web app designed to help people who don't know how to pose for photos. Users select a pose category and hit a button that spins through curated inspiration images — like a slot machine — and lands on a random pose for them to try. The app is meant to be quick, low-pressure, and enjoyable to use.

This is a solo portfolio project built to demonstrate front-end development skills including UI design, JavaScript logic, and deployment.

---

## 2. Goals

- Build a working, polished v1 web app within ~3 hours of development time
- Create a clean, cute, pixel-art-inspired UI with real pose photos
- Keep the feature set focused and simple — no accounts, no backend
- Deploy publicly via Vercel
- Publish code on GitHub as a portfolio piece

---

## 3. Target Audience

- Anyone who struggles with posing for photos
- People looking for quick photo inspiration before a shoot or outing
- Social media users wanting to try new poses

---

## 4. Scope — What's In v1

| Feature | Description |
|---|---|
| Category selection | User picks from 4 pose types before spinning |
| Slot machine spin | Images cycle fast then decelerate and land on one randomly |
| Spin again | User can keep spinning until they find a pose they like |
| Session tracking | Already-seen poses are tracked per session so repeats are minimized. Resets when the user closes or refreshes the app |
| Curated images | A fixed set of real pose inspiration photos organized by category |
| Pixel art UI | Buttons, borders, icons, and decorative elements use a pixel art style. Pose images are real photos |
| Fully responsive | Works on both desktop and mobile browsers |

---

## 5. What's Out of Scope (v1)

The following ideas were considered but intentionally cut to keep the scope small and achievable:

- User accounts or login
- Saving or favoriting poses
- Pose timer / countdown
- Difficulty or mood tags
- Monetization of any kind
- Native mobile app (may be explored in a future version)

---

## 6. Pose Categories

| Category | Description |
|---|---|
| Sitting | Floor poses, chair poses, casual and editorial sitting |
| Standing | Full body standing poses, leaning, arms, legs |
| Group | Poses for 2 or more people |
| Selfie | Close-up and face-forward poses for phone cameras |

Each category will have a minimum of **10 curated images** to give enough variety within a session.

---

## 7. User Flow

```
App Opens
    │
    ▼
Category Selection Screen
  [Sitting] [Standing] [Group] [Selfie]
    │
    ▼ (user picks a category)
Spin Screen
  ┌──────────────────────┐
  │   pose image frame   │
  └──────────────────────┘
       [ ✨ Spin ]
    │
    ▼ (user presses Spin)
Images cycle rapidly → decelerate → land on one
    │
    ▼
User sees pose
  → Press "Spin Again" to get a new one
  → Press "Back" to change category
```

---

## 8. Session Tracking Logic

- When a user selects a category, a **seen list** is initialized for that category
- Each time the spin lands on an image, that image is added to the seen list
- The spin function pulls from the **unseen pool first**
- Once all images in a category have been seen, the seen list **resets** and the full pool becomes available again
- The seen list lives only in memory (no localStorage, no cookies) — it resets automatically when the user refreshes or closes the tab

---

## 9. Visual Style

**Overall vibe:** Cute, playful, pixel art inspired
**Image style:** Real photos for pose inspiration
**UI elements:** Pixel art aesthetic — buttons, icons, frames, and decorative touches
**Color palette:** TBD — to be finalized in Figma
**Typography:** TBD — likely a pixel or rounded font for headings, clean sans-serif for body text
**Layout:** Single page, two screens (category picker → spin screen), centered, mobile-first

---

## 10. Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (no framework — keeps it simple and portfolio-friendly) |
| Logic | Vanilla JavaScript |
| Images | Curated set of URLs (no external API required) |
| Hosting | Vercel |
| Version Control | GitHub |

No build tools, no frameworks, no dependencies. One `index.html` file plus supporting assets.

---

## 11. Deliverables

- [ ] Figma design file (wireframes + final UI)
- [ ] `index.html` — main app file
- [ ] `style.css` — all styles
- [ ] `script.js` — all JavaScript logic
- [ ] `/images` folder — curated pose photos organized by category
- [ ] `README.md` — project description for GitHub
- [ ] Live Vercel deployment link

---

## 12. Future Considerations (Post-v1)

These are ideas to revisit after v1 is complete:

- Convert to a React Native mobile app
- Add a favorites / save feature
- Add a pose timer
- Expand pose categories (outdoor, editorial, couple, etc.)
- Allow users to upload their own inspo images
- Add subtle sound effects to the spin animation

---

*This document will be updated as the project progresses.*
