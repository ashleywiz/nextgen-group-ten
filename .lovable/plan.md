## Why the images don't show on your live site

Your custom domain **www.grouptenplus.com** is pointed at **GitHub Pages** (there's a `CNAME` file with `grouptenplus.com`, and requests to it return `server: GitHub.com`). It is **not** served by Lovable hosting.

The two new photos were uploaded as **Lovable CDN assets**, which live at URLs like:

```
/__l5e/assets-v1/<id>/team-van.png
```

That path is served by Lovable's infrastructure only. I verified:

- `https://group-ten-plus-reimagined.lovable.app/__l5e/assets-v1/.../team-van.png` → **200 OK, image/png** ✅
- `https://www.grouptenplus.com/__l5e/assets-v1/.../team-van.png` → **301 → GitHub Pages 404** ❌

That's why the `<img>` tag renders the alt text but no picture on your live domain. The "Publish" button in Lovable pushes to the Lovable-hosted URL, which is why the update indicator says up-to-date — but your custom domain isn't fetching from there.

Nothing is broken in the code. This is a hosting/DNS mismatch.

## Options — pick one

### Option A — Keep GitHub Pages, stop using the CDN for these two images (recommended if you want to keep your current GitHub Pages workflow)

Migrate the two new images off the Lovable CDN and back into the repo so GitHub Pages can serve them directly.

Steps:
1. Re-download the two images from the Lovable CDN and save them into `src/assets/` as real files:
   - `src/assets/team-van.png`
   - `src/assets/team-tools.png`
2. Delete the two `.asset.json` pointer files.
3. Update `HeroSection.tsx` and `StandardsSection.tsx` to import the real image files instead of the `.asset.json` URLs:
   ```ts
   import teamVan from "@/assets/team-van.png";
   // <img src={teamVan} ... />
   ```
4. Rebuild and republish. Vite will bundle the images into `dist/assets/…` and GitHub Pages will serve them.

Trade-off: ~3.7 MB of images added to the repo, but everything just works on your current domain.

### Option B — Point www.grouptenplus.com at Lovable hosting instead of GitHub Pages

Connect the custom domain to Lovable in **Project settings → Domains** (available after publishing, which you've done). Update the DNS records at your registrar as Lovable's Domains screen instructs, and remove the GitHub Pages CNAME. Then the CDN asset paths (and any future Lovable-hosted features) will resolve on your custom domain.

Trade-off: you stop hosting on GitHub Pages; DNS change takes a bit of time to propagate.

## What I need from you

Reply with **A** or **B** and I'll execute it. If **A**, I'll do the file swap and rewrites in one pass. If **B**, I'll walk you through the exact settings screen (I can't change your DNS for you).
