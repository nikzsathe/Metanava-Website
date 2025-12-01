/**
 * Script to update sitemap.xml with current date
 * Run with: node scripts/update-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

try {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Update all lastmod dates to today
  sitemapContent = sitemapContent.replace(
    /<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ Sitemap updated with date: ${today}`);
  console.log(`📝 Location: ${sitemapPath}`);
  console.log('\n⚠️  Remember to update "yourdomain.com" with your actual domain before submitting to Google Search Console!');
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}

