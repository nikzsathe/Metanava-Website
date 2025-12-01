import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase configuration
// Replace these with your actual Supabase project credentials
// Get them from: https://app.supabase.com -> Your Project -> Settings -> API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client only if credentials are available
// This prevents crashes when Supabase is not configured
let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey && supabaseUrl.trim() !== '' && supabaseAnonKey.trim() !== '') {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
  }
} else {
  console.warn('Supabase credentials not found. Blog features will use fallback data. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file');
}

// Export supabase - will be null if not configured
export { supabase };

