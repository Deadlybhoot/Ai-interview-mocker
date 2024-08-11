/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:R2wMAQnko5Nl@ep-floral-fire-a599kcbd.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };