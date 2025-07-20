-- CreateTable
CREATE TABLE "user_profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "avatar_path" TEXT,
    "avatar_name" TEXT,
    "bio" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
