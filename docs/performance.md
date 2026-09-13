# Loading and navigation

The homepage preloads the 3D model from the initial HTML, before the Three.js bundle finishes loading. The GLB is byte-identical to `public/scene.glb` and needs no special content-encoding headers. `/assets/hero/` receives a one-year immutable cache header; the same bytes keep the same hashed URL across deployments. A precompressed-file experiment was removed because servers without the matching encoding header could not load it and displayed the fallback image instead.

The profile photo uses prebuilt, lossless WebP files at 100–600px and the full 2400px resolution. The browser chooses a suitable size for the 100px display and its pixel density. The preparation script compares decoded pixels against the resized source at every resolution. It also keeps the original PNG untouched. The photo is eager-loaded with a matching responsive preload, without a first-request image-optimization step.

Regenerate these assets after replacing the source model or photo by running `node scripts/prepare-hero-assets.js` with Sharp available, as for the existing art-preview preparation script. Commit the generated `lib/hero-assets.json` and `public/assets/hero/` files. Deployment does not run image processing or need Sharp for these assets. Keep old hashed files while older deployments might reference them.

## Navigation

The pages contain local content; their previous `getServerSideProps` exports only returned the theme cookie. Theme initialization now lives in the custom App's `getInitialProps`: it reads the request cookie for initial server rendering and the browser cookie for client navigation. No page-data request is needed for tab or project navigation. Only the light/dark preference is serialized. This preserves server-rendered theme selection; it does **not** turn initial HTML into a static/CDN-cached page.

This uses the existing Next.js 12 Pages Router API deliberately. [Next.js documents the server-first/client-navigation behavior](https://nextjs.org/docs/pages/api-reference/functions/get-initial-props). A future page that adds server data fetching must handle that separately rather than assuming this optimization applies.

Desktop links retain Next.js's automatic prefetching. Opening the mobile menu also prepares its destination bundles, except when Save-Data is enabled. Outgoing fades take 180ms. A thin loading indicator appears for route changes taking longer than 150ms and clears on completion or failure.

## Vercel

`vercel.json` sets `fluid: true` for the next deployment. [Fluid compute](https://vercel.com/docs/fluid-compute) reduces cold-start frequency and supports production bytecode caching on Node.js 20+. Confirm the project's supported Node.js runtime in its settings; this change does not change the runtime or deploy the site.

The hashed assets use [Vercel's CDN caching](https://vercel.com/docs/caching/cdn-cache). Do not add public HTML caching while HTML depends on the theme cookie. No region override is imposed: choose a [function region](https://vercel.com/docs/functions/configuring-functions/region) using actual visitor geography, rather than guessing or moving all requests farther from other visitors.

After deployment, compare fresh and repeat visits in browser Network tools: the model request should start from the preload, the photo should use `/assets/hero/` instead of `/_next/image`, and normal internal navigation should not request `/_next/data/*.json`. Check cache headers and Vercel function timing before attributing remaining delays to cold starts. Model parsing, GPU setup, device speed, and network transfer can still take time; no production latency reduction is claimed without measurement.
