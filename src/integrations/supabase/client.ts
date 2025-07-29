import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yvvibyvmsbimocxhywzq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2dmlieXZtc2JpbW9jeGh5d3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MDYzODUsImV4cCI6MjA2OTM4MjM4NX0.OckIuDLbKSodxRUnEj8xk9zUH-odYWGbCF6PkQhYnXE';

export const supabase = createClient(supabaseUrl, supabaseKey);