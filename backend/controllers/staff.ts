import { NextFunction, Request, Response } from 'express';
import Staff from '../schema/staff';
import config from 'config';

const roles = config.get<Record<string, string>>('roles');

export const createOrEditStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { staffId, staffName, department, role } = req.body;

    // Validate required fields
    if (!staffName || !department || !role) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate role
    if (!Object.values(roles).includes(role)) {
      return res.status(400).json({ message: 'Invalid role value' });
    }

    let finalStaffId = staffId;

    // Generate staffId if not provided
    if (!finalStaffId) {
      const count = await Staff.countDocuments();
      const roleInitial = role.charAt(0).toUpperCase();
      finalStaffId = `${roleInitial}${count + 1}`;
    }

    // Find staff by staffId
    let staff = await Staff.findOne({ staffId: finalStaffId });

    if (staff) {
      // Update existing staff
      staff.staffName = staffName;
      staff.department = department;
      staff.role = role;
      staff.updatedDate = new Date();
      await staff.save();
      return res.status(200).json({ message: 'Staff updated successfully', staff });
    } else {
      // Create new staff
      staff = new Staff({
        staffId: finalStaffId,
        staffName,
        department,
        role,
        isActive: true,
        createdDate: new Date(),
        updatedDate: new Date()
      });

      await staff.save();
      return res.status(201).json({ message: 'Staff created successfully', staff });
    }
  } catch (error) {
    console.error('Error creating or editing staff:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
