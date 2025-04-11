import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pfymxqexvghdbxdpaeoy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeW14cWV4dmdoZGJ4ZHBhZW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMjY2MTksImV4cCI6MjA1OTgwMjYxOX0.oVOr25mWL5Jec6Z_TV3VGKYROGEKbO02L8Y6VfylmC4';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey); 