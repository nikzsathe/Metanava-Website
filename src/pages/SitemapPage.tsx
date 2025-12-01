import { useEffect, useState } from 'react';
import { getAllBlogPosts, type BlogPost } from '../services/blogService';
import { staticRoutes, generateSitemapXML, baseUrl, type SitemapUrl } from '../utils/generateSitemap';

/**
 * Dynamic Sitemap Page
 * This page generates a sitemap.xml that includes blog posts from Supabase
 * Access at: /sitemap.xml
 */
const SitemapPage = () => {
  const [sitemap, setSitemap] = useState<string>('');

  useEffect(() => {
    const generateSitemap = async () => {
      try {
        // Get all published blog posts
        const blogPosts = await getAllBlogPosts(undefined, true);
        
        // Convert blog posts to sitemap URLs
        const blogUrls: SitemapUrl[] = blogPosts.map((post: BlogPost) => ({
          loc: `${baseUrl}/blog/${post.slug}`,
          lastmod: post.updated_at 
            ? new Date(post.updated_at).toISOString().split('T')[0]
            : post.created_at
            ? new Date(post.created_at).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0],
          changefreq: 'weekly' as const,
          priority: 0.7,
        }));

        // Combine static routes with blog posts
        const allUrls = [...staticRoutes, ...blogUrls];

        // Generate XML
        const xml = generateSitemapXML(allUrls);
        setSitemap(xml);
      } catch (error) {
        console.error('Error generating sitemap:', error);
        // Fallback to static routes only
        const xml = generateSitemapXML(staticRoutes);
        setSitemap(xml);
      }
    };

    generateSitemap();
  }, []);

  // Note: This page generates XML. In production, consider using a Netlify Function
  // to serve this as proper XML with correct content-type headers

  // Render as XML (this will work for the route)
  return (
    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '12px' }}>
      {sitemap || 'Generating sitemap...'}
    </pre>
  );
};

export default SitemapPage;

