import prisma from "../prisma/client";

beforeAll(async () => {
  // Connect to the test database
  await prisma.$connect();
});

afterAll(async () => {
  // Disconnect from the test database
  await prisma.$disconnect();
});

beforeEach(async () => {
  const tables = ["User", "Post", "Account", "Session", "VerificationToken"];
  // Clear the test database before each test
  tables.forEach((table) => {
    prisma.$executeRaw(`TRUNCATE TABLE "public"."${table}" CASCADE;`);
  });
});

describe("Just for tests", () => {
  it("True must return True", () => {
    expect(true).toBe(true);
  });
});
