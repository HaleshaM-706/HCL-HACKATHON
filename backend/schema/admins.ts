import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from 'bcryptjs';

export interface IAdmin extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
  CreatedDate: Date;
  UpdatedDate: Date;
}

const AdminSchema: Schema<IAdmin> = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  CreatedDate: { type: Date, default: () => new Date() },
  UpdatedDate: { type: Date, default: () => new Date() },
});

AdminSchema.pre<IAdmin>("save", async function (next) {
  this.UpdatedDate = new Date();
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

AdminSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin: Model<IAdmin> = mongoose.model<IAdmin>("Admin", AdminSchema);
export default Admin;

