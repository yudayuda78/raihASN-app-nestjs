/*
  Warnings:

  - You are about to drop the `Soal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tryout` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "KategoriMateri" AS ENUM ('tiu', 'twk', 'tkp');

-- DropForeignKey
ALTER TABLE "public"."Soal" DROP CONSTRAINT "Soal_tryoutId_fkey";

-- DropTable
DROP TABLE "public"."Soal";

-- DropTable
DROP TABLE "public"."Tryout";

-- CreateTable
CREATE TABLE "TryoutCpns" (
    "id" SERIAL NOT NULL,
    "tryoutName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "TryoutCpns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoalCpns" (
    "id" SERIAL NOT NULL,
    "soal" TEXT NOT NULL,
    "tryoutCpnsId" INTEGER NOT NULL,
    "jenisMateri" "KategoriMateri" NOT NULL,
    "optionA" TEXT,
    "optionB" TEXT,
    "optionC" TEXT,
    "optionD" TEXT,
    "optionE" TEXT,
    "correctOption" TEXT,
    "optionAImage" TEXT,
    "optionBImage" TEXT,
    "optionCImage" TEXT,
    "optionDImage" TEXT,
    "optionEImage" TEXT,

    CONSTRAINT "SoalCpns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TryoutPppk" (
    "id" SERIAL NOT NULL,
    "tryoutName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "TryoutPppk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoalPppk" (
    "id" SERIAL NOT NULL,
    "soal" TEXT NOT NULL,
    "tryoutPppkId" INTEGER NOT NULL,
    "jenisMateri" "KategoriMateri" NOT NULL,
    "optionA" TEXT,
    "optionB" TEXT,
    "optionC" TEXT,
    "optionD" TEXT,
    "optionE" TEXT,
    "correctOption" TEXT,
    "optionAImage" TEXT,
    "optionBImage" TEXT,
    "optionCImage" TEXT,
    "optionDImage" TEXT,
    "optionEImage" TEXT,

    CONSTRAINT "SoalPppk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TryoutCpns_slug_key" ON "TryoutCpns"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TryoutPppk_slug_key" ON "TryoutPppk"("slug");

-- AddForeignKey
ALTER TABLE "SoalCpns" ADD CONSTRAINT "SoalCpns_tryoutCpnsId_fkey" FOREIGN KEY ("tryoutCpnsId") REFERENCES "TryoutCpns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoalPppk" ADD CONSTRAINT "SoalPppk_tryoutPppkId_fkey" FOREIGN KEY ("tryoutPppkId") REFERENCES "TryoutPppk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
