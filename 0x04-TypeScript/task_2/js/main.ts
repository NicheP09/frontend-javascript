function isDirector(employee: Director | TeacherClass): employee is Director {
  return employee instanceof Director;
}
function executeWork(employee: Director | TeacherClass): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
