const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const obj = {...employee};
  obj[key] = value;
  return obj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const obj = {...employee};
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}