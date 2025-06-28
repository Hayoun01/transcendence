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
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`).run();

export { db, uuid };