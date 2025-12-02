# Sitemap Setup Guide

Your website now has a sitemap.xml file that Google Search Console can use to index your pages.

## Files Created

1. **`public/sitemap.xml`** - Static sitemap with all your main pages
2. **`public/robots.txt`** - Robots.txt file that references your sitemap
3. **`src/utils/generateSitemap.ts`** - Utility for generating sitemaps dynamically
4. **`netlify.toml`** - Updated to properly serve sitemap.xml

## Important: Update Your Domain

⚠️ **Before using the sitemap, you must update the domain URL:**

1. Open `public/sitemap.xml`
2. Replace `https://metanovatech.com/` with your actual website URL
   - Example: `https://metanovatech.com` or `https://www.metanovatech.com`

3. Open `public/robots.txt`
4. Replace `https://metanovatech.com/` with your actual website URL

## Optionally: Environment Variable

You can also set an environment variable to automatically use your domain:

1. **In Netlify Dashboard:**
   - Go to Site Settings → Environment variables
   - Add: `VITE_SITE_URL` = `https://metanovatech.com/`

2. **Locally (.env file):**
   ```env
   VITE_SITE_URL=https://metanovatech.com/
   ```

## Submitting to Google Search Console

### Step 1: Verify Your Website
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Verify ownership using one of the methods provided

### Step 2: Submit Your Sitemap
1. Once verified, go to **Sitemaps** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **Submit**

That's it! Google will now crawl your sitemap.

## What's Included in the Sitemap

The sitemap includes:

### Main Pages (Priority 0.9-1.0)
- Homepage (`/`)
- About (`/about`)
- Services (`/service`)
- Contact (`/contact`)

### Service Detail Pages (Priority 0.8)
- B2B Lead Generation
- Demand Generation
- Account-Based Marketing
- Content Syndication
- Digital Marketing
- Email Marketing

### Content Pages (Priority 0.6-0.8)
- Blog listing (`/blog`)
- Blog sidebar (`/blog-sidebar`)
- Careers (`/careers`)
- Team (`/team`)
- FAQ (`/faq`)

### Legal Pages (Priority 0.3)
- Privacy Policy
- Terms & Conditions
- Cookies Policy
- CASL Policy

## Dynamic Blog Posts

Currently, the static sitemap doesn't include individual blog posts. To include blog posts:

1. **Option 1: Manual Update** (Simplest)
   - When you publish a blog post, manually add it to `public/sitemap.xml`
   - Format:
   ```xml
   <url>
     <loc>https://metanovatech.com//blog/your-post-slug</loc>
     <lastmod>2024-01-15</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.7</priority>
   </url>
   ```

2. **Option 2: Dynamic Sitemap** (Advanced)
   - Use the `generateSitemap.ts` utility
   - Create a Netlify Function or API route
   - This will automatically include blog posts from Supabase

## Updating the Sitemap

You should update your sitemap when:
- Adding new pages
- Publishing new blog posts
- Making significant content updates

Update the `<lastmod>` date to today's date in YYYY-MM-DD format.

## Testing Your Sitemap

1. **Check if it's accessible:**
   - Visit: `https://metanovatech.com//sitemap.xml`
   - You should see the XML sitemap

2. **Validate your sitemap:**
   - Use Google's [Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
   - Or use Google Search Console's sitemap tester

## Robots.txt

The robots.txt file is configured to:
- Allow all search engines to crawl your site
- Disallow admin pages (`/admin/`)
- Disallow error pages
- Reference your sitemap location

## Need Help?

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap Documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)


