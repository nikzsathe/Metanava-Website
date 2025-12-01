import { supabase } from '../utils/supabase';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  thumb: string;
  tag: string;
  date: string;
  page: string;
  content?: string;
  excerpt?: string;
  featured_image?: string;
  author_name?: string;
  author_image?: string;
  tags?: string[];
  created_at?: string;
  updated_at?: string;
  published?: boolean;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  thumb: string;
  tag: string;
  date: string;
  page: string;
  content?: string;
  excerpt?: string;
  featured_image?: string;
  author_name?: string;
  author_image?: string;
  tags?: string[];
  published?: boolean;
}

/**
 * Fetch all blog posts
 */
export const getAllBlogPosts = async (page?: string, publishedOnly: boolean = true): Promise<BlogPost[]> => {
  // Return empty array if Supabase is not configured
  if (!supabase) {
    return [];
  }

  try {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (page) {
      query = query.eq('page', page);
    }

    if (publishedOnly) {
      query = query.eq('published', true);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getAllBlogPosts:', error);
    return [];
  }
};

/**
 * Fetch a single blog post by slug
 */
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  if (!supabase) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getBlogPostBySlug:', error);
    return null;
  }
};

/**
 * Fetch a single blog post by ID
 */
export const getBlogPostById = async (id: number): Promise<BlogPost | null> => {
  if (!supabase) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getBlogPostById:', error);
    return null;
  }
};

/**
 * Create a new blog post
 */
export const createBlogPost = async (postData: BlogPostFormData): Promise<BlogPost | null> => {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([postData])
      .select()
      .single();

    if (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createBlogPost:', error);
    throw error;
  }
};

/**
 * Update an existing blog post
 */
export const updateBlogPost = async (id: number, postData: Partial<BlogPostFormData>): Promise<BlogPost | null> => {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ ...postData, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating blog post:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateBlogPost:', error);
    throw error;
  }
};

/**
 * Delete a blog post
 */
export const deleteBlogPost = async (id: number): Promise<boolean> => {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  }

  try {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Error in deleteBlogPost:', error);
    throw error;
  }
};

/**
 * Generate a slug from title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

