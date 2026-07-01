# The Thousand Year Tank

A complete mobile-first browser idle incremental game about feeding Harold, an immortal lobster, until a seaside cult becomes a cosmic problem.

## How to run

Because the game uses ES modules and a service worker, run it from a local web server:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## File structure

- `index.html` — app shell and canvas.
- `styles.css` — mobile-first portrait UI, chunky dark nautical theme.
- `src/main.js` — game loop, economy logic, actions, offline progress, unlocks.
- `src/config.js` — starting values, tabs, stage definitions, stage flavour text.
- `src/upgrades.js` — upgrade and relic data plus cost helper.
- `src/rituals.js` — timed rituals and final ritual chain data.
- `src/achievements.js` — achievement definitions.
- `src/state.js` — default state and save migration merge.
- `src/save.js` — localStorage save/export/import/reset helpers.
- `src/render.js` — DOM rendering and UI event wiring.
- `src/visuals.js` — original canvas pixel-art tank and lobster renderer.
- `src/utils.js` — formatting and small helpers.
- `manifest.json` and `service-worker.js` — PWA/offline-after-first-load support.

## Controls and core loop

1. Click **Haul Fish Bucket** for Fish.
2. Click **Feed Lobster** to spend Fish, reduce Hunger, and gain Growth.
3. Buy upgrades to increase fish, feeding, cult, automation, depth, and madness systems.
4. At 100% Growth, use the **Moult** tab to gain permanent Shell.
5. Spend Shell in **Relics** for permanent bonuses.
6. Recruit and assign followers in **Cult**.
7. Perform timed boosts and the endgame chain in **Rituals**.
8. Evolve Harold through 10 stages toward **World Eater God**.

## Resources

- **Fish**: manual and passive main currency.
- **Offerings**: cult/shrine currency.
- **Faith**: follower and shrine power for automation and rituals.
- **Shell**: prestige currency from moulting.
- **Depth**: mid/late game underwater currency.
- **Madness**: late game risk/reward currency.
- **Growth**: progress toward the next Moult.
- **Hunger**: rises over time; high Hunger lowers feeding efficiency, low Hunger improves it.

## Systems implemented

- Save/load with autosave, manual save, export/import, reset, and unload save.
- Offline progress capped at 8 hours.
- Responsive mobile-first tabbed UI.
- Original canvas pixel-art lobster, tank, bubbles, environment changes, moon, candles, harbour details.
- 10 evolution stages with stage flavour pools.
- Upgrade object model and relic object model.
- Prestige/Moult system with Shell gain formula and Overgrowth after Stage 4.
- Cult followers, devotion/suspicion, and assignable roles.
- Rituals, cooldowns, final ritual chain, ending panel, endless World Shell bonus.
- Achievements with toast notifications.
- Hidden debug mode: press `D` three times or use the Settings button.

## Where to edit balance

- Start values, base feed values, hunger rate, offline cap, tabs, stages, and flavour: `src/config.js`.
- Upgrade costs, scaling, max levels, categories, and unlock conditions: `src/upgrades.js`.
- Ritual costs, durations, cooldowns, and unlock conditions: `src/rituals.js`.
- Runtime formulas for income, feed cost, feed growth, shell gain, stage progression, and hunger: `src/main.js`.

## Where to add content

- Add new stage flavour lines in `CONFIG.stages[n].flavour` inside `src/config.js`.
- Add new upgrades to the `UPGRADES` array in `src/upgrades.js`.
- Add permanent relics to the `RELICS` array in `src/upgrades.js`.
- Add achievements to `src/achievements.js`.
- Add rituals to `src/rituals.js` and special effects in `performRitual` if needed.

## Known limitations / placeholders

- Sound is a settings placeholder only; no audio assets are included.
- Visuals are procedural canvas pixel art rather than hand-authored sprite sheets.
- Offline simulation applies passive income, not every automated feed and ritual decision.
- Suspicion is intentionally light and comedic in version 1.

## Suggested next steps

- Add optional original sound effects and mute-aware music loops.
- Add more ritual-specific animations.
- Add a bestiary/lore codex unlocked by achievements.
- Add cloud save support for hosted builds.
- Add more midgame choices around Suspicion and cult role specialization.
