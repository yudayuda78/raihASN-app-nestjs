-- CreateTable
CREATE TABLE "Tryout" (
    "id" SERIAL NOT NULL,
    "tryoutName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Tryout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soal" (
    "id" SERIAL NOT NULL,
    "soal" TEXT NOT NULL,
    "tryoutId" INTEGER NOT NULL,

    CONSTRAINT "Soal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tryout_slug_key" ON "Tryout"("slug");

-- AddForeignKey
ALTER TABLE "Soal" ADD CONSTRAINT "Soal_tryoutId_fkey" FOREIGN KEY ("tryoutId") REFERENCES "Tryout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
