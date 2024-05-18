//Part 2: Multi-Dimensional Arrays and Tuples - Student Grades 


//. Define a TypeScript type alias named Student to represent a student with the 
// following properties: 
// • name (string): The name of the student. 
// • grades (number[ ]): An array of grades for different subjects.

type student = {
    name:string;
    grade:number[];

};
//Create an array named students containing at least three student objects. Each student 
//object should include a name and an array of grades.
let students:student[]=[
{name: "Amna ", grade: [70,82,56,75,41]},
{name:"hania", grade: [90,73,81,67,77]},
{name:"huma", grade: [80,76,61,57,67]},

];
// Implement a function named calculateAverageGrade that takes a student's grades as 
// input and returns the average grade for that student. 
function calculateAverageGrade (grades:number[]){

    const average= grades.reduce((sum,grade)=>sum+grade,0);
    return average/grades.length;
}

//Display each student's name and average grade. Iterate through the students array, 
// calculate the average grade for each student using the calculateAverageGrade 
// function, and print their name and average grade.

students.forEach(student => {
     const averageGrade = calculateAverageGrade(student.grade);
     console.log("Student: " +student.name+ ", Average Grade: " +averageGrade);
 });
