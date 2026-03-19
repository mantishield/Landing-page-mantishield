# Performance Optimization Guide

## Lighthouse Score Targets

- **First Contentful Paint (FCP)**: < 1.2s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

## Optimizations Implemented

### 1. Lazy Loading

#### PixelatedVideoBackground (app/layout.tsx)
```typescript
const PixelatedVideoBackground = dynamic(
  () => import("@/components/visuals/PixelatedVideoBackground"),
  { ssr: false, loading: () => <div className="fixed inset-0 -z-10 bg-black" /> }
);
```

#### ContactForm (app/contact/page.tsx)
```typescript
const ContactForm = dynamic(
  () => import("@/components/ContactForm"),
  { loading: () => <Skeleton /> }
);
```

#### Terminal (app/protocol/page.tsx)
```typescript
const Terminal = dynamic(
  () => import("@/components/Terminal"),
  { ssr: false, loading: () => <LoadingState /> }
);
```

### 2. Image Optimization

- Using `next/image` with `priority` for above-the-fold images
- Added `sizes` attribute for responsive images
- Logo optimized with grayscale filter applied

### 3. Code Splitting

- Dynamic imports for heavy components
- `optimizePackageImports` for `framer-motion` and `lucide-react`
- `prefetch={false}` on non-critical navigation links

### 4. Bundle Analysis

```bash
# Run bundle analyzer
npm run analyze
```

### 5. Caching Headers

Static assets cached for 1 year via `_headers` file:
- Images (png, jpg, webp, svg)
- Videos (mp4)
- Next.js static chunks

## Build Output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    424 B          96.5 kB
├ ○ /contact                             2.61 kB        130 kB
├ ○ /protocol                            4.79 kB        132 kB
└ ○ /services                            138 B          87.6 kB
```

## Recommended Hosting Configurations

### Vercel
Headers are automatically configured for static exports.

### Netlify
The `_headers` file in `public/` configures caching automatically.

### Nginx
```nginx
location ~* \.(png|jpg|jpeg|gif|ico|svg|webp|mp4|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location /_next/static {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## Testing Performance

```bash
# Build and serve locally
npm run build
npx serve dist

# Run Lighthouse audit
npx lighthouse http://localhost:3000 --view
```
