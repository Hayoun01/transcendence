-- CreateTable
CREATE TABLE "OutBox" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "OutBox_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_oauth_links" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "oauth_links_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_oauth_links" ("created_at", "id", "provider", "provider_id", "updated_at", "user_id") SELECT "created_at", "id", "provider", "provider_id", "updated_at", "user_id" FROM "oauth_links";
DROP TABLE "oauth_links";
ALTER TABLE "new_oauth_links" RENAME TO "oauth_links";
CREATE UNIQUE INDEX "oauth_links_provider_provider_id_key" ON "oauth_links"("provider", "provider_id");
CREATE TABLE "new_two_factor_auth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "method" TEXT NOT NULL DEFAULT 'totp',
    "secret" TEXT,
    "iv" BLOB,
    "tag" BLOB,
    "backup_codes" JSONB,
    "is_enabled" BOOLEAN NOT NULL DEFAULT false,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "two_factor_auth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_two_factor_auth" ("backup_codes", "created_at", "id", "is_enabled", "is_verified", "iv", "method", "secret", "tag", "updated_at", "user_id") SELECT "backup_codes", "created_at", "id", "is_enabled", "is_verified", "iv", "method", "secret", "tag", "updated_at", "user_id" FROM "two_factor_auth";
DROP TABLE "two_factor_auth";
ALTER TABLE "new_two_factor_auth" RENAME TO "two_factor_auth";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password_hashed" TEXT,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'active',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" DATETIME
);
INSERT INTO "new_users" ("created_at", "deleted_at", "email", "id", "is_verified", "password_hashed", "status", "updated_at") SELECT "created_at", "deleted_at", "email", "id", "is_verified", "password_hashed", "status", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
