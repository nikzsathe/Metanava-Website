import { useState, useEffect } from 'react';
import { getAllBlogPosts, type BlogPost } from '../services/blogService';
import blog_data from '../data/BlogData';

interface UseBlogPostsOptions {
  page?: string;
  useFallback?: boolean;
}

/**
 * Hook to fetch blog posts from Supabase with fallback to static data
 */
export const useBlogPosts = (options: UseBlogPostsOptions = {}) => {
  const { page, useFallback = true } = options;
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Try to fetch from Supabase first
        const supabasePosts = await getAllBlogPosts(page, true);

        if (supabasePosts && supabasePosts.length > 0) {
          setPosts(supabasePosts);
        } else if (useFallback) {
          // Fallback to static data if Supabase is empty or unavailable
          const filteredStaticData = page
            ? blog_data.filter((item) => item.page === page)
            : blog_data;

          // Convert static data format to BlogPost format
          const convertedPosts: BlogPost[] = filteredStaticData.map((item) => ({
            id: item.id,
            title: item.title,
            slug: generateSlugFromTitle(item.title),
            thumb: item.thumb,
            tag: item.tag,
            date: item.date,
            page: item.page,
            published: true,
          }));

          setPosts(convertedPosts);
        } else {
          setPosts([]);
        }
      } catch (err: any) {
        console.error('Error fetching blog posts:', err);
        setError(err.message || 'Failed to fetch blog posts');

        // Fallback to static data on error
        if (useFallback) {
          const filteredStaticData = page
            ? blog_data.filter((item) => item.page === page)
            : blog_data;

          const convertedPosts: BlogPost[] = filteredStaticData.map((item) => ({
            id: item.id,
            title: item.title,
            slug: generateSlugFromTitle(item.title),
            thumb: item.thumb,
            tag: item.tag,
            date: item.date,
            page: item.page,
            published: true,
          }));

          setPosts(convertedPosts);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, useFallback]);

  return { posts, loading, error };
};

/**
 * Generate a slug from title (fallback function)
 */
const generateSlugFromTitle = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100); // Limit length
};



