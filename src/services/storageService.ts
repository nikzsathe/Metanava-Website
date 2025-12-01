import { supabase } from '../utils/supabase';

const BUCKET_NAME = 'blog-images';

/**
 * Upload an image file to Supabase Storage
 * @param file - The image file to upload
 * @param path - Optional custom path/filename. If not provided, generates unique name
 * @returns Public URL of the uploaded image
 */
export const uploadImage = async (
  file: File,
  path?: string
): Promise<string> => {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
  }

  try {
    // Generate unique filename if not provided
    const fileName = path || `${Date.now()}-${Math.random().toString(36).substring(7)}-${file.name}`;
    
    // Remove any special characters and spaces from filename
    const sanitizedFileName = fileName
      .replace(/[^a-zA-Z0-9.-]/g, '-')
      .replace(/-+/g, '-');

    // Upload file to Supabase Storage
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(sanitizedFileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading image:', error);
      throw new Error(`Failed to upload image: ${error.message}`);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(sanitizedFileName);

    return urlData.publicUrl;
  } catch (error: any) {
    console.error('Error in uploadImage:', error);
    throw error;
  }
};

/**
 * Delete an image from Supabase Storage
 * @param filePath - The path/filename of the image to delete
 */
export const deleteImage = async (filePath: string): Promise<void> => {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

  try {
    // Extract filename from URL if full URL is provided
    const fileName = filePath.includes('/') 
      ? filePath.split('/').pop() 
      : filePath;

    if (!fileName) {
      throw new Error('Invalid file path');
    }

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([fileName]);

    if (error) {
      console.error('Error deleting image:', error);
      throw new Error(`Failed to delete image: ${error.message}`);
    }
  } catch (error: any) {
    console.error('Error in deleteImage:', error);
    throw error;
  }
};

/**
 * Check if Supabase Storage is configured
 */
export const isStorageConfigured = (): boolean => {
  return supabase !== null;
};

