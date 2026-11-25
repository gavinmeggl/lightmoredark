# Light More Dark

Website for the Light More Dark collective — photo, video, BMX and clothing.
Built with Next.js, ready for Vercel.

## Edit content
Everything (products, photos, videos, riders, socials, ticker text) is in
`src/content/site.ts`. Put images in `public/media/` and reference them as
`/media/your-file.jpg`.

- **Videos:** paste a YouTube ID (`youtubeId`) or Vimeo ID (`vimeoId`).
- **Selling:** create a Stripe Payment Link for each product
  (Stripe Dashboard → Payment Links) and paste it into `buyLink`
  (or `sizeLinks` for one link per size). Without a link, the button
  falls back to "Order by email".

## Run locally
    npm install
    npm run dev

## Deploy
Push to GitHub, then on vercel.com → Add New → Project → import the repo.
No settings needed.
