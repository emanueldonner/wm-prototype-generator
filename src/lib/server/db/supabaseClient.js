import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private';

// @ts-ignore
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
