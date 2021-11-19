-- CreateTable
CREATE TABLE "Tutorial" (
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutorial_title_key" ON "Tutorial"("title");
