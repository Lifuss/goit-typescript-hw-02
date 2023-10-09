/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

const isWeekend = (day: string): boolean => {
  if (Day.Saturday === day || Day.Sunday === day) {
    return true;
  }
  return false;
};

console.log(isWeekend("saturday"));
