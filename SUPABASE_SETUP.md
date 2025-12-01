# Supabase Blog Management Setup Guide

This guide will help you set up Supabase for managing blog posts on your Netlify-hosted website.

## Step 1: Create a Supabase Account and Project


WYt2@*tpUNnbR@h

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Click "New Project"
4. Fill in:
   - **Name**: Metanova Tech Blog (or your preferred name)
   - **Database Password**: Create a strong password (save this!) WYt2@*tpUNnbR@h
   - **Region**: Choose closest to your users
5. Click "Create new project" and wait 2-3 minutes for setup

## Step 2: Create the Database Table

1. Once your project is ready, go to the **SQL Editor** in the left sidebar
2. Click "New Query"
3. Paste this SQL and click "Run":

```sql
-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  thumb VARCHAR(500),
  tag VARCHAR(100),
  date VARCHAR(100),
  page VARCHAR(50) DEFAULT 'blog_1',
  content TEXT,
  excerpt TEXT,
  featured_image VARCHAR(500),
  author_name VARCHAR(200),
  author_image VARCHAR(500),
  tags TEXT[],
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_page ON blog_posts(page);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_date ON blog_posts(date DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow public read access to published posts
CREATE POLICY "Allow public read access to published posts"
ON blog_posts
FOR SELECT
USING (published = true);

-- Create policy: Allow authenticated users to insert (admin access)
-- Note: You'll need to set up authentication or use service role key for admin operations
CREATE POLICY "Allow authenticated users to insert"
ON blog_posts
FOR INSERT
WITH CHECK (true);

-- Create policy: Allow authenticated users to update
CREATE POLICY "Allow authenticated users to update"
ON blog_posts
FOR UPDATE
USING (true);

-- Create policy: Allow authenticated users to delete
CREATE POLICY "Allow authenticated users to delete"
ON blog_posts
FOR DELETE
USING (true);

-- Optional: Insert sample data
INSERT INTO blog_posts (title, slug, thumb, tag, date, page, excerpt, published) VALUES
('Sample Blog Post', 'sample-blog-post', '/assets/img/blog/thumb.jpg', 'Development', 'August 12, 2024', 'blog_1', 'This is a sample blog post excerpt.', true);
```

4. Click "Run" to execute the SQL

## Step 3: Get Your API Credentials

1. Go to **Settings** (gear icon) → **API**
2. Click on the **"Legacy anon, service_role API keys"** tab (not the "Publishable and secret API keys" tab)
3. You'll need:
   - **Project URL** - Found at the top under "Project URL"
     - Example: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public key** - Found under "Project API keys" → **"anon public"**
     - This is the key you'll use for your frontend React app
     - ✅ **USE THIS ONE** - Safe to expose in client-side code
   - **service_role key** (Optional, for admin functions only)
     - ⚠️ **KEEP THIS SECRET!** Never expose this in client-side code
     - Only use this in serverless functions or backend services

## Step 4: Set Up Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add these variables:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**Important**: 
- ✅ Use the **anon public key** (NOT the service_role key)
- The anon key is safe to use in client-side React code
- Never commit the `.env` file to Git if it contains secrets
- The `.env` file should already be in `.gitignore`
- For Netlify, you'll need to add these as environment variables in the Netlify dashboard
- ⚠️ **NEVER** use the service_role key in your React app - it bypasses all security!

## Step 5: Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Navigate to: **Site Settings** → **Environment variables**
3. Add:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
4. Redeploy your site after adding the variables

## Step 6: Set Up Authentication (Optional but Recommended)

For the admin panel to work securely, you have two options:

### Option A: Use Service Role Key (Simpler but less secure)
- Store the service_role key in Netlify environment variables
- Use it only in serverless functions (not in client-side code)
- This bypasses RLS policies

### Option B: Set Up Supabase Auth (More secure)
1. Go to **Authentication** → **Providers** in Supabase
2. Enable email/password or other providers
3. Create admin users
4. Update RLS policies to check user authentication

## Step 7: Optional - Update RLS Policies for Admin Access

If you want to allow authenticated admin users only:

```sql
-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated users to insert" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to update" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to delete" ON blog_posts;

-- Create admin-only policies (requires auth.users table)
CREATE POLICY "Allow admin users to insert"
ON blog_posts
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND auth.users.email = 'your-admin-email@example.com'
  )
);

-- Repeat for UPDATE and DELETE policies
```

## Troubleshooting

### Can't connect to Supabase?
- Check that your environment variables are set correctly
- Verify your Supabase project is active
- Check browser console for error messages

### "Row Level Security policy violation" error?
- Make sure your RLS policies allow the operation you're trying to perform
- Check if you're using the correct API key (anon vs service_role)

### Posts not showing up?
- Verify `published` is set to `true`
- Check the browser console for errors
- Verify your query filters are correct

## Next Steps

1. After setting up Supabase, you can use the admin panel at `/admin/blog` to create posts
2. The blog posts will automatically appear on your blog pages
3. You can manage posts directly in Supabase dashboard's Table Editor if needed

## Support

- Supabase Docs: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com

