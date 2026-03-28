
     A fun, slot machine-style web app that helps you figure out how to pose for photos. Pick a category, hit spin,
      and land on a random pose for inspiration.

     **Live demo:** 
     https://pose-randomizer.vercel.app/

     ---

     ## How It Works

     1. Tap the start screen to begin
     2. Choose a pose category — Selfie, Standing, Sitting, or Group
     3. Hit **Spin** and watch images cycle like a slot machine
     4. Land on a pose and try it out, or spin again

     The app tracks which poses you've already seen so you won't get repeats until you've gone through the whole
     set.

     ---

     ## Features

     - Slot machine spin animation with deceleration
     - 4 pose categories with curated inspiration photos
     - Session-based tracking — minimizes repeats within a session, resets on refresh
     - Pixel art UI aesthetic
     - No accounts, no backend, no dependencies

     ---

     ## Tech Stack

     - HTML5 / CSS3 / Vanilla JavaScript
     - Static site — no build tools or frameworks
     - Deployed on Vercel

     ---

     ## Project Structure

     ```
     pose-randomizer/
     ├── index.html
     ├── style.css
     ├── script.js
     ├── assets/          # SVG icons and UI elements
     ├── sitting/         # Pose photos by category
     ├── standing/
     ├── group/
     └── selfie/
     ```

     ---

     ## Running Locally

     No setup required. Just open `index.html` in a browser, or serve it with any static file server:

     ```bash
     npx serve .
     ```
