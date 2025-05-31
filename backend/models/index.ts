import mongoose from "mongoose";
import dotenv from "dotenv";
// import Staff from "../schema/staff";
// import StaffAssignment from "../schema/staffAssignment";
import Admin from "../schema/admins";
import config from "config";

dotenv.config();

const MONGO_URI = config.get<string>("mongodbUri") || "";
console.log("Mongo url", MONGO_URI);
async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    const existingAdmin = await Admin.findOne({
      $or: [{ email: "admin@hclhospital.com" }, { username: "hcladmin" }],
    });
    if (existingAdmin) {
      console.log("Admin already exists:", existingAdmin);
      return existingAdmin;
    }

    const admin = new Admin({
      name: "HCL Admin",
      email: "admin@hclhospital.com",
      username: "hcladmin",
      password: "!Aworker2#",
    });

    await admin.save();
    console.log("Admin created:", admin);
  } catch (err) {
    console.error("Error connecting to MongoDB or saving data", err);
  }
}

main();
