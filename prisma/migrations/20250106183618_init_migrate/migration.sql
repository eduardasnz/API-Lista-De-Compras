-- CreateTable
CREATE TABLE "Lists" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "measure" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "listID" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_listID_fkey" FOREIGN KEY ("listID") REFERENCES "Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
