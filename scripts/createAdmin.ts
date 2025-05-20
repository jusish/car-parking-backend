import prisma from "../prisma/prisma-client"; // adjust path as needed
import bcrypt from "bcrypt";

async function createAdminIfNotExists() {
  const adminEmail = process.env.ADMIN_EMAIL!;
  const rawPassword = process.env.ADMIN_PASSWORD!;

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    await prisma.user.create({
      data: {
        firstName: "System",
        lastName: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "ADMIN",
        emailVerified: true,
      },
    });

    console.log("✅ Admin user created!");
  } else {
    console.log("ℹ️ Admin already exists.");
  }
}

createAdminIfNotExists()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
