-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_two_factor_auth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "method" TEXT NOT NULL DEFAULT 'TOTP',
    "secret" TEXT,
    "iv" BLOB,
    "backup_codes" JSONB,
    "is_enabled" BOOLEAN NOT NULL DEFAULT false,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "two_factor_auth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_two_factor_auth" ("backup_codes", "created_at", "id", "is_enabled", "method", "secret", "updated_at", "user_id") SELECT "backup_codes", "created_at", "id", "is_enabled", "method", "secret", "updated_at", "user_id" FROM "two_factor_auth";
DROP TABLE "two_factor_auth";
ALTER TABLE "new_two_factor_auth" RENAME TO "two_factor_auth";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
