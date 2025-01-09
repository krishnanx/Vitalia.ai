import { createClient } from '@supabase/supabase-js'

import Constants from 'expo-constants';
const SUPABASE_URL = `${Constants.expoConfig.extra.SUPABASE_URL}`;
const SUPABASE_KEY = `${Constants.expoConfig.extra.SUPABASE_KEY}`;

console.log("URL:", SUPABASE_URL);

console.log("Key:", SUPABASE_KEY);


////console.log("supa:",supabaseUrl)

////console.log("key:",supabaseKey)
export const supabase = createClient( SUPABASE_URL, SUPABASE_KEY)
