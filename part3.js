//Part 3: Array with Types and Indexing - Employee Salaries
//. Define an array named employees containing employee objects. Each employee 
// object should include a name, hoursWorked, hourlyRate, and salary. 
var employees = [
    { name: "Ruhab", hoursWorked: 15, hourlyRate: 10, salary: 0 },
    { name: "Mishal", hoursWorked: 15, hourlyRate: 9, salary: 0 }, //salaries are need to be calculated
    { name: "Anusha", hoursWorked: 30, hourlyRate: 18, salary: 0 }
];
//Implement a function named calculateSalary that calculates the salary for each 
//employee based on the hours worked and hourly rate.
function calculateSalary(employee) {
    var Salary = employee.hoursWorked * employee.hourlyRate;
    //If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
    if (employee.hoursWorked >= 20) {
        Salary *= 1.1;
    }
    return Salary;
}
employees.forEach(function (employee) {
    employee.salary = calculateSalary(employee);
    console.log("Employee: " + employee.name + ", Salary:" + employee.salary);
});
