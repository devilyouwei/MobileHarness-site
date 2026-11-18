# Website initialization

## Scope

Initialize a small, frontend-only MobileHarness presentation website. Use Astro static generation and TypeScript; deploy build artifacts to GitHub Pages through GitHub Actions. The source repository is independent of the native iOS application.

## Ownership and files

- `src/pages/`: routes and page-specific composition.
- `src/layouts/`: shared HTML document, metadata and global stylesheet import.
- `src/components/`: reusable presentation components; begin with the site header.
- `src/styles/`: shared design tokens and base styles. Component-specific styles stay with their component.
- `public/`: assets served without transformation; begin with a favicon.
- `.github/workflows/`: pull request validation and main-branch Pages deployment.
- Root configuration: npm commands, pinned dependencies, TypeScript, Astro and formatting.
- `README.md`: implemented structure, local development and deployment instructions.

## Behavior and boundaries

The initial English homepage introduces the project and links to its source. It contains no simulated demo, unpublished paper link, backend, account system or external API. Subsequent real demo videos and a Cover Flow presentation are separate work. No React, animation library, state framework or empty future directories are needed for initialization.

Use `https://devilyouwei.github.io` as the site origin and `/MobileHarness-site` as the deployment base. Build to `dist/`. Internal asset URLs must respect the base path. GitHub Pages must be configured to use GitHub Actions before deployment.

## Validation

Install dependencies, run Astro/TypeScript checks, formatting checks and a production build. Check generated page links and assets under the project base path. Remote deployment is not part of initialization; report local checks separately from publication.

## Research showcase implementation

Replace the initial placeholder with the approved English academic showcase: homepage, six statically generated business routes, System/Light/Dark themes, Swiper Cover Flow and Motion entrances. Reuse actual screenshots and convert four source GIFs into MP4 and WebP posters. Content and software citation have one typed owner in src/content.ts. Shared media dialog loads on demand; only the active visible hero preview may autoplay, and all video playback is mutually exclusive. Reduced motion and Save-Data disable automatic previews. Add only src/pages/demos and public/media. Validate seven routes, theme persistence, keyboard dialog behavior, media requests, responsive layouts, formatting, types and build. Do not publish or commit automatically.

## Slogan and showcase refinement

Use “A Mobile Harness for Embodied Agents” as the visible project subtitle and software citation title. Preserve “A Smartphone-Driven Agent Harness for Robotics” in a homepage source comment as an alternative. Initialize Swiper at slide index 1 so both adjacent cards are visible on load, prioritize that poster, and remove the stage background, border and box shadow. Keep the media itself at a portrait aspect ratio without a surrounding decorative box. Validate types, formatting, production build and initial carousel layout.

## Link and theme icons

Add a shared inline SVG icon component for GitHub, sun and moon. Add GitHub marks to both Code links and replace the theme select with an accessible icon button. First visit follows the OS; clicking selects and persists the opposite light/dark theme. Reflect the destination theme in its label/title, retain keyboard focus styling, and use CSS to show the correct icon before scripts initialize. No external requests or runtime icon dependency is required.

## First-screen spacing

Reduce homepage hero top/bottom padding and tighten subtitle, maintainer and action spacing so the demo stage begins within the initial viewport. Keep heading sizes and media dimensions intact. Use a smaller mobile hero inset and reduce the showcase top padding. Validate formatting and build; inspect hero/stage positions in the browser.

## Robotics subtitle and conceptual eyebrow

Switch the visible homepage subtitle to “A Smartphone-Driven Agent Harness for Robotics”, retaining “A Mobile Harness for Embodied Agents” as the alternative comment. Use “Perception · Cognition · Action” for the hero eyebrow to match the project’s conceptual stages. Keep the software citation title unchanged because this edit concerns homepage presentation.

## Compact project metadata

Remove the duplicate hero action row. Render maintainer and Citation as a single centered, wrapping metadata row with user and quotation SVG icons. Keep Demos and Code in navigation, and keep the existing citation anchor. Remove unused hero action/button styles and document the current header.

## Hero typography refinement

Reduce homepage heading and subtitle sizes across breakpoints, and italicize the homepage subtitle. Scope subtitle styling to the hero so category-page typography remains independently readable. Keep existing spacing and layout.
