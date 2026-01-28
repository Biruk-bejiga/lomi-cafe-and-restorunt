# Assets

Branded photos currently used on the site:
- image-1.png — Exterior storefront at night
- image-2.png — Hearty Ethiopian main dish with injera
- image-3.png — Breakfast set with bread, tea, and rice
- image-4.png — Printed menu board (breakfast/lunch)
- image-5.png — Interior seating with projector screen

Usage notes:
- Images are referenced directly from `index.html`; keep filenames the same or update the `src` attributes if you replace them.
- Each `img` includes a `data-fallback` URL so the page stays visual if a local asset is missing.
- Preferred minimum width: 1200px for hero/menu cards to stay crisp on retina displays.

Google Maps Embed API:
- The map iframe reads `window.MAPS_API_KEY` **or** the `data-map-key` attribute on the iframe.
- Provide a valid Embed API key at runtime without hardcoding it in the HTML where possible.
- If no key is provided, the iframe falls back to the standard Maps share URL defined in `data-map-fallback`.
