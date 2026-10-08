/*
# Create appointments table for Glow & Grace Beauty Parlour

1. New Tables
- `appointments` — stores booking requests submitted from the website.
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — customer's full name
  - `phone` (text, not null) — customer's phone number
  - `service` (text, not null) — selected salon service
  - `preferred_date` (date, not null) — requested appointment date
  - `preferred_time` (text, not null) — requested time slot
  - `message` (text, nullable) — optional notes from the customer
  - `status` (text, not null, default 'pending') — appointment status (pending, confirmed, completed, cancelled)
  - `created_at` (timestamptz, default now()) — when the booking was submitted

2. Security
- Enable RLS on `appointments`.
- INSERT: allow anon + authenticated (any website visitor can book an appointment without signing in).
- SELECT/UPDATE/DELETE: authenticated only (salon owner manages bookings after logging in).
  Customer names and phone numbers are private — anon visitors cannot read appointment rows.
- An index on `created_at` for chronological ordering.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments"
ON appointments FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_appointments" ON appointments;
CREATE POLICY "authenticated_select_appointments"
ON appointments FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "authenticated_update_appointments" ON appointments;
CREATE POLICY "authenticated_update_appointments"
ON appointments FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_appointments" ON appointments;
CREATE POLICY "authenticated_delete_appointments"
ON appointments FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments (created_at DESC);