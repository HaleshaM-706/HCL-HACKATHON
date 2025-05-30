import mongoose, { Schema, Document, Model } from "mongoose";

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

AdminSchema.pre<IAdmin>("save", function (next) {
  this.UpdatedDate = new Date();
  next();
});

const Admin: Model<IAdmin> = mongoose.model<IAdmin>("Admin", AdminSchema);
export default Admin;

