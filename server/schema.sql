CREATE TABLE IF NOT EXISTS brands (id integer PRIMARY KEY, name text NOT NULL UNIQUE);
CREATE TABLE IF NOT EXISTS categories (id integer PRIMARY KEY, name text NOT NULL UNIQUE);
CREATE TABLE IF NOT EXISTS products (
 id integer PRIMARY KEY, name text NOT NULL,
 brand_id integer NOT NULL REFERENCES brands(id), category_id integer NOT NULL REFERENCES categories(id),
 release_year integer NOT NULL, price_cents integer NOT NULL CHECK(price_cents>=0),
 stock integer NOT NULL CHECK(stock>=0), icon text NOT NULL, color text NOT NULL,
 description text NOT NULL, official_url text NOT NULL
);
CREATE TABLE IF NOT EXISTS orders (
 id uuid PRIMARY KEY, request_id uuid NOT NULL UNIQUE, fingerprint text NOT NULL,
 customer_name text NOT NULL, email text NOT NULL, address text NOT NULL,
 subtotal_cents integer NOT NULL CHECK(subtotal_cents>=0),
 shipping_cents integer NOT NULL CHECK(shipping_cents>=0),
 total_cents integer NOT NULL CHECK(total_cents=subtotal_cents+shipping_cents),
 status text NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','paid','cancelled')),
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS order_items (
 order_id uuid NOT NULL REFERENCES orders(id), product_id integer NOT NULL REFERENCES products(id),
 product_name text NOT NULL, unit_price_cents integer NOT NULL CHECK(unit_price_cents>=0),
 quantity integer NOT NULL CHECK(quantity BETWEEN 1 AND 99), PRIMARY KEY(order_id,product_id)
);

