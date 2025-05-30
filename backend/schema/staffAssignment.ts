import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IStaffAssignment extends Document {
  Type: string;
  StaffId: Types.ObjectId;
  Attendance: number;
  Capacity: number;
  AssignedDate: Date;
  CreatedDate: Date;
  UpdatedDate: Date;
}

const StaffAssignmentSchema: Schema<IStaffAssignment> = new Schema({
  Type: { type: String, required: true },
  StaffId: { type: Schema.Types.ObjectId, ref: "Staff", required: true },
  Attendance: { type: Number, required: true },
  Capacity: { type: Number, required: true },
  AssignedDate: { type: Date, required: true },
  CreatedDate: { type: Date, default: () => new Date() },
  UpdatedDate: { type: Date, default: () => new Date() },
});

StaffAssignmentSchema.pre<IStaffAssignment>("save", function (next) {
  this.UpdatedDate = new Date();
  next();
});

const StaffAssignment: Model<IStaffAssignment> =
  mongoose.model<IStaffAssignment>("StaffAssignment", StaffAssignmentSchema);
export default StaffAssignment;
