/*
  Warnings:

  - The values [STANDARD,PREMIUM,VIP,DISABLED] on the enum `parking_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "parking_category_new" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');
ALTER TABLE "parkings" ALTER COLUMN "slotCategory" TYPE "parking_category_new" USING ("slotCategory"::text::"parking_category_new");
ALTER TYPE "parking_category" RENAME TO "parking_category_old";
ALTER TYPE "parking_category_new" RENAME TO "parking_category";
DROP TYPE "parking_category_old";
COMMIT;
