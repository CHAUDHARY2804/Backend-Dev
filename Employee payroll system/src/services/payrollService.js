import Employee from "../models/Employee.js";

// create employee
export const createEmployee = async (data) => {
  return await Employee.create(data);
};

// calculate salary
export const calculateSalary = async (empId) => {
  const emp = await Employee.findOne({ empId });

  if (!emp) throw new Error("Employee not found");

  const netSalary = emp.basicSalary + emp.bonus - emp.deductions;

  return {
    name: emp.name,
    department: emp.department,
    basicSalary: emp.basicSalary,
    bonus: emp.bonus,
    deductions: emp.deductions,
    netSalary
  };
};