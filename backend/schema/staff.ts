import mongoose, { Schema, Document, Model } from "mongoose";
import config from "config";

const roles = config.get<Record<string, string>>("roles");

export interface IStaff extends Document {
  staffId: string;
  staffName: string;
  department: string;
  role: string;
  isActive: boolean;
  createdDate: Date;
  updatedDate: Date;
}

const StaffSchema: Schema<IStaff> = new Schema({
  staffId: { type: String, required: true, unique: true },
  staffName: { type: String, required: true },
  department: { type: String, required: true },
  role: {
    type: String,
    enum: [roles.doctor, roles.nurse, roles.technician],
    required: true,
  },
  isActive: { type: Boolean, default: true },
  createdDate: { type: Date, default: () => new Date() },
  updatedDate: { type: Date, default: () => new Date() },
});

StaffSchema.pre<IStaff>("save", function (next) {
  this.updatedDate = new Date();
  next();
});

const Staff: Model<IStaff> = mongoose.model<IStaff>("Staff", StaffSchema);
export default Staff;
