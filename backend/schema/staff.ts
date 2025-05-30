import mongoose, { Schema, Document, Model } from "mongoose";
import config from "config";

const roles = config.get<Record<string, string>>("roles");

export interface IStaff extends Document {
  StaffId: string;
  StaffName: string;
  Department: string;
  Role: string;
  IsActive: boolean;
  CreatedDate: Date;
  UpdatedDate: Date;
}

const StaffSchema: Schema<IStaff> = new Schema({
  StaffId: { type: String, required: true, unique: true },
  StaffName: { type: String, required: true },
  Department: { type: String, required: true },
  Role: {
    type: String,
    enum: [roles.doctor, roles.nurse, roles.technician],
    required: true,
  },
  IsActive: { type: Boolean, default: true },
  CreatedDate: { type: Date, default: () => new Date() },
  UpdatedDate: { type: Date, default: () => new Date() },
});

StaffSchema.pre<IStaff>("save", function (next) {
  this.UpdatedDate = new Date();
  next();
});

const Staff: Model<IStaff> = mongoose.model<IStaff>("Staff", StaffSchema);
export default Staff;
