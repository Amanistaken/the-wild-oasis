import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://maobkpebqyqdvchopmmg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hb2JrcGVicXlxZHZjaG9wbW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNzExOTQsImV4cCI6MjA3ODk0NzE5NH0.n-0tswWDAcQVwDbnvmGhfBJwpbRgZgQqdkfU_Ay9Sio";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
