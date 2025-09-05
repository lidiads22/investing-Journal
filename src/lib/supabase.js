// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gdyunvtlmgukboocyovc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkeXVudnRsbWd1a2Jvb2N5b3ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMzg2MzcsImV4cCI6MjA3MjYxNDYzN30.dItONRhqxTwFRoOGg2bwb_QVUWrjFkRyXPnHjiQ9Lro' 
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
