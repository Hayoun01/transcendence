/*
  Warnings:

  - Added the required column `username` to the `user_profile` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user_profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "avatar_path" TEXT,
    "avatar_name" TEXT,
    "bio" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_user_profile" ("avatar_name", "avatar_path", "bio", "created_at", "id", "updated_at") SELECT "avatar_name", "avatar_path", "bio", "created_at", "id", "updated_at" FROM "user_profile";
DROP TABLE "user_profile";
ALTER TABLE "new_user_profile" RENAME TO "user_profile";
CREATE UNIQUE INDEX "user_profile_username_key" ON "user_profile"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
