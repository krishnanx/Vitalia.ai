import { createClient } from '@supabase/supabase-js'

import Constants from 'expo-constants';
const SUPABASE_URL = Constants.expoConfig.extra.SUPABASE_URL ||  'https://ysxdglghdzlrscfpncvh.supabase.co';
const SUPABASE_KEY = Constants.expoConfig.extra.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzeGRnbGdoZHpscnNjZnBuY3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTcyNzUsImV4cCI6MjA1MDE5MzI3NX0.kaaC49R3ewKU9BXZ6NWbIVrHrRPtd1Ych0ANvFzs2JAzzz";
//console.log("URL:", SUPABASE_URL);
//console.log("Key:", SUPABASE_KEY);


////console.log("supa:",supabaseUrl)

////console.log("key:",supabaseKey)
export const supabase = createClient( SUPABASE_URL, SUPABASE_KEY)
