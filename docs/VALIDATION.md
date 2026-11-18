# Initialization validation

Date: 2026-11-18

## Verified locally

- Initialized the empty directory as a Git repository on `main`.
- Configured `origin` as `git@github.com:devilyouwei/MobileHarness-site.git`; `git ls-remote` succeeded and returned no refs.
- Installed exact direct dependency versions and generated `package-lock.json` with Node.js 24.18.1 and npm 11.16.0.
- `npm run check`: zero errors, warnings or hints.
- `npm run build`: generated one static page in `dist/`.
- The production preview returned HTTP 200 for `/MobileHarness-site/` and `/MobileHarness-site/favicon.svg`.
- Generated HTML contains zero script tags. Public asset links respect the case-sensitive project base path.
- `npm run format:check`: passed after formatting.

## Dependency audit

`npm audit` reported 12 high-severity affected dependency entries, all tracing to the picomatch ReDoS advisory [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf). The registry reported picomatch 4.0.7 as the latest version; the advisory includes versions through 4.0.7. This remains unresolved. No forced downgrade or cross-major override was applied.

These dependencies are used by the build/development tooling; the initial deployed page contains static HTML/CSS/SVG and no browser JavaScript. This does not negate the tooling advisory. Recheck upstream releases before updating dependencies.

## Not verified

- Browser visual and responsive acceptance has not been performed. A preview-open request was queued in Codex; that is not visual verification.
- GitHub Actions and the public Pages URL have not been run or verified. No commit or push was performed, and GitHub repository settings were not changed.
- Real demo media, paper content and 3D interaction are outside initialization scope.

## Research showcase validation — 2026-11-18

Supersedes initialization-only descriptions above for the current website.

- Astro check: 11 files, zero errors/warnings/hints; production build generates seven routes.
- Swiper and Motion installed with exact versions. npm still reports 12 high-severity entries from the existing dependency advisory.
- Four MP4 animations total approximately 1.7 MB; all public media approximately 2.1 MB. Original GIFs are not published.
- In-app browser inspected at 390×844, 768×1024 and 1440×1000. Homepage has no horizontal document overflow at these widths. Phone light theme, desktop dark theme, tablet robotics layout and Cover Flow were visually inspected.
- Selecting Light and reloading preserved the theme. All observed images loaded.
- Homepage had one attached video source. Opening the video dialog left one source and one playing video. Escape closed the dialog and restored focus to its trigger. Robotics page initially had zero attached video sources.
- Next-slide control selected the next demo with one attached source. Native dialog provides focus containment and Escape handling.
- Remaining manual acceptance: physical Safari/device behavior, Save-Data and reduced-motion emulation, storage denial, network failure simulation, full network-request tracing and copy-permission failure. These are implemented paths, not claimed tested here.
- No public deployment, commit or push performed.

## Slogan and showcase refinement

- Homepage subtitle and software citation updated; alternate robotics slogan retained as an HTML comment.
- Browser verified initial second slide has both previous and next cards; stage computed border is 0px and background is transparent. Visually inspected the centered, unboxed media layout.
- Astro check and production build passed after changes.

## GitHub and theme icons

- Two Code links render the shared inline GitHub SVG.
- Browser click changed Dark to Light; button label changed to “Switch to dark theme”. Reload retained Light.
- Visually verified icon alignment and theme button. Astro type check and production build passed.

## First-screen spacing

Reduced hero and showcase spacing without changing heading or video sizes. In the 748px-high browser viewport the demo stage begins around 403px, leaving approximately 345px of media visible immediately. Visually verified the title, action row and both adjacent cards. Format check and production build passed.

## Robotics subtitle

Updated homepage eyebrow to “Perception · Cognition · Action” and subtitle to “A Smartphone-Driven Agent Harness for Robotics”; retained the mobile-harness alternative in source comments. Prettier and production build completed successfully.

## Compact project metadata

Removed the hero action row and its unused styles. Browser verified maintainer and Citation share one line, with two icons and no old action container. Type check and production build passed.

## Hero typography

Reduced homepage title and subtitle sizing and italicized the homepage subtitle. Prettier and production build passed. Category subtitle styling remains separate.
