# Supabase Storage Setup for Images

Yes! Supabase provides built-in file storage that's perfect for storing blog post images. This guide will help you set it up.

## What is Supabase Storage?

Supabase Storage is an S3-compatible object storage service that allows you to:
- Store images, documents, and other files
- Organize files in "buckets" (like folders)
- Control access with policies
- Get public URLs for your files
- Upload files directly from your frontend

## Step 1: Create a Storage Bucket

1. Go to your Supabase Dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **"New bucket"**
4. Fill in:
   - **Name**: `blog-images` (or any name you prefer)
   - **Public bucket**: ✅ Check this (so images are publicly accessible)
   - **File size limit**: 5MB (or adjust as needed)
   - **Allowed MIME types**: `image/jpeg, image/png, image/gif, image/webp`
5. Click **"Create bucket"**

## Step 2: Set Up Storage Policies (RLS)

For public access to images:

1. Go to **Storage** → **Policies**
2. Select your `blog-images` bucket
3. Click **"New Policy"**
4. Choose **"For full customization"**
5. Add a policy for public read access:

**Policy Name**: `Public Read Access`

**Policy Definition**:
```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'blog-images' );
```

**For Upload Access** (Admin only):
```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'blog-images' AND auth.role() = 'authenticated' );

CREATE POLICY "Authenticated users can update"
ON storage.objects FOR UPDATE
USING ( bucket_id = 'blog-images' AND auth.role() = 'authenticated' );

CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING ( bucket_id = 'blog-images' AND auth.role() = 'authenticated' );
```

## Step 3: Get Your Storage URL

After creating the bucket, your images will be accessible at:
```
https://[your-project-id].supabase.co/storage/v1/object/public/blog-images/[filename]
```

## Step 4: Update Your Blog Service (Optional)

You can update the blog service to upload images directly to Supabase Storage instead of requiring URL input.

## Benefits of Using Supabase Storage

✅ **Integrated**: Works seamlessly with your Supabase database
✅ **Scalable**: Handles large files efficiently
✅ **CDN**: Files are served via CDN for fast delivery
✅ **Secure**: Built-in RLS policies for access control
✅ **Free Tier**: 1GB storage included in free tier

## Uploading Images

### Option 1: Manual Upload via Dashboard
1. Go to **Storage** → **blog-images**
2. Click **"Upload file"**
3. Select your image
4. Copy the public URL

### Option 2: Programmatic Upload (Recommended)
Use the Supabase client to upload images directly from your admin form.

## File Naming Best Practices

- Use unique filenames (e.g., timestamp-based)
- Include file extension
- Avoid special characters
- Example: `blog-post-2024-01-15-thumbnail.jpg`

## Storage Limits

**Free Tier:**
- 1GB storage
- 2GB bandwidth/month

**Pro Tier:**
- 100GB storage
- 200GB bandwidth/month

## Next Steps

1. Set up the storage bucket following steps above
2. Update your blog admin form to support image uploads
3. Test uploading an image
4. Verify images are accessible via public URLs

## Troubleshooting

**Images not loading?**
- Check bucket is set to "Public"
- Verify RLS policies allow public read access
- Check file URL is correct

**Upload fails?**
- Verify file size is under limit
- Check MIME type is allowed
- Ensure upload policies are set correctly

