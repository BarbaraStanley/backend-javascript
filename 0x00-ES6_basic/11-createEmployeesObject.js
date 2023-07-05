export default function createEmployeesObject(departmentName, employees) {
  const fmobj = {
    [departmentName]: employees,
  };
  return fmobj;
}
