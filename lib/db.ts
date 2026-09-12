import postgres from "postgres";

declare global { var portfolioSql: ReturnType<typeof postgres> | undefined; }
export const sql = globalThis.portfolioSql ?? postgres(process.env.DATABASE_URL || "", {
  max: 1,
  prepare: false,
  idle_timeout: 20,
  onnotice: (notice) => {
    if (notice.code !== "42P07") console.log(notice);
  },
});
if (process.env.NODE_ENV !== "production") globalThis.portfolioSql = sql;
let schemaPromise: Promise<void> | undefined;

export function ensureSchema() {
  if (!process.env.DATABASE_URL) return Promise.reject(new Error("DATABASE_URL is not configured."));
  schemaPromise ??= (async () => {
    await sql`CREATE TABLE IF NOT EXISTS reviews (id TEXT PRIMARY KEY, instagram_username VARCHAR(30) NOT NULL, review TEXT NOT NULL, status VARCHAR(10) NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')), created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
    await sql`CREATE TABLE IF NOT EXISTS review_actions (id TEXT PRIMARY KEY, review_id TEXT NOT NULL REFERENCES reviews(id) ON DELETE CASCADE, token_hash CHAR(64) NOT NULL UNIQUE, action VARCHAR(7) NOT NULL CHECK (action IN ('approve', 'reject')), expires_at TIMESTAMPTZ NOT NULL, used_at TIMESTAMPTZ, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW())`;
    await sql`CREATE INDEX IF NOT EXISTS reviews_status_created_idx ON reviews(status, created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS review_actions_review_idx ON review_actions(review_id)`;
  })();
  return schemaPromise;
}
