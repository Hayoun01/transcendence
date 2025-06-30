import Database from "better-sqlite3";
import { v4 as uuid } from 'uuid';
const filepath = "./src/db/ping-pong.db";

const db = new Database(filepath);

db.pragma('journal_mode = WAL');
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY DEFAULT (hex(randomblob(16))),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    avatar_path TEXT,
    avatar_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bio TEXT,
    CHECK(username != '')
    );
`).run();

db.prepare(`
  CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
`).run();

export { db, uuid };