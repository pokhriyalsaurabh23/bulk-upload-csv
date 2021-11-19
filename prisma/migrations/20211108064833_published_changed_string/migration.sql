-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tutorial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" TEXT NOT NULL
);
INSERT INTO "new_Tutorial" ("description", "id", "published", "title") SELECT "description", "id", "published", "title" FROM "Tutorial";
DROP TABLE "Tutorial";
ALTER TABLE "new_Tutorial" RENAME TO "Tutorial";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
