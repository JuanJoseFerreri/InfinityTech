CREATE TABLE IF NOT EXISTS admins (
 id uuid PRIMARY KEY, email text NOT NULL UNIQUE, password_hash text NOT NULL
);
CREATE TABLE IF NOT EXISTS admin_sessions (
 token_hash text PRIMARY KEY, admin_id uuid NOT NULL REFERENCES admins(id),
 expires_at timestamptz NOT NULL
);
ALTER TABLE products ADD COLUMN IF NOT EXISTS revision integer NOT NULL DEFAULT 1;

