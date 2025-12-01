# Blog Management System

A complete blog management system using Supabase as the backend database, allowing you to upload and manage blog posts directly from your website.

## Features

- ✅ Create, edit, and delete blog posts from an admin panel
- ✅ Dynamic blog post pages with custom slugs
- ✅ Full HTML content support for rich formatting
- ✅ Image upload support (via URL)
- ✅ Tag/category management
- ✅ Publish/draft status
- ✅ Automatic fallback to static data if Supabase is unavailable
- ✅ SEO-friendly URLs with custom slugs
- ✅ Responsive admin interface

## Quick Start

### 1. Set Up Supabase

Follow the detailed instructions in `SUPABASE_SETUP.md` to:
- Create a Supabase account and project
- Set up the database table
- Get your API credentials

### 2. Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**For Netlify Deployment:**
1. Go to your Netlify dashboard
2. Navigate to: **Site Settings** → **Environment variables**
3. Add both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
4. Redeploy your site

### 3. Access the Admin Panel

Once deployed, visit: **`/admin/blog`** on your website

Example: `https://metanovatech.com//admin/blog`

### 4. Create Your First Blog Post

1. Click "Create New Post" button
2. Fill in the form:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated from title (can be edited)
   - **Thumbnail URL**: URL to the thumbnail image
   - **Tag**: Category/tag for the post
   - **Date**: Display date (e.g., "August 12, 2024")
   - **Page**: Select which page to show on (blog_1, home_1, etc.)
   - **Content**: Full HTML content of your blog post
   - **Published**: Check to publish immediately
3. Click "Create Blog Post"

## File Structure

```
src/
├── components/
│   └── admin/
│       └── BlogPostForm.tsx       # Admin form component
├── pages/
│   ├── admin/
│   │   └── BlogAdminMain.tsx      # Admin dashboard page
│   └── BlogDetailsDynamic.tsx     # Dynamic blog detail page
├── services/
│   └── blogService.ts             # Blog CRUD operations
├── hooks/
│   └── useBlogPosts.ts            # React hook for fetching posts
└── utils/
    └── supabase.ts                # Supabase client configuration
```

## Usage in Components

### Fetching Blog Posts

Use the `useBlogPosts` hook in your components:

```tsx
import { useBlogPosts } from '../hooks/useBlogPosts';

const MyComponent = () => {
  const { posts, loading, error } = useBlogPosts({ 
    page: 'blog_1',  // Optional: filter by page
    useFallback: true  // Optional: fallback to static data
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <Link to={`/blog/${post.slug}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};
```

### Fetching a Single Post

```tsx
import { getBlogPostBySlug } from '../services/blogService';

const post = await getBlogPostBySlug('my-blog-post-slug');
```

## Routes

- `/blog` - Main blog listing page
- `/blog/:slug` - Individual blog post page (dynamic)
- `/admin/blog` - Admin dashboard for managing posts

## Database Schema

The blog posts are stored in a `blog_posts` table with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| id | BIGSERIAL | Primary key |
| title | VARCHAR(500) | Blog post title |
| slug | VARCHAR(500) | URL-friendly identifier (unique) |
| thumb | VARCHAR(500) | Thumbnail image URL |
| tag | VARCHAR(100) | Category/tag |
| date | VARCHAR(100) | Display date |
| page | VARCHAR(50) | Page identifier (blog_1, home_1, etc.) |
| content | TEXT | Full HTML content |
| excerpt | TEXT | Short description |
| featured_image | VARCHAR(500) | Featured image URL |
| author_name | VARCHAR(200) | Author name |
| author_image | VARCHAR(500) | Author image URL |
| tags | TEXT[] | Array of tags |
| published | BOOLEAN | Publish status |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

## Security Notes

⚠️ **Important**: The current setup uses Row Level Security (RLS) with public read access. For production:

1. **Add Authentication**: Implement proper admin authentication
2. **Use Service Role Key**: For admin operations, use Netlify Functions with the service_role key
3. **Restrict Admin Access**: Add password protection or authentication to `/admin/blog`
4. **Review RLS Policies**: Ensure your Supabase RLS policies match your security requirements

## Troubleshooting

### Posts Not Showing

1. Check that `published` is set to `true` in the database
2. Verify your environment variables are set correctly
3. Check browser console for errors
4. Verify Supabase connection in browser Network tab

### Can't Create Posts

1. Check Supabase RLS policies allow inserts
2. Verify you're using the correct API key
3. Check browser console for error messages
4. Ensure all required fields are filled

### Fallback Not Working

If Supabase is unavailable, the system will automatically fall back to static data from `src/data/BlogData.ts`. Make sure this file exists and has data.

## Support

- Supabase Documentation: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
- Check `SUPABASE_SETUP.md` for detailed setup instructions

